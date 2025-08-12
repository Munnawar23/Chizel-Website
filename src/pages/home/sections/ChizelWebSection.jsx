import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Button from "@/components/ui/Button"; // Using the precise path you provided

const ChizelWebSection = () => {
  const navigate = useNavigate(); // The standard hook for programmatic navigation

  const handleNavigate = () => {
    navigate('/chizel-web'); // The destination URL
  };

  return (
    // ============== SECTION CONTAINER (DARK THEME) ==============
    <section 
      id="chizel-web" 
      className="h-screen w-full flex-center flex-col bg-background text-text relative overflow-hidden p-4"
    >
      {/* ============== DECORATIVE BACKGROUND GLOWS ============== */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[10%] w-24 h-24 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[15%] right-[15%] w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="text-center z-10 flex flex-col items-center">
        
        {/* ============== H2 HEADLINE ============== */}
        <h2 className="font-heading text-5xl md:text-7xl uppercase font-bold text-text mb-2">
          Experience chizel on web
        </h2>
        
        {/* ============== PARAGRAPH TEXT ============== */}
        <p className="max-w-2xl mx-auto mt-4 text-lg md:text-xl text-secondary-text font-body">
          Dive deeper into our web development projects, case studies, and the technologies that power our digital experiences.
        </p>

        {/* ============== CALL-TO-ACTION BUTTON ============== */}
        <div className="mt-8 relative group">
          <Button 
            title="Discover Our Web World" 
            onClick={handleNavigate}
            // Pass the primary style class to our reusable button
            containerClass="button-primary inline-flex items-center gap-3"
          >
            <span>Discover Our Web World</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChizelWebSection;