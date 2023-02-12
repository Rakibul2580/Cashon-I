import { Logo } from "@/assets";
import { sidebarData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { sidebar1 } from "../../../../Downloads/Vector.jpg";

const Sidebar = () => {
  return (
    <div className="w-48 mx-auto ">
      <Link href="#" className="flex items-center mt-8 mb-12 space-x-4">
        <Image src={Logo} />
        <h1 className="text-xl font-bold">Cashon</h1>
      </Link>
      <div className="space-y-3">
        {sidebarData.map((item, i) => (
          <div
            key={i}
            className="flex items-center space-x-5 rounded-lg hover:font-semibold text-[#9E9E9E] text-sm py-3 px-4 hover:bg-blue-100 hover:text-blue-500"
          >
            <Image src={item.icon} />
            <p className="text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
