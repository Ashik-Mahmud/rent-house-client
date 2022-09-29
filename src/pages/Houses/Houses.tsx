import FilterSidebar from "./FilterSidebar";

type Props = {};

const Houses = (props: Props) => {
  return (
    <section id="houses">
      <div className="container mx-auto pb-20">
        <div className="house-title text-center py-5 font-bold">
          <h2 className="text-3xl">Welcome to HOUSES</h2>
        </div>
        <div className="house-content flex gap-10">
          {/* Filters Sidebar */}
          <FilterSidebar />
          {/* Filters Sidebar end */}
          {/* Content */}
          <div className="house-content-right border p-10 flex-grow">
            <div className="house-content-right-title">
              <h2 className="text-2xl font-bold">Houses</h2>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Houses;
