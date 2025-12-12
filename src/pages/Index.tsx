import { Gamepad2, Glasses, Layers, Code2, Globe2, Lightbulb } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const categories = [
  {
    icon: Glasses,
    title: "VR Games",
    description: "Fully immersive virtual reality experiences that transport you to extraordinary worlds.",
  },
  {
    icon: Gamepad2,
    title: "AR Games",
    description: "Augmented reality gaming that blends digital magic with your real environment.",
  },
  {
    icon: Layers,
    title: "MR Experiences",
    description: "Mixed reality adventures where physical and digital realms merge seamlessly.",
  },
  {
    icon: Code2,
    title: "Game Development Studio",
    description: "End-to-end game creation with cutting-edge tools and passionate developers.",
  },
  {
    icon: Globe2,
    title: "Metaverse Worlds",
    description: "Build, explore, and connect in persistent digital universes without limits.",
  },
  {
    icon: Lightbulb,
    title: "Youth Innovation Labs",
    description: "Empowering the next generation of creators through hands-on XR education.",
  },
];

const whyChooseUs = [
  {
    title: "Next-Gen Technology",
    description: "Leveraging the latest in XR hardware and software to deliver unparalleled experiences.",
  },
  {
    title: "Youth Empowerment",
    description: "Investing in young minds through education, internships, and innovation programs.",
  },
  {
    title: "Global Gaming Standards",
    description: "Meeting and exceeding international benchmarks for quality and performance.",
  },
  {
    title: "Immersive Experiences",
    description: "Creating worlds so real, you'll forget where reality ends and imagination begins.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 z-10" />

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-foreground">NW GLOBAL</span>
              <br />
              <span className="text-gradient-gold">GAMING & XR TECHNOLOGIES</span>
            </h1>
            
            <div 
              className="gold-line max-w-md mx-auto mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            />
            
            <p 
              className="font-body text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              Where Imagination Becomes Reality.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <a 
                href="#about" 
                className="px-8 py-4 bg-gradient-gold text-primary-foreground font-display font-semibold rounded-lg shadow-gold hover:shadow-gold-sm transition-all duration-300 hover:scale-105"
              >
                Explore Our Universe
              </a>
              <a 
                href="#categories" 
                className="px-8 py-4 border border-gold/30 text-foreground font-display font-semibold rounded-lg hover:bg-gold/10 hover:border-gold/50 transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-float">
          <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gold rounded-full animate-pulse-gold" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-dark-2 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-gold">The XR Ecosystem</span>
            </h2>
            
            <div className="gold-line max-w-xs mx-auto mb-10" />
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              We are pioneers in the Extended Reality (XR) revolution, seamlessly blending 
              <span className="text-foreground font-medium"> Virtual Reality (VR)</span>, 
              <span className="text-foreground font-medium"> Augmented Reality (AR)</span>, and 
              <span className="text-foreground font-medium"> Mixed Reality (MR)</span> to create 
              unprecedented gaming experiences.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our ecosystem extends into the 
              <span className="text-gold font-medium"> Metaverse</span>—building interconnected digital worlds 
              powered by <span className="text-gold font-medium">AI-based gaming</span> intelligence. 
              From immersive adventures to educational innovation, we're redefining what's possible 
              in interactive entertainment.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-dark-2" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="text-gradient-gold">Key Categories</span>
            </h2>
            <div className="gold-line max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className="group bg-gradient-card border border-border/50 rounded-xl p-8 card-hover border-gold-gradient opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <category.icon className="w-7 h-7 text-gold" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-2 via-background to-dark-2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Why </span>
              <span className="text-gradient-gold">Choose Us</span>
            </h2>
            <div className="gold-line max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-6 items-start p-6 rounded-xl bg-dark-2/50 border border-border/30 hover:border-gold/30 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold-sm">
                  <span className="font-display font-bold text-primary-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-2" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        {/* Gold Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Ready to Enter the </span>
              <span className="text-gradient-gold">Future?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10">
              Join us in shaping the next generation of immersive experiences. 
              Whether you're a gamer, developer, or visionary—there's a place for you in our universe.
            </p>
            
            <a 
              href="#contact" 
              className="inline-block px-10 py-4 bg-gradient-gold text-primary-foreground font-display font-semibold rounded-lg shadow-gold hover:shadow-gold-sm transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16">
        <div className="absolute inset-0 bg-gradient-footer" />
        
        {/* Top Gold Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        
        {/* Subtle Gold Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-gold/5 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold text-gradient-gold mb-4">
              NW GLOBAL GAMING & XR
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Pioneering the future of immersive entertainment and extended reality experiences.
            </p>
            
            <div className="gold-line max-w-xs mx-auto mb-8" />
            
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NW Global Gaming & XR Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
