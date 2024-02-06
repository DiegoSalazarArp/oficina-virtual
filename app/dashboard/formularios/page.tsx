'use client'

import { driver } from 'driver.js'
import LayoutPage from '../_components/layout-page'

export default function Page() {
  const handleDriver = () => {
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
            description:
              'Debe seleccionar el perfil de como lo va a denunciar.',
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
    driverObj.drive()
  }
  return (
    <LayoutPage title="Formularios" onTourStart={handleDriver}>
      <div className="w-full flex items-center justify-center my-2 mx-auto">
        <div className="grid grid-cols-3 place-content-center">
          <div className="flex items-center justify-center">1</div>
          <div className="flex items-center justify-center">2</div>
          <div className="flex items-center justify-center">3</div>
        </div>
      </div>
    </LayoutPage>
  )
}
