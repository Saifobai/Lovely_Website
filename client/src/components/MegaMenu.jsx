import { useState } from "react";

import { megaMenuData } from "../data/megaMenuData";
import MegaSidebar from "./mega/MegaSidebar";
import MegaContent from "./mega/MegaContent";

export default function MegaMenu() {
  const [active, setActive] = useState("enterprise");

  return (
    <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2 w-[1100px] bg-white rounded-xl shadow-2xl z-50">
      <div className="flex">
        <MegaSidebar active={active} setActive={setActive} />
        <div className="flex-1 p-8">
          <MegaContent data={megaMenuData[active]} />
        </div>
      </div>
    </div>
  );
}
