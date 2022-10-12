import { BiCheck, BiX } from "react-icons/bi";
type Props = {
  data: any;
  ind: number;
  refetch: () => void;
};
const HouseReqRow = ({ ind, data }: Props) => {
  return (
    <tr>
      <td>{ind + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={
                  data?.author.profileImage
                    ? `http://localhost:5000/profiles/${data.author.profileImage}`
                    : data?.author?.avatar
                }
                alt={data?.author.name || "User"}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{data?.author?.name}</div>
            <div className="text-sm opacity-50">{data?.author?.role}</div>
          </div>
        </div>
      </td>
      <td>
        <a href={`mailto:${data?.author?.email}`}>{data?.author?.email}</a>
      </td>
      <td>
        <a href="tel:+880123456789">+{data?.author?.phone}</a>
      </td>

      <td>
        {data?.notes.length > 100
          ? data?.notes.slice(0, 100) + "..."
          : data?.notes}
      </td>
      <td>
        <button className="badge badge-success badge-lg text-sm font-poppins cursor-pointer">
          <BiCheck /> Confirm
        </button>
        <button className="badge badge-error ml-3 badge-lg text-sm font-poppins cursor-pointer">
          <BiX /> Remove
        </button>
      </td>
    </tr>
  );
};

export default HouseReqRow;
