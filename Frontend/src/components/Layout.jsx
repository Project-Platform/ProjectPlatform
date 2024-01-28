import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <main>
      <Navbar />
      <div className="min-h-[75svh]">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
