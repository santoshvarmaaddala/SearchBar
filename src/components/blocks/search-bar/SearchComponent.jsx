import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {ArrowUpAZ, ArrowDownAZ, Search} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const SearchComponent = () => {
  const data = [
    {
      id: 1,
      creator: "John Doe",
      title: "AI-Powered Chatbot",
      description:
        "A chatbot that can answer common customer queries using natural language processing.",
      tags: ["AI", "Chatbot", "Customer Support"],
    },
    {
      id: 2,
      creator: "Jane Smith",
      title: "Smart Home Automation",
      description:
        "A system to control home appliances via a mobile app using IoT technology.",
      tags: ["IoT", "Smart Home", "Automation"],
    },
    {
      id: 3,
      creator: "Alice Johnson",
      title: "Eco-Friendly Delivery Service",
      description:
        "A sustainable delivery service using electric bikes to reduce carbon emissions.",
      tags: ["Sustainability", "Delivery", "Eco-Friendly"],
    },
    {
      id: 4,
      creator: "Michael Brown",
      title: "Blockchain-Based Voting System",
      description:
        "A secure and transparent online voting system using blockchain technology.",
      tags: ["Blockchain", "Security", "Voting"],
    },
    {
      id: 5,
      creator: "Emma Wilson",
      title: "AI-Powered Resume Screener",
      description:
        "An AI tool that screens resumes and ranks candidates based on job requirements.",
      tags: ["AI", "Recruitment", "HR Tech"],
    },
  ];

  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const lowerCaseQuery = query.toLowerCase().trim();
    let results = data.filter((item) =>
      item.title.toLowerCase().includes(lowerCaseQuery)
    );

    if (sortOrder === "asc") {
      results.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "desc") {
      results.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredData(results);
  }, [query, sortOrder]);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Search Input and Sort Dropdown */}
      <div className="w-full md:w-[40%] max-w-lg flex flex-col sm:flex-row gap-4">
        {/* Search Bar with Icon */}
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search your data..."
            className="w-full border text-black rounded-lg shadow-md pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* Search Icon */}
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        {/* ShadCN Dropdown */}
        <DropdownMenu className="w-full sm:w-auto">
            <DropdownMenuTrigger asChild>
            <Button className="w-full sm:w-auto">Sort by</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 bg-white text-black">
            <DropdownMenuItem onClick={() => setSortOrder("asc")}>
                Title Ascending
                <ArrowDownAZ/>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortOrder("desc")}>
                Title Descending
                <ArrowUpAZ />
            </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
      {/* Search Results with Scroll */}
      <ScrollArea className="h-72 w-full md:w-[40%] max-w-lg mt-5 relative z-0 overflow-auto">
        <div className="p-4">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 mb-4 rounded-lg shadow-lg"
              >
                <h1 className="text-lg font-bold text-gray-500">
                  {item.title}
                </h1>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center mt-4">No results found.</p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default SearchComponent;
