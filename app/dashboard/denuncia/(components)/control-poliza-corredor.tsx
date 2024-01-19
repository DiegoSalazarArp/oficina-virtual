import { Button } from '@/components/ui/button'
import { useState } from 'react'

const tipoSelector = [
  {
    id: 'checkCorredor',
    label: 'Corredor',
  },
  {
    id: 'checkPool',
    label: 'Pool',
  },
  {
    id: 'checkAsegurado',
    label: 'Asegurado',
  },
  {
    id: 'checkAdministracion',
    label: 'Administracion',
  },
]

type ControlPolizaCorredorProps = {
  onToggleForm: () => void
}

export default function ControlPolizaCorredor({
  onToggleForm,
}: ControlPolizaCorredorProps) {
  const [selectedCheck, setSelectedCheck] = useState<string | null>(null)

  const handleCheckboxChange = (tipoId: string) => {
    setSelectedCheck(tipoId)
  }

  const handleSearch = () => {
    onToggleForm()
  }

  return (
    <div
      id="divSeleccion1"
      className="w-full my-2 bg-gray-50 border border-input rounded-sm shadow-md  dark:bg-background "
    >
      <div className="flex md:flex-row flex-wrap justify-between m-2">
        {tipoSelector.map((tipo) => (
          <div key={tipo.id} className="flex gap-2 hover:text-primary">
            <input
              id={tipo.id}
              type="checkbox"
              checked={selectedCheck === tipo.id}
              onChange={() => handleCheckboxChange(tipo.id)}
            />{' '}
            <label htmlFor={tipo.id} className="font-medium">
              {tipo.label}
            </label>
          </div>
        ))}
      </div>

      {selectedCheck && (
        <>
          <hr className="m-2" />

          <div className="flex justify-between m-2 ">
            <div className="flex items-center gap-2 w-full">
              <span className="font-medium">Corredor</span>
              <select className="w-[50%] shadow-sm  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultChecked>Contratante</option>
                <option value="US">Asegurado</option>
                <option value="CA">Tercero</option>
              </select>
            </div>
            <div className="flex items-center gap-2 w-full">
              <span className="font-medium">Poliza</span>
              <select className="w-[50%] shadow-sm p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultChecked>2817</option>
                <option value="US">9841</option>
                <option value="CA">8371</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <Button variant={'outline'} onClick={handleSearch}>
                Buscar
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
