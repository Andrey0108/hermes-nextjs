import Navbar from "@/app/ui/layout/navbar";
import Link from "next/link";
import Package from "@/app/ui/layout/package";
const packages: [] = [];
export default async function Page() {
  return (
    <div className="container w-screen h-screen grid grid-cols-12 mx-auto">
      <Navbar />
      <main className="col-span-12 grid grid-cols-12 grid-rows-3">
        <section className="col-span-12">
          <header>
            <h2>Paquetes</h2>
          </header>
          <article>
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
          <footer>
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
        <section className="col-span-12">
          <h2>Preguntas</h2>
          <hr />
          {/* crear un detail donde se hagan preguntas y respuestas de una agencia de viajes */}
          <article className="grid grid-cols-12">
            <details className="col-span-3 rounded-xl p-4 m-4 h-12" open>
              <summary className="cursor-pointer list-none items-center gap-4 text-lg font-medium">
                ¿Cómo puedo reservar un paquete?
              </summary>
              <p className="text-slate-700">
                Para reservar un paquete, primero debes registrarte en la
                aplicación, luego seleccionar el paquete que deseas y seguir los
                pasos que se te indican.
              </p>
            </details>
            <details className="col-span-3 rounded-xl p-4 m-4 h-12" open>
              <summary className="cursor-pointer list-none items-center gap-4 text-lg font-medium ">
                ¿Cómo puedo reservar un paquete?
              </summary>
              <p className="text-slate-700">
                Para reservar un paquete, primero debes registrarte en la
                aplicación, luego seleccionar el paquete que deseas y seguir los
                pasos que se te indican.
              </p>
            </details>
            <details className="col-span-3 rounded-xl p-4 m-4 h-12" open>
              <summary className="cursor-pointer list-none items-center gap-4 text-lg font-medium ">
                ¿Cómo puedo reservar un paquete?
              </summary>
              <p className="text-slate-700">
                Para reservar un paquete, primero debes registrarte en la
                aplicación, luego seleccionar el paquete que deseas y seguir los
                pasos que se te indican.
              </p>
            </details>
            <details className="col-span-3 rounded-xl p-4 m-4 h-12" open>
              <summary className="cursor-pointer list-none items-center gap-4 text-lg font-medium ">
                ¿Cómo puedo reservar un paquete?
              </summary>
              <p className="text-slate-700">
                Para reservar un paquete, primero debes registrarte en la
                aplicación, luego seleccionar el paquete que deseas y seguir los
                pasos que se te indican.
              </p>
            </details>
          </article>
        </section>
        {/* footer */}
        <section className="col-span-12">
          <hr />
          <section className="grid grid-cols-12">
            <article className="col-span-6">
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
            </article>
            <article className="col-span-6 mx-auto text-start">
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
            </article>
          </section>
        </section>
      </main>
    </div>
  );
}
