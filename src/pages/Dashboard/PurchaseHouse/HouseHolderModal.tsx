import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

type Props = {
  owner: any;
};

const HouseHolderModal = ({ owner }: Props) => {
  console.log(owner);
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
                    <th>{owner?.name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>
                      <a href={`mailto:${owner?.email}`}>{owner?.email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>
                      <a href={`tel:${owner?.phone}`}>{owner?.phone}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Social Media</td>
                    <td>
                      <div className="flex items-center gap-3">
                        {owner?.facebookLink && (
                          <a
                            href={owner?.facebookLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <BsFacebook />
                          </a>
                        )}
                        {owner?.twitterLink && (
                          <a
                            href={owner?.twitterLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <BsTwitter />
                          </a>
                        )}
                        {owner?.instagramLink && (
                          <a
                            href={owner?.instagramLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <BsInstagram />
                          </a>
                        )}
                      </div>
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
