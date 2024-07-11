import NavLinks from "@/app/ui/layout/nav-links";
import administrator from "@/app/ui/administrator/links";

export default function SideNav() {
  return (
    <aside className="h-full flex flex-col bg-gray-80">
      <ul>
        <NavLinks links={administrator} />
      </ul>
    </aside>
  );
}
