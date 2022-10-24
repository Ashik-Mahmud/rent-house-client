import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import cogoToast from "cogo-toast";
import { useRef, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import swal from "sweetalert";
import { base_backend_url } from "../configs/config";
import useAuth from "../hooks/useAuth";
import { authUserInterface } from "../interfaces/UserInterface";

type Props = {
  userInfo: any;
};

const StripeCheckoutForm = ({ userInfo }: Props) => {
  const { updatedUser, user } = useAuth<authUserInterface | any>({});
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const formRef = useRef(null);

  /* Send Request to get payment instance */
  const { data } = useQuery("payment", async () => {
    const { data } = await axios.post(
      `${base_backend_url}/api/v1/payment/create-payment-instance`,
      {},
      {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      }
    );
    return data;
  });

  const handleSubmit = async (event: any) => {
    // Block native form submission.
    event.preventDefault();

    if (!updatedUser?.isVerified) {
      return swal({
        title: "Please Verify Your Email to get Booked",
        text: "to get verify you should go to the profile area",
        icon: "warning",
      });
    }
    if (!updatedUser?.phone) {
      return swal({ title: "Please Add Your Phone Number First" });
    }

    if (!stripe || !elements) {
      cogoToast.error("Information has not loaded yet");
      return;
    }

    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      cogoToast.error("Card is not loaded yet");
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      cogoToast.error((error as any).message);
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    /* Create Confirmation Payment */
    setIsLoading(true);
    const { error: confirmationErr, paymentIntent } =
      await stripe.confirmCardPayment(data?.client_secret, {
        payment_method: {
          card: card,
          billing_details: {
            name: updatedUser?.name,
            address: updatedUser?.address,
            phone: updatedUser?.phone,
          },
        },
      });

    if (confirmationErr) {
      return cogoToast.error((confirmationErr as any)?.message);
    }
    if (paymentIntent) {
      const savedContent = {
        house: userInfo?.house?._id,
        author: userInfo?.house?.owner,
        user: updatedUser?._id,
        method: "Stripe",
        transactionId: paymentIntent?.id,
        money: 100,
        status: "booked",
      };

      const { data: savePayment } = await axios.post(
        `${base_backend_url}/api/v1/payment/bookings`,
        savedContent,
        {
          headers: {
            authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (savePayment) {
        swal({
          title: "Success",
          text: "Your booking has been successfully done",
          icon: "success",
          buttons: ["cancel", "Ok"],
        }).then(() => {
          navigate("/dashboard/bookings");
          setIsLoading(false);
        });
      }
    }
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit} ref={formRef}>
        {/* Card Number */}
        <div className="name border  rounded p-3 relative mt-7 flex-1">
          <div className="name-title absolute -top-4 bg-white border rounded p-1">
            <h3 className="text-xs font-poppins">Put your Card Number</h3>
          </div>
          <div className=" my-2 border p-3 rounded-md mt-2">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>
        {/* End */}
        <div className="my-3 flex items-center gap-2 font-poppins mt-3">
          <input
            type="checkbox"
            name="permission"
            className="checkbox"
            id="permission"
            required
          />{" "}
          <label htmlFor="permission">Accept all the Condition & Policy</label>
        </div>
        {isLoading ? (
          <button className="btn btn-primary w-full mt-3" disabled>
            <div className="flex items-center justify-center gap-2">
              <PulseLoader size={8} color="#fff" /> <span>Processing</span>
            </div>
          </button>
        ) : (
          <button
            type="submit"
            disabled={!stripe || !data?.client_secret}
            className="btn btn-primary w-full"
          >
            Pay 100 tk for Details & Track
          </button>
        )}
      </form>
    </div>
  );
};

export default StripeCheckoutForm;
