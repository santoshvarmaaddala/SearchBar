import { useEffect, useState } from "react";
import { Input } from "./ui/input";

const Search = () => {
    const data = [
        {
            id: 1,
            creator: "John Doe",
            title: "AI-Powered Chatbot",
            description: "A chatbot that can answer common customer queries using natural language processing.",
            tags: ["AI", "Chatbot", "Customer Support"]
        },
        {
            id: 2,
            creator: "Jane Smith",
            title: "Smart Home Automation",
            description: "A system to control home appliances via a mobile app using IoT technology.",
            tags: ["IoT", "Smart Home", "Automation"]
        },
        {
            id: 3,
            creator: "Alice Johnson",
            title: "Eco-Friendly Delivery Service",
            description: "A sustainable delivery service using electric bikes to reduce carbon emissions.",
            tags: ["Sustainability", "Delivery", "Eco-Friendly"]
        },
        {
            id: 4,
            creator: "Michael Brown",
            title: "Blockchain-Based Voting System",
            description: "A secure and transparent online voting system using blockchain technology.",
            tags: ["Blockchain", "Security", "Voting"]
        },
        {
            id: 5,
            creator: "Emma Wilson",
            title: "AI-Powered Resume Screener",
            description: "An AI tool that screens resumes and ranks candidates based on job requirements.",
            tags: ["AI", "Recruitment", "HR Tech"]
        }
    ];

    const [query, setQuery] = useState("");
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        const lowerCaseQuery = query.toLowerCase();
        const results = data.filter(item => 
            item.title.toLowerCase().includes(lowerCaseQuery)
        );

        setFilteredData(results);
    }, [query]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            {/* Search Input */}
            <div className="w-full max-w-md">
                <Input 
                    type="text"
                    placeholder="Search your data..."
                    className="w-full p-3 border text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {/* Search Results */}
            <div className="mt-6 w-full max-w-md">
                {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-lg">
                            <h1 className="text-lg font-bold text-gray-500">{index + 1}. {item.title}</h1>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {item.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
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
        </div>
    );
}

export default Search;
