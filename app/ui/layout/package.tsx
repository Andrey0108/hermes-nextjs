export default function Package() {
  return (
    <div className="max-w-xs overflow-hidden rounded-lg shadow-lg my-8">
      <div className="flex items-end justify-end h-32 p-4 bg-[url('https://picsum.photos/300/150')] bg-center bg-cover">
        <p className="p-1 tracking-widest bg-gray-100 bg-opacity-75 rounded shadow-lg">
          San Carlos, Antioquia
        </p>
      </div>
      <div className="flex justify-between p-4">
        <p className="text-lg text-gray-600">El Tabor</p>
        <p className="text-sm">30 de Junio</p>
      </div>
      <div className="flex border-t">
        <article className="flex flex-col gap-2 px-2">
          <span>Transporte</span>
          <span>Poliza de Seguro</span>
          <span>Guia local</span>
          <span>Snack</span>
        </article>
        <article className="ms-auto p-4">
          <span>$</span>
          <strong>60.000</strong>
        </article>
      </div>
    </div>
  );
}
