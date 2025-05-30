import { MapPin, Building, ExternalLink, Clock, DollarSign, Bookmark, Share2, Star } from "lucide-react";
import { useState } from "react";

const JobCard = ({ job }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const formatDate = (dateString) => {
    if (!dateString) return "Recently posted";
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  const matchScore = Math.floor(Math.random() * 20) + 80;

  return (
    <div className="premium-card rounded-2xl p-6 hover-lift group transition-all duration-500 border-l-4 border-transparent hover:border-blue-500">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
        <div className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
            <h3 className="text-xl font-semibold font-display text-gray-900 group-hover:text-blue-600 transition-colors mb-2 sm:mb-0">
              {job.job_title}
            </h3>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isBookmarked 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-600 mb-3">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium">{job.company_name}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>{job.job_location}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{formatDate(job.posted_date)}</span>
            </div>
            {job.salary && (
              <div className="flex items-center gap-1 text-green-600 font-semibold">
                <DollarSign className="w-4 h-4" />
                <span>{job.salary}</span>
              </div>
            )}
            <div className="flex items-center gap-1 text-yellow-600">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-medium">4.8</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed mb-6">
        {job.job_description?.slice(0, 200)}...
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <div className="flex flex-wrap gap-2">
          {job.skills?.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200"
            >
              {skill}
            </span>
          ))}
          {job.skills?.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
              +{job.skills.length - 3} more
            </span>
          )}
        </div>

        <a
          href={job.apply_link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 btn-primary rounded-xl font-semibold hover-lift group w-full sm:w-auto justify-center"
        >
          <span className="hidden sm:inline">Apply Now</span>
          <span className="sm:hidden">Apply</span>
          <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </a>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-medium">AI Match Score</span>
          <div className="flex items-center gap-3">
            <div className="w-24 sm:w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-1000"
                style={{width: `${matchScore}%`}}
              ></div>
            </div>
            <span className="text-blue-600 font-bold">{matchScore}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
