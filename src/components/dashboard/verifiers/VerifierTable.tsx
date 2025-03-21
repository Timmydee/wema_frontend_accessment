import { useState } from "react";
import { dummyVerifiers } from "../../../utils/verifierData";
import { VerifierTableProps } from "../../../utils/type";
import MoreIcon from "../../../assets/MoreIcon.svg";
import { useMediaQuery } from "react-responsive";

const statusColors = {
  Active: "bg-[#27A7131A] text-[#27A713]",
  "Awaiting approval": "bg-[#FF99001A] text-[#FF9900]",
  Deactivated: "bg-[#FF00001A] text-[#FF0000]",
  All: "",
};

const VerifierTable: React.FC<VerifierTableProps> = ({
  statusFilter,
  searchQuery,
}) => {
  const [verifiers] = useState(dummyVerifiers);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const filteredVerifiers = verifiers.filter((verifier) => {
    const matchesStatus =
      statusFilter === "All" || verifier.status === statusFilter;
    const matchesSearch =
      verifier.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      verifier.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      verifier.phone.includes(searchQuery) ||
      verifier.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const totalPages = Math.ceil(filteredVerifiers.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const displayedVerifiers = filteredVerifiers.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  return (
    <div className="rounded-[4px] shadow-lg bg-white relative flex flex-col overflow-hidden lg:p-0 p-4">
      {isMobile ? (
        <div className="space-y-4">
          {displayedVerifiers.map((verifier) => (
            <div key={verifier.id} className="border p-4 rounded-md shadow-sm">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">
                    {verifier.firstName} {verifier.lastName}
                  </p>
                  <p className="text-sm text-[#1A1619]">{verifier.phone}</p>
                  <p className="text-sm text-[#1A1619]">{verifier.location}</p>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      statusColors[verifier.status]
                    }`}
                  >
                    {verifier.status}
                  </span>
                </div>
                <img src={MoreIcon} alt="Actions" width={24} height={24} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <table className="w-full text-left border-collapse">
          <thead className="bg-white text-[#1A1619] font-bold text-[14px] uppercase sticky top-0">
            <tr className="border-b border-[#EBEFF2]">
              <th className="p-4 w-10">
                <input type="checkbox" className="accent-blue-600" />
              </th>
              <th className="p-4">First Name</th>
              <th className="p-4">Last Name</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Location</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedVerifiers.map((verifier) => (
              <tr
                key={verifier.id}
                className="border-b text-[#1A1619] border-[#EBEFF2] hover:bg-gray-50"
              >
                <td className="p-4 text-center">
                  <input type="checkbox" className="accent-blue-600" />
                </td>
                <td className="p-4">{verifier.firstName}</td>
                <td className="p-4">{verifier.lastName}</td>
                <td className="p-4">{verifier.phone}</td>
                <td className="p-4">{verifier.location}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      statusColors[verifier.status]
                    }`}
                  >
                    {verifier.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <img src={MoreIcon} alt="Actions" width={24} height={24} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination */}
      <div className="bg-white p-4 border-t border-[#EBEFF2] flex justify-between items-center flex-wrap gap-2">
        <div className="text-[12px] text-[#808080]">
          Rows per page
          <select
            className="border w-[89px] h-[32px] border-[#C4C4C4] text-[#1A1619] rounded px-2 text-sm cursor-pointer ml-2"
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            {[5, 10, 15, 20].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="text-[11px] text-[#4A4A4A] hover:text-[#039BF0]"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`text-[11px] text-[#4A4A4A] cursor-pointer ${
                currentPage === index + 1 ? "text-[#039BF0]" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="text-[11px] text-[#4A4A4A] hover:text-[#039BF0]"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifierTable;
