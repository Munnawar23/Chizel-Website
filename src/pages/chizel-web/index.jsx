import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

/**
 * A beautiful "Coming Soon" placeholder page for the Chizel Web Experience.
 */
const ChizelWebPage = () => {
  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background p-4 text-text"
    >
      {/* ============== MAIN CONTENT ============== */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="font-ui text-xl uppercase text-primary tracking-widest">
          Launching Soon
        </p>
        <h1 className="mt-2 font-heading text-5xl font-bold md:text-7xl">
          Chizel Web Experience
        </h1>
        <p className="mt-4 max-w-2xl font-body text-lg text-secondary-text md:text-xl">
          We're putting the final touches on our interactive web platform. Get
          ready for a seamless learning experience, right in your browser.
        </p>

        {/* ============== BACK TO HOME BUTTON ============== */}
        <Link
          to="/"
          className="button-primary mt-8 inline-flex items-center gap-3"
        >
          <FaHome />
          <span>Go Back Home</span>
        </Link>
      </div>
    </section>
  );
};

export default ChizelWebPage;
