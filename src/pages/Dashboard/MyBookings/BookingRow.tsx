import { useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import swal from "sweetalert";
type Props = {
  payment: any;
};

const BookingRow = ({ payment }: Props) => {
  const [isCopy, setIsCopy] = useState(false);

  /* Handle Copy */
  const copyToClipboard = (e: any) => {
    navigator.clipboard.writeText(e.target.innerText);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 1000);
  };

  /* Handle Delete Bookings */
  const handleDelete = async (id: string) => {
    const isConfirm = await swal({
      title: "Are you sure? You want to delete this booking? ",
      text: "Once deleted, you will not be able to recover this payment statement! (Not recommendation)",
      icon: "warning",
      buttons: ["cancel", "yes! delete it"],
      dangerMode: true,
    });

    if (isConfirm) {
      swal("Poof! Your payment statement has been deleted!", {
        icon: "success",
      });
      console.log("Delete", id);
    } else {
      swal("Your payment statement is safe!");
    }
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
                  payment?.author?.profileImage
                    ? payment?.author?.profileImage
                    : payment?.author?.avatar
                }
                alt={payment?.author?.name}
                className="rounded-full w-12"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{payment?.author?.name}</div>
            <div className="text-sm opacity-50">{payment?.author?.address}</div>
          </div>
        </div>
      </th>
      <th>
        <div
          className="flex items-center space-x-3 tooltip "
          data-tip={payment?.author?.email}
        >
          <div className="text-sm opacity-50">Email</div>
          <div className="font-bold">
            {payment?.author?.email.slice(0, 10) + "..."}
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-sm opacity-50">Phone</div>
          <div className="font-bold">{payment?.author?.phone}</div>
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
        <span className="badge badge-ghost">{payment?.method}</span>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="text-sm opacity-50">Paid</div>
          <div className="font-bold">{payment?.money}</div>
        </div>
      </td>
      <td>
        <span
          className="badge badge-ghost tooltip tooltip-success cursor-pointer"
          data-tip={isCopy ? "Copied to your clipboard" : "Click to copy"}
          onClick={copyToClipboard}
        >
          {payment?.transactionId}
        </span>
      </td>
      <td>
        <div className="badge badge-success"> booked </div>
      </td>

      <td>
        <div className="flex items-center gap-2">
          <Link
            to={`/house/${payment?.house?._id}`}
            className="btn btn-circle btn-ghost btn-sm"
          >
            <BsEye />
          </Link>
          <button
            onClick={() => handleDelete(payment?._id)}
            className="btn btn-ghost btn-circle btn-sm text-error"
          >
            <BiTrashAlt />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BookingRow;
