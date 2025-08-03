import AnimatedTitle from "../components/common/AnimatedTitle";
import Button from "../components/common/Button";

/**
 * A small, reusable component for rendering the clipped images.
 * Keeping this inside the section is fine as it's not used elsewhere.
 */
const ImageClipBox = ({ src, clipClass, alt }) => (
  <div className={clipClass}>
    <img src={src} alt={alt} className="size-full object-cover" />
  </div>
);

const ContactSection = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      {/* Main container with Chizel's card background color */}
      <div className="relative rounded-lg bg-card py-24 text-text sm:overflow-hidden">
        
        {/* Left-side decorative images */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/images/contact-kid-1.webp"
            alt="Child happily using a tablet"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/images/contact-kid-2.webp"
            alt="Colorful abstract shapes from the Chizel app"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        {/* Right-side decorative images */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/images/chizel-app-partial.webp"
            alt="A close-up of the Chizel app interface"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/images/chizel-app-full.webp"
            alt="A full view of a Chizel game"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        {/* Centered text content */}
        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-body text-[10px] uppercase text-secondary-text">
            Join The Chizel Community
          </p>

          <AnimatedTitle
            containerClass="special-font !md:text-[6.2rem] w-full !text-5xl !font-black !leading-[.9]"
            title="Let's shape the <br /> future <b>o</b>f learning <br /> t<b>o</b>gether."
          />
          <Button title="Get In Touch" containerClass="mt-10" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;