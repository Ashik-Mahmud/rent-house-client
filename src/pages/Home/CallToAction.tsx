import { BsEnvelopeOpen, BsTelephoneOutbound } from "react-icons/bs";
import { RiFeedbackLine } from "react-icons/ri";
type Props = {};
const CallToAction = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto p-20 -mb-48 z-50 relative">
        <div className="call-to-action-cards flex  justify-center gap-10">
          <div className="call-to-action-card shadow-lg bg-gray-50 p-10 text-center rounded-lg  flex-1">
            <div className="call-to-action-card__icon text-4xl grid justify-center py-4 ">
              <BsTelephoneOutbound />
            </div>
            <div className="call-to-action-card__content">
              <h3 className="call-to-action-card__title">Call Us</h3>
              <p className="call-to-action-card__text text-success mt-3">
                +1 234 567 8900
              </p>
            </div>
          </div>
          <div className="call-to-action-card shadow-lg bg-gray-50 p-10 text-center rounded-lg  flex-1">
            <div className="call-to-action-card__icon text-4xl grid justify-center py-4 ">
              <BsEnvelopeOpen />
            </div>
            <div className="call-to-action-card__content">
              <h3 className="call-to-action-card__title">
                Get Contact Support
              </h3>
              <a
                href="/"
                className="btn btn-success btn-lg capitalize text-sm mt-4"
              >
                Contact Support
              </a>
            </div>
          </div>
          <div className="call-to-action-card shadow-lg bg-gray-50 p-10 text-center rounded-lg flex-1">
            <div className="call-to-action-card__icon text-4xl grid justify-center py-4 ">
              <RiFeedbackLine />
            </div>
            <div className="call-to-action-card__content">
              <h3 className="call-to-action-card__title">Leave a Feedback</h3>
              <a
                href="/"
                className="btn btn-success btn-lg capitalize text-sm mt-4"
              >
                Send Feedback
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
