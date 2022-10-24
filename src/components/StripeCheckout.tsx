import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckoutForm from "./StripeCheckoutForm";
type Props = {
  userInfo: any;
};

const stripePromise = loadStripe(
  `pk_test_51L1TGlIFKTQHETSiTvzqn7XB7QHqL6Gxa3GbqnLZvO1wVtSFdMdEZdEvVY5KhbRUvhyUeBYgvhFIjSKtWg808bal00uf2cj4Hg`
);

const StripeCheckout = ({ userInfo }: Props) => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <StripeCheckoutForm userInfo={userInfo} />
      </Elements>
    </div>
  );
};

export default StripeCheckout;
