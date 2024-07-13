export default function Page() {
  return (
    <section className="grid grid-cols-12 gap-10">
      <fieldset className="col-span-12 md:col-span-6 overflow-hidden">
        <legend className="border-b-2 w-full">Roles</legend>
        <table className="min-w-full table-auto text-center my-4">
          <thead className="bg-gray-300">
            <tr>
              <th scope="col">Roles</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-0 border-gray-300 bg-gray-100">
              <td>Admin</td>
              <td>
                <button>Editar</button>
                <button>Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      <fieldset className="col-span-12 md:col-span-6 overflow-hidden">
        <legend className="border-b-2 w-full">Rol</legend>

        <form className="container my-4">
          <div className="grid grid-cols-12 items-center">
            <label htmlFor="nombre" className="col-span-12 md:col-span-6">
              Nombre rol:
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              className="col-span-12 md:col-span-6 px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2  focus:border-blue-400  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            />
          </div>
          <div className="container my-2">
            <button className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md">
              Guardar
            </button>
          </div>
        </form>
      </fieldset>
    </section>
  );
}
