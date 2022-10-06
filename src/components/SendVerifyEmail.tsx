type Props = {
  title: string;
  desc: string;
};

const SendVerifyEmail = ({ title, desc }: Props) => {
  return (
    <div className="flex items-center justify-center gap-4 flex-col py-10">
      <h3 className="text-4xl font-bold">{title}</h3>
      <p>{desc}</p>
      <button className="btn btn-lg btn-success rounded-full">
        Send Verify Email
      </button>
    </div>
  );
};

export default SendVerifyEmail;
