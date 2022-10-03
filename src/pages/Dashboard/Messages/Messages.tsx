type Props = {};

const Messages = (props: Props) => {
  return (
    <div>
      <div className="p-5 my-4 bg-white">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-bold">Send Email to The All Users </h3>{" "}
          <small className="badge badge-success text-xs">admin</small>
        </div>
      </div>
    </div>
  );
};

export default Messages;
