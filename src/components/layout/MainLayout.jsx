import { Outlet } from "react-router-dom";
import CustomCursor from "@components/layout/CustomCursor";
import FeedbackFloatingAlert from "@components/features/feedback/FeedbackFloatingAlert";

const MainLayout = () => {
  return (
    <>
      <CustomCursor />
      <main className="relative w-full min-h-screen bg-background">
        <Outlet />
      </main>
      <FeedbackFloatingAlert />
    </>
  );
};

export default MainLayout;