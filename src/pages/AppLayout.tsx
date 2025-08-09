import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="grid grid-rows-[50px_1fr_50px] min-h-screen">
      <Header />
      <main className="order">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
