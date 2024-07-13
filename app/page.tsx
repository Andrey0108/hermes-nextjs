import Navbar from "@/app/ui/layout/navbar";
import Link from "next/link";
import Package from "@/app/ui/layout/package";
import Footer from "@/app/ui/layout/footer";
import { Packages } from "@/app/utils/definitions";
// crear un array de objetos con los paquetes para que carguen en la página

const packages: Packages[] = [
  {
    address: "Calle 123 # 123 - 123",
    name: "Paquete 1",
    date: "01/01/2024",
    price: 1000000,
    services: ["Servicio 1", "Servicio 2", "Servicio 3"],
  },
  {
    address: "Calle 123 # 123 - 123",
    name: "Paquete 2",
    date: "01/01/2024",
    price: 1000000,
    services: ["Servicio 1", "Servicio 2", "Servicio 3"],
  },
  {
    address: "Calle 123 # 123 - 123",
    name: "Paquete 3",
    date: "01/01/2024",
    price: 1000000,
    services: ["Servicio 1", "Servicio 2", "Servicio 3"],
  },
  {
    address: "Calle 123 # 123 - 123",
    name: "Paquete 4",
    date: "01/01/2024",
    price: 1000000,
    services: ["Servicio 1", "Servicio 2", "Servicio 3"],
  },
  {
    address: "Calle 123 # 123 - 123",
    name: "Paquete 5",
    date: "01/01/2024",
    price: 1000000,
    services: ["Servicio 1", "Servicio 2", "Servicio 3"],
  },
  {
    address: "Calle 123 # 123 - 123",
    name: "Paquete 6",
    date: "01/01/2024",
    price: 1000000,
    services: ["Servicio 1", "Servicio 2", "Servicio 3"],
  },
  {
    address: "Calle 123 # 123 - 123",
    name: "Paquete 7",
    date: "01/01/2024",
    price: 1000000,
    services: ["Servicio 1", "Servicio 2", "Servicio 3"],
  },
];
export default async function Page() {
  return (
    <div className="grid grid-cols-12 grid-rows-12">
      <Navbar />
      <main className="grid col-span-12 row-span-10">
        <section className="col-span-12 mx-auto my-5">
          <header className="text-center">
            <h2 className="font-bold text-4xl">Paquetes</h2>
          </header>
          <article className="grid grid-cols-4 gap-4">
            {packages.map(
              (pkg: {
                address: string;
                name: string;
                date: string;
                price: number;
                services: string[];
              }) => {
                return (
                  <Package
                    address={pkg.address}
                    name={pkg.name}
                    date={pkg.date}
                    price={pkg.price}
                    services={pkg.services}
                  />
                );
              }
            )}
          </article>
          <footer className="text-center">
            <p>
              Antes de realizar una reserva debes saber que el comprobante se
              sube en la aplicación, pero previamente debes registrarte. Lee
              nuestros{" "}
              <Link href={"/terminos"} className="text-blue-500">
                terminos y condiciones
              </Link>
            </p>
          </footer>
        </section>
        {/* preguntas */}
        <section className="col-span-12 my-5">
          <header className="text-center">
            <h2 className="font-bold text-4xl">Preguntas</h2>
          </header>
          <hr />
          {/* crear un detail donde se hagan preguntas y respuestas de una agencia de viajes */}
          <article className="grid grid-cols-12">
            <fieldset className="col-span-3 rounded-xl p-4 m-4">
              <legend className="items-center gap-4 text-lg font-medium">
                ¿Cómo puedo reservar un paquete?
              </legend>
              <p className="text-slate-700">
                Para reservar un paquete, primero debes registrarte en la
                aplicación, luego seleccionar el paquete que deseas y seguir los
                pasos que se te indican.
              </p>
            </fieldset>
            <fieldset className="col-span-3 rounded-xl p-4 m-4">
              <legend className="items-center gap-4 text-lg font-medium">
                ¿Cómo puedo reservar un paquete?
              </legend>
              <p className="text-slate-700">
                Para reservar un paquete, primero debes registrarte en la
                aplicación, luego seleccionar el paquete que deseas y seguir los
                pasos que se te indican.
              </p>
            </fieldset>
            <fieldset className="col-span-3 rounded-xl p-4 m-4">
              <legend className="items-center gap-4 text-lg font-medium">
                ¿Cómo puedo reservar un paquete?
              </legend>
              <p className="text-slate-700">
                Para reservar un paquete, primero debes registrarte en la
                aplicación, luego seleccionar el paquete que deseas y seguir los
                pasos que se te indican.
              </p>
            </fieldset>
            <fieldset className="col-span-3 rounded-xl p-4 m-4">
              <legend className="items-center gap-4 text-lg font-medium">
                ¿Cómo puedo reservar un paquete?
              </legend>
              <p className="text-slate-700">
                Para reservar un paquete, primero debes registrarte en la
                aplicación, luego seleccionar el paquete que deseas y seguir los
                pasos que se te indican.
              </p>
            </fieldset>
          </article>
        </section>
        {/* footer */}
        <section className="col-span-12 my-5">
          <article className="grid grid-cols-12">
            <section className="col-span-6 mx-auto">
              <h2 className="text-lg font-bold my-5">
                Información de contacto
              </h2>
              <p>
                <strong>Registro Nacional</strong>: 123456789
              </p>

              <strong>Redes sociales</strong>
              <ul>
                <li>
                  <a href="https://www.facebook.com/parchetravels">Facebook</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/parchetravels">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/parchetravels">Twitter</a>
                </li>
              </ul>

              <p>
                <strong>Correo</strong>:
                <a href="mailto:gerenciaparchetravels@gmail.com">
                  gerenciaparchetravels@gmail.com
                </a>
              </p>

              <p>
                <strong>Teléfono</strong>: 123456789
              </p>
            </section>
            <section className="col-span-6 mx-auto text-start">
              <ul>
                <li>
                  <Link href="/pqrs">PQRS</Link>
                </li>
                <li>
                  <Link href="/terminos">Terminos y condiciones</Link>
                </li>
                <li>
                  <Link href="/politicas">Políticas de privacidad</Link>
                </li>
              </ul>
            </section>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
