'use client'

import { Button } from '@/components/ui/button'
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'
import ControlPolizaCorredor from '../(components)/control-poliza-corredor'
import LayoutPage from '../../_components/layout-page'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useState } from 'react'

type FormValues = {
  rut: string
  nombreAsegurado: string
  nombreBeneficiario: string
  numSolicitud: number
  montoReclamado: number
}

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormValues>()
  const [showForm, setShowForm] = useState(true)

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

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success('Denuncia creada con éxito')
  }

  /**
   * Ejecuta el drivejs.
   */
  const handleDriver = () => {
    driverObj.drive()
  }

  const handleInfoAseg = () => {
    const nombreAsegurado = 'Diego Salazar Arp'
    const nombreBeneficiario = 'No hay cargas existentes'

    setValue('nombreAsegurado', nombreAsegurado)
    setValue('nombreBeneficiario', nombreBeneficiario)
  }

  const handleInfoSol = () => {
    const numSolicitud = 123456

    setValue('numSolicitud', numSolicitud)
  }

  const handleShowForm = () => {
    setShowForm(false)
  }

  return (
    <LayoutPage title="Crear denuncia" onTourStart={handleDriver}>
      <ControlPolizaCorredor onToggleForm={handleShowForm} />

      <hr className="my-2" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full my-2 mx-auto">
          <div className="flex sm:flex-row justify-between sm:items-center mb-5 gap-2">
            <div className="w-full">
              <span className="font-medium truncate">Contratante</span>
            </div>
            <div className="w-full truncate">
              <span>ITC INGENIERIA SPA</span>
            </div>
            <div className="w-full truncate">
              <span className="font-medium">Remesa número</span>
            </div>
            <div className=" w-full truncate text-right">
              <span>128e71</span>
            </div>
          </div>
          <div className="flex sm:flex-row justify-between sm:items-center mb-5 gap-2">
            <div className="w-full">
              <span className="font-medium">Póliza</span>
            </div>
            <div className="w-full">
              <span>4837192</span>
            </div>
            <div className="w-full">
              <span className="font-medium">Remesa fecha</span>
            </div>
            <div className="w-full text-right">
              <span>01-01-2024</span>
            </div>
          </div>
        </div>

        <div
          id="divSeleccion2"
          className="flex my-2 flex-col md:flex-row md:justify-between md:items-center gap-2"
        >
          <span className="font-medium">Tipo de pago</span>

          <select
            id="selectTipoPago"
            className="w-full md:w-64 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
            disabled={showForm}
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
              className="w-full md:w-64 p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
              disabled={showForm}
            >
              <option defaultChecked>Salud</option>
              <option value="US">Dental</option>
            </select>
          </div>
        </div>

        <hr className="my-2" />

        <div id="divSeleccion3">
          <div className="flex my-2 flex-col md:flex-row md:justify-between md:items-center  gap-2">
            <div className="flex flex-col w-full" id="divSeleccion4">
              <label htmlFor="inputAsegRut" className="mb-2 font-medium">
                Rut Asegurado
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="inputAsegRut"
                  className="w-full md:w-[70%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
                  type="text"
                  {...register('rut')}
                  disabled={showForm}
                />

                <Button
                  onClick={handleInfoAseg}
                  type="button"
                  variant={'outline'}
                  disabled={showForm}
                >
                  Buscar
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="inputAsegNombre" className="mb-2 font-medium">
                Nombre Asegurado
              </label>
              <input
                id="inputAsegNombre"
                className="w-full md:w-[70%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
                type="text"
                {...register('nombreAsegurado')}
                disabled={showForm}
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="inputBenefNombre"
                className="block mb-2 font-medium"
              >
                Beneficiario
              </label>
              <input
                id="inputBenefNombre"
                className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
                type="text"
                {...register('nombreBeneficiario')}
                disabled={showForm}
              />
            </div>
          </div>

          <div className="flex my-2 flex-col md:flex-row md:justify-between md:items-center gap-2">
            <div className="flex flex-col w-full" id="divSeleccion5">
              <label
                htmlFor="inputAsegSolicitud"
                className="block mb-2 font-medium"
              >
                Número de solicitud
              </label>
              <div className="flex items-center gap-2">
                <Button
                  onClick={handleInfoSol}
                  type="button"
                  variant={'outline'}
                  disabled={showForm}
                >
                  Obtener
                </Button>
                <input
                  id="inputAsegSolicitud"
                  className="w-full md:w-[70%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20 "
                  type="number"
                  disabled
                  {...register('numSolicitud')}
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="inputAsegMonto" className="mb-2 font-medium">
                Monto reclamado
              </label>
              <input
                id="inputAsegMonto"
                className="w-full md:w-[70%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
                type="number"
                {...register('montoReclamado')}
                disabled={showForm}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="inputAsegCantDoc" className="mb-2 font-medium">
                Cantidad documentos
              </label>
              <input
                id="inputAsegCantDoc"
                className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
                type="number"
                disabled={showForm}
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
          <div className="flex flex-col my-2">
            <label htmlFor="message" className="mb-2 font-medium ">
              Observación
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
              placeholder="Se adjunta documentación..."
              disabled={showForm}
            ></textarea>
          </div>

          <div className="my-2">
            <span className="block mb-2 font-medium ">Subir documentos</span>
            <input
              className="block w-full border rounded-sm border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 disabled:bg-gray-500/20"
              id="multiple_files"
              type="file"
              multiple
              disabled={showForm}
            />
          </div>
        </div>

        <div id="divSeleccion8" className="flex flex-row my-4">
          <Button
            disabled={showForm || isSubmitting}
            type="submit"
            className="w-full"
            variant={'outline'}
          >
            {isSubmitting ? 'Creando...' : 'Crear denuncia'}
          </Button>
        </div>
      </form>
    </LayoutPage>
  )
}
