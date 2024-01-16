import { Outlet } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";

export default function Layout() {
  return (
    <main>
      <Navbar2 />
      <Outlet />
      <Footer />
    </main>
  );
}
