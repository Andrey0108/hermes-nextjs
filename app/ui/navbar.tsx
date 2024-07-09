import HermesLogo from "@/app/ui/hermes-logo";

export default function Navbar() {
  return (
    <nav className="col-span-12">
      <div className="container flex items-center justify-between py-2">
        <HermesLogo />
        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <li className="md:px-4 md:py-2 ">
              <a href="#">Paquetes</a>
            </li>
            <li>
              <button className="md:px-4 md:py-2 rounded-lg bg-slate-100">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
