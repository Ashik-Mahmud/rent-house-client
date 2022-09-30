type Props = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const HouseInput = ({ title, children, icon }: Props) => {
  return (
    <div className="filter-by-name border  rounded p-3 relative mt-10 flex-1">
      <div className="filter-by-name-title absolute -top-4 bg-white border rounded p-1">
        <h3 className="text-xs font-poppins">{title}</h3>
      </div>
      <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
        <div className="icon">{icon}</div>
        {children}
      </div>
    </div>
  );
};

export default HouseInput;
