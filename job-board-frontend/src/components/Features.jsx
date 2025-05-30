import { Brain, Target, Zap, Shield, Users, Globe, Bell, TrendingUp, Award, Rocket } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Matching",
      description: "Our neural networks analyze millions of data points to find your perfect job match with 95% accuracy.",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Get highly targeted recommendations based on your skills, experience, and career aspirations.",
      gradient: "from-gray-500 to-gray-700"
    },
    {
      icon: Zap,
      title: "Real-Time Alerts",
      description: "Instant notifications when new opportunities matching your criteria become available.",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Enterprise-grade security with full control over your data visibility and sharing preferences.",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: Users,
      title: "Network Building",
      description: "Connect with industry professionals, mentors, and potential colleagues in your field.",
      gradient: "from-gray-600 to-slate-600"
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Access remote positions and international opportunities from companies worldwide.",
      gradient: "from-blue-500 to-cyan-600"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "3x Faster Job Search",
      description: "Find relevant opportunities 3 times faster than traditional job boards"
    },
    {
      icon: Award,
      title: "95% Match Accuracy",
      description: "Industry-leading AI ensures you only see jobs that truly fit your profile"
    },
    {
      icon: Rocket,
      title: "Career Acceleration",
      description: "Advanced analytics help you identify skills gaps and growth opportunities"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-4/5 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
            Why Choose{" "}
            <span className="text-gradient">HireBuddy</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the future of job searching with our intelligent platform designed 
            to connect the right talent with the right opportunities at the perfect time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card rounded-2xl p-6 hover-lift group animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="premium-card rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold font-display text-gray-900 mb-3">
              The HireBuddy{" "}
              <span className="text-gradient">Advantage</span>
            </h3>
            <p className="text-sm text-gray-600">
              See the measurable impact our platform has on your job search success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
