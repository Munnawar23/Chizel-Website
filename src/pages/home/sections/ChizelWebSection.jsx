import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Button from "@/components/ui/Button"; 

const ChizelWebSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/chizel-web');
  };

  return (
    <section 
      id="chizel-web" 
      className="relative bg-background py-16 md:py-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-10">

        {/* ============== HEADER ============== */}
        <div className="space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
            Experience Chizel on <span className="text-primary">Web</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* ============== DESCRIPTION ============== */}
        <p className="font-body text-lg md:text-xl text-secondary-text leading-relaxed max-w-2xl mx-auto">
          Dive deeper into our web development projects, case studies, and the cutting-edge technologies that power our digital experiences.
        </p>

        {/* ============== BUTTON ============== */}
        <div className="flex justify-center">
          <Button 
            onClick={handleNavigate}
            title="Discover Our Web World"
            rightIcon={<FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />}
          />
        </div>

        {/* ============== FEATURE CARDS ============== */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
          <div className="p-4 bg-card rounded-lg border-hsla">
            <h3 className="font-body text-text font-bold mb-2">Modern Tech Stack</h3>
            <p className="text-secondary-text text-sm">
              Built with the latest technologies and best practices
            </p>
          </div>

          <div className="p-4 bg-card rounded-lg border-hsla">
            <h3 className="font-body text-text font-bold mb-2">Case Studies</h3>
            <p className="text-secondary-text text-sm">
              Real-world projects and their success stories
            </p>
          </div>

          <div className="p-4 bg-card rounded-lg border-hsla">
            <h3 className="font-body text-text font-bold mb-2">Innovation Hub</h3>
            <p className="text-secondary-text text-sm">
              Explore our experimental and cutting-edge solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChizelWebSection;
