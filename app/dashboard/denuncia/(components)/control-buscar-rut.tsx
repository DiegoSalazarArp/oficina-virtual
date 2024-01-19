import { Button } from '@/components/ui/button'

export default function ControlBuscarRut() {
  return (
    <div
      id="divSeleccion1"
      className="w-full my-2 bg-gray-50 border border-input rounded-sm shadow-md dark:bg-background "
    >
      <div
        id="divSeleccion2"
        className="flex m-2 justify-between items-center text-sm "
      >
        <div className="flex items-center gap-2 justify-between">
          <span className=" font-medium">Rut asegurado</span>

          <input
            className="p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
            type="text"
          />
        </div>
        <div>
          <Button type="submit" className="w-full " variant={'outline'}>
            Buscar
          </Button>
        </div>
      </div>
    </div>
  )
}
