import { BiEditAlt, BiTrash } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";

type Props = {};

const UserReviews = (props: Props) => {
  return (
    <div>
      {/* Reviews Table */}
      <div className="overflow-x-auto my-8">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Ratings</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>
                <div className="flex items-center gap-2">
                  <span className="text-success">
                    <BsStarFill />
                  </span>
                  <span className="text-success">
                    <BsStarFill />
                  </span>
                  <span className="text-success">
                    <BsStarFill />
                  </span>
                  <span className="text-success">
                    <BsStarFill />
                  </span>
                  <span className="text-success">
                    <BsStarFill />
                  </span>
                </div>
              </td>
              <td>
                <a href="mailto:ashik@gmail.com">
                  <span className="text-success">ashik@gmail.com</span>
                </a>
              </td>
              <td>
                <button className="text-success">
                  <BiEditAlt />
                </button>
                <button className="text-error ml-3">
                  <BiTrash />
                </button>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>
                <div className="flex items-center gap-2">
                  <span className="text-success">
                    <BsStarFill />
                  </span>
                  <span className="text-success">
                    <BsStarFill />
                  </span>
                  <span className="text-success">
                    <BsStarFill />
                  </span>
                  <span className="text-success">
                    <BsStarFill />
                  </span>
                  <span className="text-success">
                    <BsStarFill />
                  </span>
                </div>
              </td>
              <td>
                <a href="mailto:ashik@gmail.com">
                  <span className="text-success">ashik@gmail.com</span>
                </a>
              </td>
              <td>
                <button className="text-success">
                  <BiEditAlt />
                </button>
                <button className="text-error ml-3">
                  <BiTrash />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserReviews;
