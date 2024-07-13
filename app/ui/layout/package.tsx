export default function Package({
  address,
  name,
  date,
  price,
  services,
}: {
  address: string;
  name: string;
  date: string;
  price: number;
  services: string[];
}) {
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  });
  const formattedPrice = formatter.format(price);

  // formatear la fecha para que quede más legible para el usuario
  const formattedDate = new Date(date).toLocaleDateString("es-CO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-xs overflow-hidden rounded-lg shadow-lg my-8">
      <div className="flex items-end justify-end h-32 p-4 bg-[url('https://picsum.photos/300/150')] bg-center bg-cover">
        <p className="p-1 tracking-widest bg-gray-100 bg-opacity-75 rounded shadow-lg">
          {address}
        </p>
      </div>
      <div className="flex justify-between p-4">
        <p className="text-lg text-gray-600">{name}</p>
        <p className="text-sm">{formattedDate}</p>
      </div>
      <div className="flex border-t">
        <article className="flex flex-col gap-2 px-2">
          <ul>
            {/* Realiza un map de los servicios que se incluyan como un item de la lista */}
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </article>
        <article className="ms-auto p-4">
          <strong>{formattedPrice}</strong>
        </article>
      </div>
    </div>
  );
}
