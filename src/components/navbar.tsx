import { Instagram, Linkedin } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";

export default function Navbar() {
  return (
    <>
      <div className="flex w-full p-3 justify-between items-center">
        <div className="flex gap-5 items-center">
          <SidebarTrigger />
          <p className="text-sm font-semibold">VERSE ANALYTICS</p>
        </div>
        <div className="flex gap-5">
          <a href="https://linkedin.com/in/xtaveira" target="_blank">
            <Linkedin />
          </a>
          <a href="https://instagram.com/xtaveira" target="_blank">
            <Instagram />
          </a>
        </div>
      </div>
      <Separator />
    </>
  );
}
