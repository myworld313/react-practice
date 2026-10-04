import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
