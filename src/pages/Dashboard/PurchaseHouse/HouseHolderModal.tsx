import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

type Props = {};

const HouseHolderModal = (props: Props) => {
  return (
    <div>
      <input
        type="checkbox"
        id="owners-details-modal"
        className="modal-toggle"
      />
      <div className="modal modal-middle sm:modal-middle">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-xl">Owner's Profile Information</h3>

          <div className="modal-body mt-5">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Ashik Mahmud</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>
                      <a href="mailto:ashik@gmail.com">ashik@gmail.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>
                      <a href="cel:0178454545">01548745452</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Social Media</td>
                    <td>
                      <div className="flex items-center gap-3">
                        {" "}
                        <a href="/">
                          <BsFacebook />
                        </a>
                        <a href="/">
                          <BsTwitter />
                        </a>
                        <a href="/">
                          <BsInstagram />{" "}
                        </a>
                      </div>{" "}
                    </td>
                  </tr>
                  {/* 
                
                 */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="owners-details-modal" className="btn btn-warning">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseHolderModal;
