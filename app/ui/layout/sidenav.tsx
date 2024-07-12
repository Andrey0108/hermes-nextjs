import NavLinks from "@/app/ui/layout/nav-links";
import administrator from "@/app/ui/administrator/links";

export default function SideNav() {
  return (
    <aside className="col-span-1 row-span-full h-full flex flex-col">
      <ul>
        <NavLinks links={administrator} />
      </ul>
    </aside>
  );
}
