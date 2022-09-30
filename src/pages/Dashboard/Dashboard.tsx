type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="grid place-items-center ">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-10">
          {/*  <!-- Page content here --> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>

          <h3 className="text-3xl font-bold">What does mean by That?</h3>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/*  <!-- Sidebar content here --> */}

            <li>
              <a href="/">Sidebar Item 1</a>
            </li>
            <li>
              <a href="/">Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
