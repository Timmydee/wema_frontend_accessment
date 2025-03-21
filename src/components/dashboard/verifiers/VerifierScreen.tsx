import { useState } from "react";
import { Search, Plus } from "lucide-react";
import VerifierTable from "./VerifierTable";
import { VerifierStatus } from "../../../utils/type";

const businessCategories = [
  { value: "All", label: "All" },
  { value: "Active", label: "Active Verifiers" },
  { value: "Awaiting approval", label: "Pending Verifiers" },
  { value: "Deactivated", label: "Deactivated Verifiers" },
];

const VerifierScreen = () => {
  const [statusFilter, setStatusFilter] = useState<VerifierStatus>("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-4 max-w-7xl mx-auto bg-[#F5F6F8]">
      {/* Filter and Search Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="w-full md:w-[212px]">
          <select
            className="select cursor-pointer focus:ring-primary h-[48px] w-full p-2 border rounded-[4px] text-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as VerifierStatus)}
          >
            {businessCategories.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <div className="relative w-full md:w-[240px] cursor-pointer">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Name/Phone no / Location"
              className="w-full pl-10 pr-3 py-2 border rounded-[4px] text-[12px] h-[48px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            className="flex items-center justify-center gap-2 w-full md:w-[168px] h-[48px] bg-[#039BF0] text-white text-[14px] font-medium rounded-md hover:bg-blue-700 transition"
          >
            <Plus size={18} />
            Add New Verifier
          </button>
        </div>
      </div>

      {/* Verifier Table */}
      <div className="mt-8">
        <VerifierTable 
          statusFilter={statusFilter} 
          searchQuery={searchQuery} 
          filter={statusFilter} 
          setSelectedVerifier={() => {}} 
          verifiers={[]} 
        />
      </div>
    </div>
  );
};

export default VerifierScreen;
