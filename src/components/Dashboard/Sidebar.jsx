import Sidebarbutton from "./Buttton/Sidebarbutton";
import { nanoid } from "nanoid";

export default function Sidebar() {
  let buttonlist = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Project",
      link: "project",
    },
    {
      name: "Tasks",
      link: "tasks",
    },
    {
      name: "People",
      link: "people",
    },
    {
      name: "Hiring",
      link: "hiring",
    },
    {
      name: "Settings",
      link: "settings",
    },
  ];
  return (
    <div className="px-4 py-10 bg-white w-[248px] h-[100%] flex flex-col gap-2">
      {buttonlist.map((item) => {
        const myid = nanoid();
        return <Sidebarbutton key={myid} yourkey={myid} totaldata={item} />;
      })}
    </div>
  );
}
