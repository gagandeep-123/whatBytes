import { LuFileSpreadsheet } from "react-icons/lu";
import { TbAntennaBars5 } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";

const Sidebar = () => {
  const listItems = [
    {
      name: "Dashboard",
      icon: <TbAntennaBars5 style={{ fontSize: "20px" }} />,
    },
    { name: " Skill Test", icon: <SlBadge style={{ fontSize: "20px" }} /> },
    {
      name: "Internship",
      icon: <LuFileSpreadsheet style={{ fontSize: "20px" }} />,
    },
  ];
  return (
    <div className="border-stone-200 border-r-2 w-1/6 pt-12 pr-2.5">
      {listItems.map((item, idx) => {
        return (
          <li
            className={`list-none tracking-tighter font-extrabold flex items-center px-4 py-4 my-3.5 rounded-r-full ${
              idx === 1 ? " bg-zinc-100 text-blue-800" : "text-slate-800 "
            }`}
          >
            {item.icon}
            <div className="ml-5">{item.name}</div>
          </li>
        );
      })}
    </div>
  );
};
export default Sidebar;
