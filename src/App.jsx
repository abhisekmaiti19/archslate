import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="w-screen h-screen bg-brand-bg flex justify-center overflow-hidden ">
      {/* --max screen 1440px  */}
      {/* -- width as possible as available but max set to 1440px bcz according to figma  */}
      <div className="w-screen h-screen max-w-[1440px]">
        <Outlet />
      </div>
    </div>
  );
}
