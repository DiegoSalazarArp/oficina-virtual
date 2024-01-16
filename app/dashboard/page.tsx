'use client'

import { Button } from '@/components/ui/button'
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'

export default function Page() {
  const steps = [
    {
      element: '#elemento-1',
      popover: {
        title: 'Paso 1',
        description: 'Esta es la descripción del paso 1.',
        position: 'bottom',
      },
    },
    {
      element: '#elemento-2',
      popover: {
        title: 'Paso 2',
        description: 'Esta es la descripción del paso 2.',
        position: 'top',
      },
    },
    // ... más pasos
  ]

  const driverObj = driver({
    popoverClass: 'driverjs-theme',
    showProgress: true,
    steps: [
      {
        element: '#labelTitle',
        popover: {
          title: 'Bienvenido al módulo de denuncia',
          description:
            'A continuación, se mostrará el paso a paso para crear una denuncia.',
        },
      },
      {
        element: '#divSeleccion1',
        popover: {
          title: 'Tipo perfil',
          description: 'Debe seleccionar el perfil de como lo va a denunciar.',
        },
      },
      {
        element: '#divSeleccion2',
        popover: {
          title: 'Tipos',
          description:
            'Aquí debe seleccionar tanto la forma de pago, como el tipo de gasto.',
        },
      },
      {
        element: '#divSeleccion3',
        popover: {
          title: 'Información denuncia',
          description:
            'En esta parte, se debe completar los campos para el ingreso de la denuncia.',
        },
      },
      {
        element: '#divSeleccion4',
        popover: {
          title: 'Información asegurado',
          description:
            'Debe ingresar el rut del aseguarado, con digito verificador sin guión, esto al buscar, completará con los datos del asegurado.',
        },
      },
      {
        element: '#divSeleccion5',
        popover: {
          title: 'Número de solicitud',
          description: 'Haga clic para obtener un nuevo número de solicitud',
        },
      },
      {
        element: '#divSeleccion6',
        popover: {
          title: 'Tipo documento',
          description: 'Seleccione una de las opciones.',
        },
      },
      {
        element: '#divSeleccion7',
        popover: {
          title: 'Detalle e imágenes',
          description:
            'Indique la observación de la denuncia. Adjunte archivos si es necesario.',
        },
      },
      {
        element: '#divSeleccion8',
        popover: {
          title: 'Crear solicitud',
          description:
            'Una vez completo lo anterior, haga clic en el botón para generar la denuncia.',
        },
      },
      {
        element: '#divSeleccion9',
        popover: {
          title: 'Tour completo',
          description: 'Muy bien! Ha terminado con el tour, felicidades!.',
        },
      },
    ],
    nextBtnText: 'Siguiente',
    prevBtnText: 'Anterior',
    doneBtnText: 'Finalizar',
  })

  const handleDriver = () => {
    driverObj.drive()
  }

  return (
    <div className="mx-auto my-10 max-w-[80%] text-sm text-muted-foreground">
      <div className="flex items-center justify-between my-2">
        <span className="text-3xl" id="labelTitle">
          Crear denuncia
        </span>
        <div className=" flex items-center justify-end gap-2">
          <span className="hidden lg:block">
            <i>
              {' '}
              Tienes dudas de como funciona? Haz clic para iniciar el tour{' '}
            </i>
          </span>
          <button
            onClick={handleDriver}
            type="button"
            className="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-sm text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Iniciar tour
          </button>
        </div>
      </div>
      <hr />

      <div
        id="divSeleccion1"
        className="w-full my-2 text-center bg-gray-50 border border-input rounded-sm shadow-md  dark:bg-background "
      >
        <div className="flex md:flex-row flex-wrap justify-between m-2">
          <div className="flex gap-2 hover:text-primary">
            <input id="checkCorredor" type="checkbox" />
            <label htmlFor="checkCorredor" className="font-medium">
              Corredor
            </label>
          </div>
          <div className="flex gap-2 hover:text-primary">
            <input id="checkPool" type="checkbox" />
            <label htmlFor="checkPool" className="font-medium">
              Pool
            </label>
          </div>
          <div className="flex gap-2 hover:text-primary">
            <input id="checkAsegurado" type="checkbox" />
            <label htmlFor="checkAsegurado" className="font-medium">
              Asegurado
            </label>
          </div>
          <div className="flex gap-2 hover:text-primary">
            <input id="checkAdministracion" type="checkbox" />
            <label htmlFor="checkAdministracion" className="font-medium">
              Administracion
            </label>
          </div>
        </div>
      </div>

      <hr className="my-2" />
      <div className="w-full my-2 text-sm mx-auto">
        <div className="flex sm:flex-row justify-between sm:items-center mb-5 gap-2">
          <div className="w-[25%]">
            <span className="font-medium truncate">Contratante</span>
          </div>
          <div className="w-[25%] truncate">
            <span>ITC INGENIERIA SPA</span>
          </div>
          <div className="w-[25%] truncate">
            <span className="font-medium">Remesa número</span>
          </div>
          <div className=" w-[25%] truncate text-right">
            <span>128e71</span>
          </div>
        </div>
        <div className="w-full flex sm:flex-row justify-between sm:items-center mb-5 gap-2">
          <div className=" w-[25%]">
            <span className="font-medium">Póliza</span>
          </div>
          <div className=" w-[25%]">
            <span>4837192</span>
          </div>
          <div className=" w-[25%]">
            <span className="font-medium">Remesa fecha</span>
          </div>
          <div className=" w-[25%] text-right">
            <span>01-01-2024</span>
          </div>
        </div>
      </div>

      <div
        id="divSeleccion2"
        className="flex my-2 flex-col md:flex-row md:justify-between md:items-center text-sm gap-2"
      >
        <span className="font-medium">Tipo de pago</span>

        <select
          id="selectTipoPago"
          className="w-full shadow-sm md:w-64 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option defaultChecked>Contratante</option>
          <option value="US">Asegurado</option>
          <option value="CA">Tercero</option>
        </select>
        <div>
          <span className="font-medium">Tipo de gasto</span>
        </div>
        <div>
          <select
            id="selectTipoGasto"
            className="w-full md:w-64 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultChecked>Salud</option>
            <option value="US">Dental</option>
          </select>
        </div>
      </div>

      <hr className="my-2" />

      <div id="divSeleccion3">
        <div className="flex my-2 flex-col md:flex-row md:justify-between md:items-center text-sm gap-2">
          <div className="flex flex-col w-full" id="divSeleccion4">
            <label
              htmlFor="inputAsegRut"
              className="block mb-2 text-sm font-medium"
            >
              Rut Asegurado
            </label>
            <div className="flex gap-2">
              <input
                id="inputAsegRut"
                className="w-full md:w-[70%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
              />
              <button className="p-2  text-gray-900 border border-gray-300 rounded-sm hover:bg-accent bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-shrink-0">
                Buscar
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="inputAsegNombre"
              className="mb-2 text-sm font-medium"
            >
              Nombre Asegurado
            </label>
            <input
              id="inputAsegNombre"
              className="w-full md:w-[70%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="inputBenefNombre"
              className="block mb-2 text-sm font-medium"
            >
              Beneficiario
            </label>
            <input
              id="inputBenefNombre"
              className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
            />
          </div>
        </div>

        <div className="flex my-2 flex-col md:flex-row md:justify-between md:items-center text-sm gap-2">
          <div className="flex flex-col w-full" id="divSeleccion5">
            <label
              htmlFor="inputAsegSolicitud"
              className="block mb-2 text-sm font-medium"
            >
              Número de solicitud
            </label>
            <div className="flex gap-2">
              <input
                id="inputAsegSolicitud"
                className="w-full md:w-[70%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="number"
              />
              <button className="p-2 hover:bg-accent text-gray-900 border border-gray-300 rounded-sm bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-shrink-0">
                Obtener
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="inputAsegMonto"
              className="mb-2 text-sm font-medium"
            >
              Monto reclamado
            </label>
            <input
              id="inputAsegMonto"
              className="w-full md:w-[70%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="number"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="inputAsegCantDoc"
              className="block mb-2 text-sm font-medium"
            >
              Cantidad documentos
            </label>
            <input
              id="inputAsegCantDoc"
              className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="number"
            />
          </div>
        </div>
      </div>

      <hr className="my-2" />

      <div
        id="divSeleccion6"
        className="w-full my-2 text-center bg-gray-50 border border-input rounded-sm shadow-md  dark:bg-background "
      >
        <div className="flex md:flex-row flex-wrap justify-between m-2">
          <div className="flex gap-2 hover:text-primary ">
            <input id="checkDocReceta" type="checkbox" />
            <label htmlFor="checkDocReceta">Receta a permanencia</label>
          </div>
          <div className="flex gap-2 hover:text-primary">
            <input id="checkDocRx" type="checkbox" />
            <label htmlFor="checkDocRx">Rx</label>
          </div>
          <div className="flex gap-2 hover:text-primary">
            <input id="checkDocExamen" type="checkbox" />
            <label htmlFor="checkDocExamen">Examenes</label>
          </div>
          <div className="flex gap-2 hover:text-primary">
            <input id="checkDocFLD" type="checkbox" />
            <label htmlFor="checkDocFLD">FLD</label>
          </div>
          <div className="flex gap-2 hover:text-primary">
            <input id="checkDocEspecial" type="checkbox" />
            <label htmlFor="checkDocEspecial">Aut. Especial</label>
          </div>
          <div className="flex gap-2 hover:text-primary">
            <input id="checkDocPagoComercial" type="checkbox" />
            <label htmlFor="checkDocPagoComercial">Pago Comercial</label>
          </div>
        </div>
      </div>

      <div id="divSeleccion7">
        <div className="flex flex-col my-2 text-muted-foreground">
          <label htmlFor="message" className="mb-2 text-sm font-medium ">
            Observación
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Se adjunta documentación..."
          ></textarea>
        </div>

        <div className="my-2">
          <span className="block mb-2 text-sm font-medium ">
            Subir documentos
          </span>
          <input
            className="block w-full text-sm border rounded-sm border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="multiple_files"
            type="file"
            multiple
          />
        </div>
      </div>

      <div id="divSeleccion8" className="flex flex-row my-4">
        <Button
          className="w-full hover:bg-green-400 hover:text-white"
          variant={'outline'}
        >
          Crear denuncia
        </Button>
      </div>
    </div>
  )
}
