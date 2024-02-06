'use client'
import { driver } from 'driver.js'
import LayoutPage from '../_components/layout-page'
import ControlRutSolicitud from './(components)/control-buscar-sol-rut'
import { Button } from '@/components/ui/button'
import { useDownloadExcel } from 'react-export-table-to-excel'
import { useRef, useState } from 'react'
import DetalleSolicitud from './(components)/detalle-solicitud'
import DetalleRut from './(components)/detalle-rut'

export default function Page() {
  const tableRef = useRef(null)


  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSearch = (data: { tipoBusqueda: string; rutAsegurado: string }) => {
    console.log(data);
    setSelectedOption(data.tipoBusqueda);
  };

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'Users table',
    sheet: 'Users',
  })

  const handleDriver = () => {



    const driverObj = driver({
      popoverClass: 'driverjs-theme',
      showProgress: true,
      steps: [
        {
          element: '#idalgo',
          popover: {
            title: 'Bienvenido al módulo de busqueda',
            description:
              'A continuación, se mostrará el paso a paso para realizar la consulta.',
          },
        }
      ],
      nextBtnText: 'Siguiente',
      prevBtnText: 'Anterior',
      doneBtnText: 'Finalizar',
    })
    driverObj.drive()
  }


  return (
    <LayoutPage title="Solicitud por beneficiario" onTourStart={handleDriver}>
      <ControlRutSolicitud onSearch={handleSearch} />
      <hr className="my-2" />

      {selectedOption === 'SOL' && (
        <div>
          <DetalleSolicitud />
        </div>
      )}

      {selectedOption === 'ASEG' && (
        <div>
          <DetalleRut />
        </div>
      )}
      {/* {selectedOption === 'PLACEHOLDER' && (

        <div className="w-full my-2 mx-auto">
          <div className="text-xl my-2">
            <span>Detalle de la solicitud</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 mb-5 gap-2">
            <div className="">
              <span className="font-medium">Póliza</span>
            </div>
            <div>
              <span>9260</span>
            </div>
            <div>
              <span className="font-medium">Tipo</span>
            </div>
            <div>
              <span>Salud</span>
            </div>

            <div>
              <span className="font-medium">Número de solicitud</span>
            </div>
            <div>
              <span>18489025</span>
            </div>
            <div>
              <span className="font-medium">Estado Solicitud</span>
            </div>
            <div>
              <span>Liquidadas Total</span>
            </div>

            <div>
              <span className="font-medium">Nombre Titular</span>
            </div>
            <div>
              <span>GALVEZ MIRANDA PATRICIO JAVIER</span>
            </div>
            <div>
              <span className="font-medium">Nombre Paciente</span>
            </div>
            <div>
              <span>GALVEZ MIRANDA PATRICIO JAVIER</span>
            </div>

            <div>
              <span className="font-medium">Fecha Recep. Cía.</span>
            </div>
            <div>
              <span>20-11-2023</span>
            </div>
            <div>
              <span className="font-medium">Fecha de Pago</span>
            </div>
            <div>
              <span>23-11-2023</span>
            </div>

            <div>
              <span className="font-medium">Fecha de Ocurrencia</span>
            </div>
            <div>
              <span>15-11-2023</span>
            </div>
            <div>
              <span className="font-medium">Forma de Pago</span>
            </div>
            <div>
              <span>Depósito</span>
            </div>

            <div>
              <span className="font-medium">Fecha Liquidación</span>
            </div>
            <div>
              <span>21-11-2023</span>
            </div>
            <div>
              <span className="font-medium">Banco</span>
            </div>
            <div>
              <span>Banco Estado</span>
            </div>

            <div>
              <span className="font-medium">Monto Liquidado</span>
            </div>
            <div>
              <span>$ 73.747</span>
            </div>
            <div>
              <span className="font-medium">Saldo Disponible (UF)</span>
            </div>
            <div>
              <span>497,98</span>
            </div>
          </div>
          <hr className="my-2" />
          <div className="flex flex-col gap-2">
            <div>
              <span className="font-medium">Diagnóstico</span>
            </div>
            <div>
              <span>
                EXAMEN GENERAL E INVESTIGACIÓN DE PERSONAS SIN QUEJAS O SIN
                DIAGNÓSTICO INFORMADO
              </span>
            </div>

            <div>
              <span className="font-medium">Empresa</span>
            </div>
            <div>
              <span>EMPRESA CONSTRUCTORA MOLLER Y PEREZ COTAPOS S.A.</span>
            </div>
          </div>

          <hr className="my-2" />

          <div
            id="divSeleccion6"
            className="w-full my-2 text-center bg-gray-50 border border-input rounded-sm shadow-md  dark:bg-background "
          >
            <div className="flex md:flex-row flex-wrap justify-between m-2">
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
              <div className="flex gap-2">
                <Button className="w-full" variant={'outline'}>
                  Ver Informe
                </Button>
              </div>
              <div className="flex gap-2">
                <Button className="w-full" variant={'outline'}>
                  Inpugnación
                </Button>
              </div>
              <div className="flex gap-2">
                <Button className="w-full" variant={'outline'}>
                  Ver imágenes
                </Button>
              </div>
            </div>
          </div>

          <div className="relative overflow-x-auto">
            <table
              // ref={tableRef}
              id="tableId"
              className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <thead className="text-xs  uppercase bg-gray-50 dark:bg-black dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nº Línea
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Prestaciones
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nº Docto
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Docto
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cant
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Valor Prestación ($)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Aporte Isapre ($)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Monto Reclamado ($)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tope Arancel ($)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    % Reemb.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Monto Afecto ($)
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Monto Deducible ($)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Reembolso Total ($)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Estado
                  </th>
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
                  <td className="px-6 py-4">33.512</td>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">33.512</td>
                  <td className="px-6 py-4">Liquidada</td>
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
                  <td className="px-6 py-4">33.512</td>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">33.512</td>
                  <td className="px-6 py-4">Liquidada</td>
                </tr>
              </tbody>
            </table>
          </div>


        </div>
      )} */}
    </LayoutPage>
  )
}
