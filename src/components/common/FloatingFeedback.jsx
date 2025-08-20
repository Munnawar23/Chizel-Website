import { useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import FeedbackModal from "@components/features/feedback/FeedbackModal";

const FloatingFeedback = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg transition-transform duration-300 ease-out hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary-alpha"
        aria-label="Open feedback form"
      >
        <FaCommentDots size="1.8em" />
      </button>

      {isModalOpen && <FeedbackModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default FloatingFeedback;