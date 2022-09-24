type Props = {
  children?: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <div>
      <button className="btn btn-primary mt-3 btn-outline">
        {children || "Click Me"}
      </button>
    </div>
  );
};

export default Button;
