import { useState, useEffect } from "react";
import { Search, MapPin, TrendingUp, Users, Briefcase, ArrowRight, Building } from "lucide-react";

const Hero = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [currentRole, setCurrentRole] = useState(0);

  const popularRoles = ["Software Engineer", "Product Manager", "Data Analyst", "UX Designer", "DevOps Engineer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % popularRoles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  const popularSearches = ["React Developer", "Senior Engineer", "Product Designer", "Full Stack", "Data Scientist"];

  return (
    <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-100/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="w-4/5 max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6 hover-lift">
            <Building className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-semibold text-gray-700">
              Professional Job Matching Platform
            </span>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-gray-900 leading-tight">
            Find Your Next{" "}
            <span className="text-gradient block">
              {popularRoles[currentRole]}
            </span>
            <span className="text-2xl md:text-3xl text-gray-600 font-normal">Position</span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-up leading-relaxed" style={{animationDelay: '0.2s'}}>
          Connect with top employers and discover career opportunities that match your 
          <span className="font-semibold text-gray-800"> professional goals</span>. 
          Advance your career with confidence.
        </p>

        <form onSubmit={handleSubmit} className="premium-card rounded-2xl p-6 mb-12 w-full mx-auto animate-fade-in-up hover-lift shadow-professional-lg" style={{animationDelay: '0.4s'}}>
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
              />
            </div>

            <div className="flex-1 relative group">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="text"
                placeholder="Location (Remote, City, etc.)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 btn-primary rounded-xl font-semibold hover-lift flex items-center gap-2 group"
            >
              <Search className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Search Jobs
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>

        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <span className="text-gray-600 font-medium">Popular searches:</span>
          {popularSearches.map((search, index) => (
            <button
              key={index}
              onClick={() => onSearch(search)}
              className="px-4 py-2 glass-card rounded-full text-gray-700 hover:text-blue-600 hover:border-blue-300 transition-all text-sm font-medium magnetic"
            >
              {search}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="feature-card rounded-xl p-6 hover-lift">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 shadow-professional">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold font-display text-gray-900 mb-1">50,000+</div>
            <div className="text-sm text-gray-600 font-medium">Active Positions</div>
          </div>
          <div className="feature-card rounded-xl p-6 hover-lift">
            <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-3 shadow-professional">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold font-display text-gray-900 mb-1">2,000+</div>
            <div className="text-sm text-gray-600 font-medium">Partner Companies</div>
          </div>
          <div className="feature-card rounded-xl p-6 hover-lift">
            <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center mx-auto mb-3 shadow-professional">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold font-display text-gray-900 mb-1">95%</div>
            <div className="text-sm text-gray-600 font-medium">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
