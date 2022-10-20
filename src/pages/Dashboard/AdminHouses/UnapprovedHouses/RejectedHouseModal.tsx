import axios from "axios";
import cogoToast from "cogo-toast";
import { useForm } from "react-hook-form";
import { BiReceipt } from "react-icons/bi";
import swal from "sweetalert";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";

type Props = { houseId: String; refetch: () => void };

const RejectedHouseModal = ({ houseId, refetch }: Props) => {
  const { user } = useAuth<authUserInterface | any>({});
  const { register, handleSubmit, reset } = useForm();

  /* Handle Reject House */
  const handleRejectHouse = handleSubmit(async (data) => {
    if (!data?.notes) return cogoToast.warn(`Reject notes is required.`);
    const isConfirm = await swal({
      title: "Are you sure?",
      text: "Once rejected, you will be able to recover again!",
      icon: "warning",
      buttons: ["cancel", "okay"],
      dangerMode: true,
    });
    if (isConfirm) {
      const rejectContent = {
        notes: data?.notes,
      };
      const { data: newData } = await axios.patch(
        `http://localhost:5000/api/v1/admin/reject/${houseId}`,
        rejectContent,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      swal(`${newData?.message}`, {
        icon: "success",
      });
      refetch();
      reset();
    }
  });

  return (
    <form onSubmit={handleRejectHouse}>
      <input
        type="checkbox"
        id="permission-no-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-xl">Reject Notes</h3>

          <div className="modal-body">
            {/* Name */}
            <div className="name border  rounded p-3 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">Put Reject Notes</h3>
              </div>
              <label
                htmlFor="choose-file"
                className="input-group flex items-center my-2 "
              >
                <div className="icon text-lg">
                  <BiReceipt />
                </div>
              </label>
              <textarea
                id=""
                cols={5}
                rows={6}
                className="w-full font-poppins outline-none border p-4 rounded"
                placeholder="Why are you reject?"
                {...register("notes")}
              ></textarea>
            </div>
            {/* End */}
          </div>
          <div className="modal-action">
            <label htmlFor="permission-no-modal" className="btn btn-warning">
              Cancel
            </label>
            <button className="btn btn-success">Rejected</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RejectedHouseModal;
