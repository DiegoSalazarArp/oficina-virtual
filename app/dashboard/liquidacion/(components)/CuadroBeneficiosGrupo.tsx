export default function CuadroBeneficiosGrupo() {
  return (
    <>
      <div className="text-xl my-2">
        <span>Cuadro de Beneficios</span>
      </div>
      <div className="flex my-2 flex-col md:flex-row md:justify-normal md:items-center gap-2">
        <div className="flex flex-col">
          <span className="mb-2">Póliza</span>
          <input
            className="w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
            type="text"

          />

        </div>
        <div className="flex flex-col w-full">
          <span className="mb-2">Razón social compañía</span>
          <input
            className="w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
            type="text"

          />

        </div>
      </div>
      <div className="flex my-2 flex-col md:flex-row md:justify-normal md:items-center gap-2">
        <div className="flex flex-col">
          <span className="mb-2">Sub Póliza</span>
          <input
            className="w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
            type="text"

          />

        </div>
        <div className="flex flex-col w-full">
          <span className="mb-2">Nombre Empresa</span>
          <input
            className="w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
            type="text"

          />

        </div>
      </div>
      <div className="flex my-2 flex-col md:flex-row md:justify-normal md:items-center gap-2">
        <div className="flex flex-col">
          <span className="mb-2">Sub Póliza</span>
          <input
            className="w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
            type="text"

          />

        </div>

      </div>

      <hr className="my-2" />
      <div className="flex my-2 justify-between items-center">
        <div className="flex flex-col">
          <span>Tipo Tope por Periodo</span>
          <input
            className="w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
            type="text"

          />
        </div>
        <div className="flex flex-col">
          <span>Periodo por Tope</span>
          <input
            className="w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
            type="text"

          />
        </div>
        <div className="flex flex-col">
          <span>Tipo Max. Evento Periodo</span>
          <input
            className="w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
            type="text"

          />
        </div>
        <div className="flex flex-col">
          <span>Max. Evento por Periodo</span>
          <input
            className="w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
            type="text"

          />
        </div>
      </div>

      <div className="relative max-h-[50vh] overflow-auto">
        <table
          // ref={tableRef}
          id="tableId"
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead className="sticky text-xs z-10  uppercase bg-gray-50 dark:bg-black dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 sticky top-0 bg-gray-50 dark:bg-black opacity-100">
                Grupo                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                Descr. Grupo Prest.                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                Tope x Evento (UF)                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                Tope x Periodo (UF)
              </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                Cantidad Max Evento x Periodo                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                % Reem.                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                % Reem Prefer.                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                % Reem Directo                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                Tope x Evento Esp                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                Tope x Periodo Esp                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                Cant Max. Evento X Periodo Esp                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                Deducible             </th>

            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-[#252525] dark:border-black">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td className="px-6 py-4">Mamografia Bilateral (4 Exp.)</td>
              <td className="px-6 py-4">125286793</td>
              <td className="px-6 py-4">BONO</td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">69.563</td>
              <td className="px-6 py-4">21.689</td>
              <td className="px-6 py-4">47.874</td>
              <td className="px-6 py-4">47.874</td>
              <td className="px-6 py-4">70</td>
              <td className="px-6 py-4">70</td>
              <td className="px-6 py-4">70</td>
            </tr>




          </tbody>
        </table>
      </div>
    </>
  )
}