type Props = {
  title: string;
  desc: string;
};

const SendVerifyEmail = ({ title, desc }: Props) => {
  return (
    <div className="flex items-center justify-center gap-4 flex-col py-10">
      <h3 className="text-4xl font-bold">{title}</h3>
      <p>{desc}</p>
      <small>
        <b> Note:</b> After creating your account we will sent you verification
        email as well If your account creation time not more then one hour
        please check your email and verify it
      </small>
      <button className="btn btn-lg btn-success rounded-full">
        Send Verify Email
      </button>
    </div>
  );
};

export default SendVerifyEmail;
