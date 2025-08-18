import React from "react";

const ChallengeToChange = () => (
  <section className="w-full py-16 flex flex-col items-center justify-center">
    <div
      className="text-center"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
    >
      <h2
        className="font-black text-4xl md:text-6xl mb-4 bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent"
        style={{ fontFamily: 'Poppins, Orbitron, sans-serif', letterSpacing: '0.04em' }}
      >
        From Challenge to Change!
      </h2>
      <h3
        className="font-black text-2xl md:text-4xl bg-gradient-to-r from-red-600 via-yellow-400 to-indigo-800 bg-clip-text text-transparent"
        style={{ fontFamily: 'Poppins, Orbitron, sans-serif', letterSpacing: '0.04em' }}
      >
        समस्या से बदलाव तक
      </h3>
    </div>
  </section>
);

export default ChallengeToChange;
