import { Button } from "@/components/ui/button";

export default function RemesasAsignadas() {
  return (
    <>
      <div className="text-xl my-2">
        <span>Remesas por liquidador</span>
      </div>
      <div id="divSeleccion3">
        <div className="flex my-2 flex-col md:flex-row md:justify-between md:items-center  gap-2">
          <div className="flex flex-col w-60" id="divSeleccion4">
            <label className="mb-2 font-medium">
              Usuario
            </label>
            <div className="flex items-center gap-2">
              <input
                className="w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
                type="text"

              />

            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2 font-medium">
              Nombre Asegurado
            </label>
            <input
              className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
              type="text"

            />
          </div>
          <div className="flex flex-col w-60">
            <label
              htmlFor="inputBenefNombre"
              className="block mb-2 font-medium"
            >
              Fecha
            </label>
            <input
              className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
              type="text"

            />
          </div>
        </div>


      </div>


      <hr className="my-2" />
      <div
        id="divSeleccion6"
        className="w-full my-2 text-center bg-gray-50 border border-input rounded-sm shadow-md  dark:bg-background "
      >
        <div className="flex md:flex-row flex-wrap items-center justify-between m-2">
          <div className="flex gap-2">
            <Button
              type="button"
              className="w-full"
              variant={'outline'}
            // onClick={onDownload}
            >
              Exportar a Excel
            </Button>
          </div>
          <div className="flex gap-2 justify-between">
            <div className="flex flex-col ">
              <span>PD:Pendiente Contraloria Dental</span>
              <span>PM:Pendiente Contraloria Médica</span>
            </div>
            <div className="flex flex-col ">
              <span>DD:Dictamen Contraloria Dental</span>
              <span>PD:Dictamen Contraloria Médica</span>
            </div>

          </div>
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
                Poliza                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                Nombre                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                Remesa                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                F.remesa
              </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                F.asignación                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                F.Cierre                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                Solicitudes                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                ingresadas                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                Por ingresar                </th>
              <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                Estado                </th>

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
            </tr>
            <tr className="bg-white border-b dark:bg-[#252525] dark:border-black">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                2
              </th>
              <td className="px-6 py-4">
                Ecotomografia Mamaria Bilateral{' '}
              </td>
              <td className="px-6 py-4">125286793</td>
              <td className="px-6 py-4">BONO</td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">69.563</td>
              <td className="px-6 py-4">21.689</td>
              <td className="px-6 py-4">47.874</td>
              <td className="px-6 py-4">47.874</td>
              <td className="px-6 py-4">70</td>
            </tr>

            <tr className="bg-white border-b dark:bg-[#252525] dark:border-black">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                2
              </th>
              <td className="px-6 py-4">
                Ecotomografia Mamaria Bilateral{' '}
              </td>
              <td className="px-6 py-4">125286793</td>
              <td className="px-6 py-4">BONO</td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">69.563</td>
              <td className="px-6 py-4">21.689</td>
              <td className="px-6 py-4">47.874</td>
              <td className="px-6 py-4">47.874</td>
              <td className="px-6 py-4">70</td>
            </tr>


            <tr className="bg-white border-b dark:bg-[#252525] dark:border-black">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                2
              </th>
              <td className="px-6 py-4">
                Ecotomografia Mamaria Bilateral{' '}
              </td>
              <td className="px-6 py-4">125286793</td>
              <td className="px-6 py-4">BONO</td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">69.563</td>
              <td className="px-6 py-4">21.689</td>
              <td className="px-6 py-4">47.874</td>
              <td className="px-6 py-4">47.874</td>
              <td className="px-6 py-4">70</td>
            </tr>


            <tr className="bg-white border-b dark:bg-[#252525] dark:border-black">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                2
              </th>
              <td className="px-6 py-4">
                Ecotomografia Mamaria Bilateral{' '}
              </td>
              <td className="px-6 py-4">125286793</td>
              <td className="px-6 py-4">BONO</td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">69.563</td>
              <td className="px-6 py-4">21.689</td>
              <td className="px-6 py-4">47.874</td>
              <td className="px-6 py-4">47.874</td>
              <td className="px-6 py-4">70</td>
            </tr>


            <tr className="bg-white border-b dark:bg-[#252525] dark:border-black">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                2
              </th>
              <td className="px-6 py-4">
                Ecotomografia Mamaria Bilateral{' '}
              </td>
              <td className="px-6 py-4">125286793</td>
              <td className="px-6 py-4">BONO</td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">69.563</td>
              <td className="px-6 py-4">21.689</td>
              <td className="px-6 py-4">47.874</td>
              <td className="px-6 py-4">47.874</td>
              <td className="px-6 py-4">70</td>
            </tr>




          </tbody>
        </table>
      </div>
    </>

  )
}