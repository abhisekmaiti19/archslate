import { Outlet } from "react-router";
import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";

export default function Dashboard() {
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <div className="flex w-full h-full">
        <Sidebar />
        <div className="w-full h-full overflow-x-hidden p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
