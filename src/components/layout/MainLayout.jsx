import { Outlet } from "react-router-dom";
import CustomCursor from "@components/layout/CustomCursor";

const MainLayout = () => {
  return (
    <>
      <CustomCursor />
      <main className="relative w-full min-h-screen bg-background">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;