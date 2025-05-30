import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="premium-card rounded-3xl p-12 hover-lift">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-8">
            <Sparkles className="h-5 w-5 text-purple-600 animate-pulse" />
            <span className="text-sm font-semibold text-purple-700">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold font-display text-gray-900 mb-6">
            Your Dream Job is{" "}
            <span className="text-gradient">One Click Away</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who have transformed their careers with our AI-powered job matching platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 btn-primary rounded-2xl font-semibold text-lg hover-lift flex items-center gap-3 group">
              Get Started for Free
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 btn-secondary rounded-2xl font-semibold text-lg hover-lift">
              Watch Demo
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            No credit card required • Free forever • 2-minute setup
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
