import { TrendingUp, Users, Building, Award, Globe, Zap } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "2M+",
      label: "Job Seekers",
      description: "Active professionals finding opportunities",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Building,
      number: "50K+",
      label: "Companies",
      description: "Trusted employers posting jobs daily",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      description: "Users find relevant jobs within 30 days",
      color: "from-green-500 to-green-700"
    },
    {
      icon: Award,
      number: "4.9/5",
      label: "User Rating",
      description: "Highest rated job platform",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: Globe,
      number: "150+",
      label: "Countries",
      description: "Global reach and opportunities",
      color: "from-gray-500 to-slate-600"
    },
    {
      icon: Zap,
      number: "24/7",
      label: "AI Matching",
      description: "Continuous job recommendations",
      color: "from-blue-500 to-blue-700"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container-responsive max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-4">
            Trusted by Professionals{" "}
            <span className="text-gradient">Worldwide</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join millions of professionals who trust our platform 
            to accelerate their career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="premium-card rounded-2xl p-6 text-center hover-lift group"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-bold font-display text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
