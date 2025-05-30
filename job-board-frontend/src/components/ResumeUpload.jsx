import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, FileText, Sparkles, CheckCircle, Zap, Target, Brain, Shield } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const ResumeUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const navigate = useNavigate();

  const analysisSteps = [
    "Parsing resume content...",
    "Extracting skills and experience...",
    "Analyzing career patterns...",
    "Matching with job opportunities...",
    "Generating recommendations..."
  ];

  const handlePrediction = (file) => {
    setIsAnalyzing(true);
    setAnalysisStep(0);
    toast.loading("AI is analyzing your resume...", { id: "resume" });

    const stepInterval = setInterval(() => {
      setAnalysisStep((prev) => {
        if (prev < analysisSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          return prev;
        }
      });
    }, 500);

    const formData = new FormData();
    formData.append("resume", file);

    fetch("https://abc-myuw.onrender.com/predict", {
      method: "POST",
      body: formData
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setIsAnalyzing(false);
          toast.success(`Perfect! Found ${data.predicted_role} roles for you`, { id: "resume" });

          // Store in localStorage
          localStorage.setItem("matched_jobs", JSON.stringify(data.matched_jobs || []));
          localStorage.setItem("predicted_role", data.predicted_role || "");

          // Navigate to JobList
          navigate(`/jobs?q=${encodeURIComponent(data.predicted_role)}`);
        }, 500);
      })
      .catch((err) => {
        console.error("Error:", err);
        setIsAnalyzing(false);
        toast.error("Something went wrong while analyzing the resume.");
      });
  };

  const handleFile = (file) => {
    if (
      file &&
      ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)
    ) {
      handlePrediction(file);
    } else {
      toast.error("Please upload a valid PDF or Word document.");
    }
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    if (["dragenter", "dragover"].includes(e.type)) setDragActive(true);
    else setDragActive(false);
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your resume with 99% accuracy"
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "Get matched with jobs that perfectly align with your skills and experience"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Receive personalized job recommendations in under 30 seconds"
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Your data is encrypted and never shared without your explicit consent"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <Toaster position="top-center" />
      <div className="w-4/5 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-blue-600 animate-pulse" />
            <span className="text-xs font-semibold text-blue-700">AI Resume Analysis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
            Let AI Find Your Perfect <span className="text-gradient">Career Match</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Upload your resume and our advanced AI will analyze your skills and recommend the most suitable job opportunities.
          </p>
        </div>

        {/* Upload Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-500 hover-lift ${
              dragActive
                ? "border-blue-400 bg-blue-50 scale-102"
                : "border-gray-300 bg-gradient-to-br from-gray-50 to-blue-50"
            }`}
          >
            <div className="flex flex-col items-center space-y-6">
              {isAnalyzing ? (
                <div className="relative">
                  <div className="animate-spin">
                    <Sparkles className="w-16 h-16 text-blue-500" />
                  </div>
                  <div className="absolute inset-0 animate-ping">
                    <Sparkles className="w-16 h-16 text-blue-300 opacity-30" />
                  </div>
                </div>
              ) : (
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center shadow-xl">
                  <Upload className="w-10 h-10 text-white" />
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold font-display text-gray-900 mb-3">
                  {isAnalyzing ? "Analyzing Your Resume..." : "Upload Your Resume"}
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  {isAnalyzing 
                    ? analysisSteps[analysisStep]
                    : "Drop your resume here or click to browse"
                  }
                </p>
                {!isAnalyzing && (
                  <label htmlFor="file-upload" className="inline-flex items-center gap-2 px-6 py-3 btn-primary rounded-xl cursor-pointer font-semibold magnetic">
                    <FileText className="w-4 h-4" />
                    Choose File
                  </label>
                )}
                <p className="text-xs text-gray-500 mt-3">PDF, DOC, or DOCX (max 10MB)</p>
              </div>

              {isAnalyzing && (
                <div className="w-full max-w-sm">
                  <div className="bg-gray-200 rounded-full h-2 mb-3">
                    <div 
                      className="gradient-primary h-2 rounded-full transition-all duration-500" 
                      style={{width: `${((analysisStep + 1) / analysisSteps.length) * 100}%`}}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Processing...</span>
                    <span>{Math.round(((analysisStep + 1) / analysisSteps.length) * 100)}%</span>
                  </div>
                </div>
              )}
            </div>

            <input
              id="file-upload"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleUpload}
              className="hidden"
              disabled={isAnalyzing}
            />
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold font-display text-gray-900">How Our AI Works</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="premium-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h4 className="text-lg font-semibold text-gray-900">Privacy Guaranteed</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your resume is processed securely using enterprise-grade encryption.
                We never share your personal information with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeUpload;
