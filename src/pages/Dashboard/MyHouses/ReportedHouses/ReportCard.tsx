type Props = {};

const ReportCard = (props: Props) => {
  return (
    <div className="report-houses-user card shadow p-5">
      <div className="report-houses-user-img">
        <img
          src="https://placeimg.com/200/280/arch"
          alt="user"
          className="w-20 h-20 rounded-full mx-auto"
        />
      </div>
      <div className="report-houses-user-info my-2 text-center">
        <h4 className="text-lg font-bold">Ashik Mahmud</h4>
        <small className="text-gray-500">ashik@gmail.com</small>
      </div>
      <div>
        <h3 className="text-lg font-bold">Why Report?</h3>
        <p className="text-gray-500 text-sm font-poppins">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quae.
        </p>
      </div>
    </div>
  );
};

export default ReportCard;
