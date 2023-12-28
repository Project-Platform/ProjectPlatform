import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <main>
      <Navbar />
      <Outlet />
      {/* <div className="mt-[10vw]"> */}
      <Footer />
      {/* </div> */}
      </main>
  );
}
