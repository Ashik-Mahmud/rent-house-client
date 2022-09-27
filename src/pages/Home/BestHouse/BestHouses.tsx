import SectionTitle from "../../../components/SectionTItle";

type Props = {};

const BestHouses = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto">
        <SectionTitle
          title="Top 4 Best Houses"
          desc=" We have a huge collection of houses and apartments for sale and rent.
        You can choose your dream house from our huge collection of houses and
        apartments."
        />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="card">
            <div className="card-body">
              <div className="card-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWw_fKQ6H8mfIq0v-fvyUiJL0osaQODoC2og&usqp=CAU"
                  alt=""
                  className="h-60 w-full object-cover"
                />
              </div>
              <div className="card-title">
                <h1 className="text-2xl font-bold">House 1</h1>
              </div>
              <div className="card-subtitle">
                <p className="text-gray-500">Location: Dhaka</p>
              </div>
              <div className="card-content">
                <p className="text-gray-500">Price: 1,000,000</p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-image">
                <img
                  src="https://i.pinimg.com/originals/66/d9/f5/66d9f5afdc5337d3f9eac362b970c426.jpg"
                  alt=""
                  className="h-60 w-full object-cover"
                />
              </div>
              <div className="card-title">
                <h1 className="text-2xl font-bold">House 2</h1>
              </div>
              <div className="card-subtitle">
                <p className="text-gray-500">Location: Dhaka</p>
              </div>
              <div className="card-content">
                <p className="text-gray-500">Price: 1,000,000</p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-image">
                <img
                  src="https://www.bhg.com/thmb/SLX8yV-ipXwrrPqUgkeAalYr8zU=/1707x1280/smart/filters:no_upscale():focal(899x639:901x641)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
                  className="h-60 w-full object-cover"
                  alt=""
                />
              </div>
              <div className="card-title">
                <h1 className="text-2xl font-bold">House 3</h1>
              </div>
              <div className="card-subtitle">
                <p className="text-gray-500">Location: Dhaka</p>
              </div>

              <div className="card-content">
                <p className="text-gray-500">Price: 1,000,000</p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJWlJdbbI_9cbPTPWgome8qc4m5nUmJohGw&usqp=CAU"
                  alt=""
                  className="h-60 w-full object-cover"
                />
              </div>
              <div className="card-title">
                <h1 className="text-2xl font-bold">House 4</h1>
              </div>
              <div className="card-subtitle">
                <p className="text-gray-500">Location: Dhaka</p>
              </div>

              <div className="card-content">
                <p className="text-gray-500">Price: 1,000,000</p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestHouses;
