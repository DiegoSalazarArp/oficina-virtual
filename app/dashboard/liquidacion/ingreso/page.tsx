'use client'

import { driver } from "driver.js";
import LayoutPage from "../../_components/layout-page";
import RemesasAsignadas from "../(components)/RemesasAsignadas";
import HistorialGastosAseg from "../(components)/HistorialGastosAseg";
import CuadroBeneficiosGrupo from "../(components)/CuadroBeneficiosGrupo";
import ConsultaPreexistencia from "../(components)/ConsultaPreexistencia";
import { Button } from "@/components/ui/button";
import TabsDemo from "@/components/ui/tabs";



export default function Page() {
  return (
    <LayoutPage title="Ingreso" onTourStart={() => { }}>
      <div className="w-full my-2 mx-auto">
        <RemesasAsignadas />

        <hr className="my-2" />
        <HistorialGastosAseg />
        <hr className="my-2" />
        <CuadroBeneficiosGrupo />
        <hr className="my-2" />
        <ConsultaPreexistencia />


        <div className="flex h-screen gap-2 justify-between my-4">
          <div className="w-[70%] border rounded-sm shadow-md">
            <div className="text-lg m-2 ">
              <span>Ingreso</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <Button variant={"outline"}>Remesa</Button>
              </div>

              <div className="flex flex-col">
                <span>adas</span>
                <input
                  className="w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
                  type="text"

                />
              </div>
              <div className="flex flex-col">
                <span>adas</span>
                <input
                  className="w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
                  type="text"

                />
              </div>
              <div className="flex flex-col">
                <span>adas</span>
                <input
                  className="w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
                  type="text"

                />
              </div>
              <div className="flex flex-col">
                <span>adas</span>
                <input
                  className="w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
                  type="text"

                />
              </div>
              <div className="flex flex-col">
                <span>adas</span>
                <input
                  className="w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
                  type="text"

                />
              </div>

            </div>

          </div>
          <div className="w-[30%] border rounded-sm shadow-md">
            <div className="text-lg m-2 ">
              <span>Solicitudes por remesa</span>
            </div>
            <hr className="my-2" />
            <div className="relative max-h-[50vh] overflow-auto m-2">
              <table
                id="tableId"
                className="w-full my-2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                <thead className="sticky text-xs z-10  uppercase bg-gray-50 dark:bg-black dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-2 py-3 sticky top-0 bg-gray-50 dark:bg-black opacity-100">
                      Contr.                </th>
                    <th scope="col" className="px-2 py-3 sticky bg-gray-50 dark:bg-black top-0">
                      Solicitud                </th>
                    <th scope="col" className="px-2 py-3 sticky bg-gray-50 dark:bg-black top-0">
                      Estado                </th>

                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-[#252525] dark:border-black">
                    <th
                      scope="row"
                      className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      1
                    </th>
                    <td className="px-2 py-4">18547526</td>
                    <td className="px-2 py-4">NO ingresa</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex items-center justify-between my-2">
                <div>
                  <Button variant={"outline"}>Actualizar</Button>
                </div>
                <div>
                  <Button variant={"outline"}>Historial</Button>
                </div>
                <div>
                  <Button variant={"outline"}>Salir </Button>
                </div>
              </div>







            </div>


          </div>

        </div>



      </div>
    </LayoutPage>
  )

}