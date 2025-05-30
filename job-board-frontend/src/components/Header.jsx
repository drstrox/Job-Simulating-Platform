import { useState, useEffect } from "react";
import { Menu, X, Briefcase, Search, Bell } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-card border-b border-gray-200' 
        : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="container-responsive max-w-7xl">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-professional">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold font-display text-gray-900">
              Hire<span className="text-gradient">Buddy</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Find Jobs</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Companies</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Salary Guide</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Resources</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <button className="btn-secondary px-6 py-2 rounded-lg">
              Sign In
            </button>
            <button className="btn-primary px-6 py-2 rounded-lg">
              Post Job
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Find Jobs</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Companies</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Salary Guide</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Resources</a>
              <div className="flex flex-col space-y-3 pt-4">
                <button className="btn-secondary px-6 py-3 rounded-lg w-fit">Sign In</button>
                <button className="btn-primary px-6 py-3 rounded-lg w-fit">Post Job</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
