import axios from "axios";
import * as FileSaver from "file-saver";
import { useEffect, useState } from "react";
import { BiExport, BiPlus } from "react-icons/bi";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import * as XLSX from "xlsx";
import GlobalLoader from "../../../components/GlobalLoader";
import { base_backend_url } from "../../../configs/config";
import useAuth from "../../../hooks/useAuth";
import useTitle from "../../../hooks/useTitle";
import { authUserInterface } from "../../../interfaces/UserInterface";
import HouseRow from "./HouseRow";
type Props = {};

const MyHouses = (props: Props) => {
  useTitle("My Houses");
  const { updatedUser, user } = useAuth<authUserInterface | any>({});
  const [search, setSearch] = useState<string>("");
  const [housesData, setHousesData] = useState<any>([]);
  /* Pagination State */
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const { data, isLoading, refetch } = useQuery(
    ["houses", user, limit, currentPage, search],
    () => getMyHouses()
  );
  const getMyHouses = async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/houses/get-house-by-user/${updatedUser?._id}?page=${currentPage}&limit=${limit}&q=${search}`,
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );
    return data;
  };

  /* Handle Pagination */
  const totalPage = Math.ceil(data?.count / limit);

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
      refetch();
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      refetch();
    }
  };

  /* Code For Export Houses */

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  /* Handle Exports Payments */
  const ExportHouses = async (payments: any) => {
    const filename = await swal({
      title: "Are you sure?",
      text: "You want to export this Houses?",
      content: {
        element: "input",
        attributes: {
          placeholder: "Put the file name here",
          type: "text",
        },
      },
    });
    if (!filename) {
      swal("Cancelled", "Your did't put any name :)", "error");
      return;
    }
    if (filename?.length < 6) {
      swal("Error", "File name must be at least 5 characters", "error");
      return;
    }

    const ws = XLSX.utils.json_to_sheet(payments);
    XLSX.utils.sheet_add_aoa(
      ws,
      [
        [
          "Index",
          "House Id",
          "House Name",
          "Bedrooms",
          "Bathrooms",
          "Price",
          "House Type",
          "House use For",
          "Owner ID",
          "Category",
          "Address",
          "District",
          "City",
          "Likes",
          "Date",
        ],
      ],
      {
        origin: "A1",
      }
    );
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, filename + fileExtension);
    swal("Success", "Your file has been exported", "success");
  };

  useEffect(() => {
    const exportData = data?.data?.map((house: any, ind: any) => {
      return {
        Index: ind + 1,
        "House Id": house?._id,
        "House Name": house?.name,
        Bedrooms: house?.bedrooms,
        Bathrooms: house?.bathrooms,
        Price: house?.price,
        "House Type": house?.houseType,
        "House Use For": house?.houseUseFor,
        "Owner ID": house?.owner,
        Category: house?.category,
        Address: house?.address,
        District: house?.district,
        City: house?.city,
        Likes: house?.likes,
        Date: house?.createdAt,
      };
    });

    setHousesData(exportData);
  }, [data]);

  return (
    <div className="p-10 my-5 bg-white rounded shadow">
      <div className="title flex-col sm:flex-row flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">My Houses</h1>
            <small className="badge badge-success">House Holder</small>
          </div>
        </div>
        <input
          type="search"
          name="search-field"
          className="input input-bordered"
          id="search-field"
          placeholder="Search"
          onInput={(e) => setSearch(e.currentTarget.value)}
        />
      </div>
      <div className="export-btn flex items-center gap-5 justify-end">
        <button
          onClick={() => ExportHouses(housesData)}
          className="btn btn-xs btn-info rounded-none badge-lg flex items-center gap-2 font-poppins"
        >
          Export Collection <BiExport className="text-md" />
        </button>
        <Link
          to="/dashboard/houses/add"
          className="btn btn-xs btn-success rounded-none badge-lg flex items-center gap-2 font-poppins"
        >
          Post House <BiPlus className="text-md" />
        </Link>
      </div>
      <div className="my-5 overflow-x-auto">
        {isLoading ? (
          <GlobalLoader />
        ) : data?.data?.length > 0 ? (
          <table className="w-full table">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 text-left">House ID</th>
                <th className="py-3 text-left">Title</th>
                <th className="py-3 text-left">Address</th>
                <th className="py-3 text-left">Bed</th>
                <th className="py-3 text-left">Bath..</th>
                <th className="py-3 text-left">Price</th>
                <th className="py-3 text-left">Type</th>
                <th className="py-3 text-left">Status</th>
                <th className="py-3 text-left w-5">Likes</th>
                <th className="py-3 text-left w-5">Revi..</th>
                <th className="py-3 text-left w-5">Ques..</th>
                <th className="py-3 text-left w-5">Repo..</th>
                <th className="py-3 text-left w-5">View</th>
                <th className="py-3 text-left w-5">Upd..</th>
                <th className="py-3 text-left w-5">Del..</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((house: any, index: number) => (
                <HouseRow
                  key={index}
                  house={house}
                  index={index}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold">No Houses</h3>
            <Link
              to="/dashboard/houses/add"
              className="btn btn-success mt-4 btn-sm"
            >
              Add Your Own
            </Link>
          </div>
        )}
      </div>
      {limit < data?.count && (
        <div className="pagination flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            Show{" "}
            <select
              name=""
              id=""
              className="select select-sm select-bordered rounded-none tooltip tooltip-info"
              title="Limit for showing"
              onChange={(event) => setLimit(Number(event.target.value))}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            entries
          </div>
          <div className="flex items-center gap-6">
            <div>
              <button
                className="btn btn-sm btn-ghost"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              <button
                className="btn btn-sm btn-ghost "
                disabled={currentPage === totalPage}
                onClick={handleNextPage}
              >
                Next
              </button>
            </div>
            <span>
              Page <b>{currentPage} </b> of <b>{totalPage}</b>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyHouses;
