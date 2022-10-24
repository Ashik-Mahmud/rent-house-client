import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import cogoToast from "cogo-toast";
import { useQuery } from "react-query";
import { base_backend_url } from "../configs/config";
import useAuth from "../hooks/useAuth";
import { authUserInterface } from "../interfaces/UserInterface";

type Props = {
  userInfo: any;
};

const StripeCheckoutForm = ({ userInfo }: Props) => {
  const { updatedUser, user } = useAuth<authUserInterface | any>({});
  const stripe = useStripe();
  const elements = useElements();

  /* Send Request to get payment instance */
  const { data } = useQuery("payment", async () => {
    const { data } = await axios.post(
      `${base_backend_url}/api/v1/payment/create-payment-instance`,
      {
        amount: 100,
        email: userInfo.email,
        name: userInfo.name,
        phone: userInfo.phone,
        password: userInfo.password,
      },
      {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      }
    );
    return data;
  });

  console.log(data?.client_secret);

  const handleSubmit = async (event: any) => {
    // Block native form submission.
    event.preventDefault();
    if (!updatedUser?._id) {
      if (
        userInfo?.name === "" ||
        userInfo?.email === "" ||
        userInfo?.phone === "" ||
        userInfo?.password === ""
      ) {
        cogoToast.error("Please fill up all the fields");
        return;
      }

      /* Password validation */
      if (userInfo?.password.length < 6) {
        cogoToast.error("Password must be at least 6 characters");
        return;
      }
      /* Is password Strong or not validation */
      const isPasswordStrong =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
          userInfo?.password
        );
      if (!isPasswordStrong) {
        cogoToast.error(
          "Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character"
        );
        return;
      }
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
      console.log(paymentIntent);

      const { data: savePayment } = await axios.post(
        `${base_backend_url}/api/v1/payment/bookings`
      );
      cogoToast.success(`Payment successfully done.`);
    }
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
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
        <button
          type="submit"
          disabled={!stripe || !data?.client_secret}
          className="btn btn-primary w-full"
        >
          Pay 100 tk for Details & Track
        </button>
      </form>
    </div>
  );
};

export default StripeCheckoutForm;
