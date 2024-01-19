'use client'

import { driver } from 'driver.js'
import LayoutPage from '../../_components/layout-page'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ControlBuscarRut from '../(components)/control-buscar-rut'

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

  const handleDriver = () => {
    driverObj.drive()
  }

  return (
    <LayoutPage title="Pago convenio" onTourStart={handleDriver}>
      <ControlBuscarRut />

      <hr className="my-2" />
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col w-full">
          <label htmlFor="inputBenefNombre" className="block mb-2 font-medium">
            Nombre asegurado
          </label>
          <input
            id="inputBenefNombre"
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
            type="text"
            {...register('nombreBeneficiario')}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="inputBenefNombre" className="block mb-2 font-medium">
            Isapre
          </label>
          <input
            id="inputBenefNombre"
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
            type="text"
            {...register('nombreBeneficiario')}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="inputBenefNombre" className="block mb-2 font-medium">
            Poliza
          </label>
          <select
            id="selectTipoPago"
            className="p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
          >
            <option defaultChecked>Contratante</option>
            <option value="US">Asegurado</option>
            <option value="CA">Tercero</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="inputBenefNombre" className="block mb-2 font-medium">
            Contratante
          </label>
          <input
            id="inputBenefNombre"
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
            type="text"
            {...register('nombreBeneficiario')}
          />
        </div>
      </div>

      <hr className="my-2" />

      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col w-full">
          <label htmlFor="inputBenefNombre" className="block mb-2 font-medium">
            Poliza
          </label>
          <select
            id="selectTipoPago"
            className="p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
          >
            <option defaultChecked>Contratante</option>
            <option value="US">Asegurado</option>
            <option value="CA">Tercero</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="inputBenefNombre" className="block mb-2 font-medium">
            Poliza
          </label>
          <select
            id="selectTipoPago"
            className="p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
          >
            <option defaultChecked>Contratante</option>
            <option value="US">Asegurado</option>
            <option value="CA">Tercero</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="inputBenefNombre" className="block mb-2 font-medium">
            Poliza
          </label>
          <select
            id="selectTipoPago"
            className="p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
          >
            <option defaultChecked>Contratante</option>
            <option value="US">Asegurado</option>
            <option value="CA">Tercero</option>
          </select>
        </div>
      </div>
    </LayoutPage>
  )
}
