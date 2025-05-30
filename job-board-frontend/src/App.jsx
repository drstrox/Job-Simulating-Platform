import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ResumeUpload from "./components/ResumeUpload";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

const App = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePrediction = (predicted) => {
    setSearchTerm(predicted);
    navigate(`/jobs?q=${encodeURIComponent(predicted)}`);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    navigate(`/jobs?q=${encodeURIComponent(term)}`);
  };

  return (
    <div className={`min-h-screen professional-gradient transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <Hero onSearch={handleSearch} />
      <Stats />
      <ResumeUpload onPredict={handlePrediction} />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default App;
