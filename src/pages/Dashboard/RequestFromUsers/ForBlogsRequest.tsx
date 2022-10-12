import { RequestFromUserRow } from "./RequestFromUsers";

type Props = {};

const ForBlogsRequest = (props: Props) => {
  return (
    <>
      <div className="request-table mt-5 overflow-x-auto">
        <table className="table table-compact table-striped w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>role</th>
              <th>Is Verified</th>

              <th>Message</th>
              <th>Blog Link</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <RequestFromUserRow />
            <RequestFromUserRow />
            <RequestFromUserRow />
            <RequestFromUserRow />
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="pagination flex items-center justify-center mt-10 gap-2">
        <a href="/" className="btn btn-circle btn-ghost btn-sm">
          1
        </a>
        <a href="/" className="btn btn-circle btn-ghost btn-sm btn-active">
          2
        </a>
        <a href="/" className="btn btn-circle btn-ghost btn-sm">
          3
        </a>
      </div>
    </>
  );
};

export default ForBlogsRequest;
