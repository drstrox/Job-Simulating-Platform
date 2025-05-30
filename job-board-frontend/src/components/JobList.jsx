import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Search, MapPin, Briefcase, Clock } from "lucide-react";
import JobCard from "./JobCard";
import Header from "./Header";

const JobList = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterLocation, setFilterLocation] = useState("");

  useEffect(() => {
    // Load matched jobs from localStorage on mount
    const matchedJobs = JSON.parse(localStorage.getItem("matched_jobs") || "[]");
    setJobs(matchedJobs);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`https://abc-myuw.onrender.com/search?keyword=${searchTerm}`);
      const data = await res.json();
      let fetchedJobs = Array.isArray(data) ? data : [];

      // Apply location filtering if a filter is set
      if (filterLocation.trim()) {
        fetchedJobs = fetchedJobs.filter((job) =>
          job.location?.toLowerCase().includes(filterLocation.toLowerCase())
        );
      }

      setJobs(fetchedJobs);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <div className="container-responsive max-w-7xl pt-24 pb-8 px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
            Back to Search
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Jobs for <span className="text-gradient">"{initialQuery || 'you'}"</span>
          </h1>
          <div className="flex gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              <span>{loading ? "Loading..." : `${jobs.length} jobs found`}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Updated recently</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-blue-500 focus:border-blue-600"
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Location"
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="w-full sm:w-64 pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-blue-500 focus:border-blue-600"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 btn-primary rounded-xl flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700"
          >
            <Search className="w-5 h-5" />
            Search
          </button>
        </form>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin h-10 w-10 border-b-2 border-blue-500 rounded-full" />
          </div>
        ) : jobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p>No jobs found. Try a different search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;
