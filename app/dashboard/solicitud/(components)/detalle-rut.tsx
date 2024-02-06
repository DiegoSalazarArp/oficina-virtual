
export default function DetalleRut() {
  return (
    <div className="w-full my-2 mx-auto">
      <div className="text-xl my-2">
        <span>Datos del asegurado</span>
      </div>
      <div className="grid grid-cols-2 mb-5 gap-2">
        <div className="">
          <span className="font-medium">Nombre Asegurado Titular</span>
        </div>
        <div>
          <span>PATRICIO JAVIER GALVEZ MIRANDA</span>
        </div>
        <div>
          <span className="font-medium">Rut Asegurado Titular	</span>
        </div>
        <div>
          <span>8259605-4</span>
        </div>
        <div className="">
          <span className="font-medium">Grupo asegurado</span>
        </div>
        <div>
          <span>ACC ASEGURADOS</span>
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
                Póliza
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Estado
              </th>
              <th scope="col" className="px-6 py-3">
                Inicio Vigencia
              </th>
              <th scope="col" className="px-6 py-3">
                Término Vigencia
              </th>
              <th scope="col" className="px-6 py-3">
                COORTIT
              </th>

            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-[#252525] dark:border-black">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                9260
              </th>
              <td className="px-6 py-4">SALUD</td>
              <td className="px-6 py-4">EMPRESA CONSTRUCTORA MOLLER Y PEREZ COTAPOS S.A.</td>
              <td className="px-6 py-4">Vigente</td>
              <td className="px-6 py-4">01-11-2023</td>
              <td className="px-6 py-4">31-10-2024</td>
              <td className="px-6 py-4">12201</td>

            </tr>

          </tbody>
        </table>
      </div>
      <hr className="my-2" />
      <div className="text-xl my-2">
        <span>Datos generales póliza: 9260</span>
      </div>
      <div className="grid grid-cols-2 mb-5 gap-2">
        <div className="">
          <span className="font-medium">Nombre Contratante	</span>
        </div>
        <div>
          <span>EMPRESA CONSTRUCTORA MOLLER Y PEREZ COTAPOS S.A.</span>
        </div>
        <div>
          <span className="font-medium">Rut Contratante		</span>
        </div>
        <div>
          <span>92770000-K</span>
        </div>
        <div className="">
          <span className="font-medium">Vigencia Póliza	</span>
        </div>
        <div>
          <span>	01-11-2023 - 	31-10-2024</span>
        </div>

        <div className="">
          <span className="font-medium">Estado Asegurado		</span>
        </div>
        <div>
          <span>Vigente</span>
        </div>
        <div className="">
          <span className="font-medium">Corredor Asociado	</span>
        </div>
        <div>
          <span>NEXO CORREDORES DE SEGUROS LTDA.</span>
        </div>
        <div className="">
          <span className="font-medium">Días Max. de presentación		</span>
        </div>
        <div>
          <span>75</span>
        </div>




      </div>


      <hr className="my-2" />

      <div className="relative overflow-x-auto">
        <table
          // ref={tableRef}
          id="tableId"
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead className="text-xs  uppercase bg-gray-50 dark:bg-black dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Rut
              </th>
              <th scope="col" className="px-6 py-3">
                Vigencia Inicial
              </th>
              <th scope="col" className="px-6 py-3">
                Vigencia Final
              </th>
              <th scope="col" className="px-6 py-3">
                Estado
              </th>
              <th scope="col" className="px-6 py-3">
                Parentesco
              </th>
              <th scope="col" className="px-6 py-3">
                N° Solicitudes
              </th>

            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-[#252525] dark:border-black">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Patricio Javier Galvez Miranda
              </th>
              <td className="px-6 py-4">8259605-4</td>
              <td className="px-6 py-4">01-11-2023	</td>
              <td className="px-6 py-4">31-10-2024	</td>
              <td className="px-6 py-4">Vigente</td>
              <td className="px-6 py-4">Titular</td>
              <td className="px-6 py-4">6</td>

            </tr>

          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mb-5 gap-2 my-2">
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
          <span className="font-medium">Estado</span>
        </div>
        <div>
          <span>Vigente</span>
        </div>
        <div className="">
          <span className="font-medium">Nombre titular</span>
        </div>
        <div>
          <span className="truncate ">PATRICIO JAVIER GALVEZ MIRANDA	</span>
        </div>

        <div>
          <span className="font-medium">Rut</span>
        </div>
        <div>
          <span>8259605-4	</span>
        </div>
        <div>
          <span className="font-medium">Fecha de Nacimiento	</span>
        </div>
        <div>
          <span>02-07-1958
          </span>
        </div>

        <div>
          <span className="font-medium">Inicio Vigencia	</span>
        </div>
        <div>
          <span>01-11-2023	</span>
        </div>
        <div>
          <span className="font-medium">Termino Vigencia	</span>
        </div>
        <div>
          <span>31-10-2024	</span>
        </div>

        <div>
          <span className="font-medium">Email	</span>
        </div>
        <div>
          <span>PGALVEZ@MOLLER.CL</span>
        </div>
        <div>
          <span className="font-medium">Forma de Pago</span>
        </div>
        <div>
          <span>Deposito Cta. Cte.	</span>
        </div>

        <div>
          <span className="font-medium">Banco</span>
        </div>
        <div>
          <span>BANCO DE CHILE	</span>
        </div>
        <div>
          <span className="font-medium">Nº Cuenta	</span>
        </div>
        <div>
          <span>000380246008</span>
        </div>

        <div className="">
          <span className="font-medium">Nombre Benef.	</span>
        </div>
        <div>
          <span className="capitalize">patricio javier galvez miranda
          </span>
        </div>

      </div>

    </div >
  )
}