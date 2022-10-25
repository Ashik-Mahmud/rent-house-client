import { useState } from "react";
import { BiMessageAltAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import SendThankEmail from "./SendThankEmail";
type Props = {
  payment: any;
};

const PaymentRow = ({ payment }: Props) => {
  const [isCopy, setIsCopy] = useState(false);
  /* Handle Copy */
  const copyToClipboard = (e: any) => {
    navigator.clipboard.writeText(e.target.innerText);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 1000);
  };
  return (
    <tr>
      <td className="uppercase">P-{payment?._id?.slice(10, 15)}</td>
      <th>
        <div className="flex items-center space-x-3">
          <div className="avatar online placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <img
                src={
                  payment?.user?.profileImage
                    ? payment?.user?.profileImage
                    : payment?.user?.avatar
                }
                alt={payment?.user?.name}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{payment?.user?.name}</div>
            <div className="text-sm opacity-50">{payment?.user?.role}</div>
          </div>
        </div>
      </th>
      <th>
        <div
          className="flex items-center space-x-3 tooltip "
          data-tip={payment?.user?.email}
        >
          <div className="text-sm opacity-50">Email</div>
          <div className="font-bold">
            {payment?.user?.email.slice(0, 10) + "..."}
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-sm opacity-50">Phone</div>
          <div className="font-bold">{payment?.user?.phone}</div>
        </div>
      </th>
      <td>
        <Link
          to={`/house/${payment?.house?._id}`}
          className="flex items-center space-x-3"
        >
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={
                  payment?.house?.image?.img
                    ? payment?.house?.image?.img
                    : "https://placeimg.com/400/225/arch"
                }
                alt={payment?.house?.name}
              />
            </div>
          </div>
          <div>
            <div className="font-bold tooltip" data-tip={payment?.house?.name}>
              {payment?.house?.name?.slice(0, 10) + "..."}
            </div>
            <div className="text-sm opacity-50">{payment?.house?.address}</div>
          </div>
        </Link>
      </td>

      <td>
        <div className="flex items-center space-x-3">
          <div className="text-sm opacity-50">paid In</div>
          <div className="font-bold">{payment?.money}</div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost">{payment?.method}</span>{" "}
      </td>
      <td>
        <span
          data-tip={isCopy ? "Copied to your clipboard" : "Click to copy"}
          onClick={copyToClipboard}
          className="badge badge-ghost tooltip tooltip-success cursor-pointer"
        >
          {payment?.transactionId}
        </span>
      </td>
      <td>
        <div className="badge badge-success"> {payment?.status} </div>
      </td>

      <td>
        <div className="flex items-center gap-2 justify-center">
          <label
            htmlFor="send-thanks-modal"
            className="cursor-pointer text-lg text-success tooltip tooltip-success"
            data-tip="Send Email to Thank him/her"
          >
            <BiMessageAltAdd />
          </label>
          <SendThankEmail />
        </div>
      </td>
    </tr>
  );
};

export default PaymentRow;
