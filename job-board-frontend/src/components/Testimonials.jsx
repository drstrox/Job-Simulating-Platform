import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chawla",
      role: "Senior Product Manager",
      company: "Google",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "HireBuddy's AI matching is incredible. I found my dream job at Google within 2 weeks without much difficulty. The platform understood my skills better than I did!",
      rating: 5
    },
    {
      name: "Madhav Rathod",
      role: "Full Stack Developer",
      company: "Microsoft",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The resume analysis feature is a game-changer. It identified skills I didn't even know were valuable and matched me with perfect opportunities.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "UX Designer",
      company: "Airbnb",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Best job platform I've ever used. The AI recommendations were spot-on, and I landed my role at Airbnb through HireBuddy. Recommended for all job seekers.",
      rating: 5
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-responsive max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-4 md:mb-6 leading-tight">
            Loved by{" "}
            <span className="text-gradient">Professionals</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See what our users say about their experience finding dream jobs through our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="premium-card rounded-2xl md:rounded-3xl p-6 md:p-8 hover-lift animate-fade-in-up group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4 md:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mb-3 md:mb-4" />
              
              {/* Testimonial Content */}
              <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed italic text-sm sm:text-base md:text-base">
                "{testimonial.content}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3 md:gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 truncate">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Call to Action */}
        <div className="text-center mt-8 md:mt-12 lg:mt-16">
          <div className="premium-card rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              Ready to Join Them?
            </h3>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              Start your journey to finding your dream job today.
            </p>
            <button className="btn-primary px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover-lift w-full sm:w-auto text-sm md:text-base">
              Get Started for Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
