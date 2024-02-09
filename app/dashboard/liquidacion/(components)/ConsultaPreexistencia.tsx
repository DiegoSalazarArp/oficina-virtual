import { Button } from "@/components/ui/button";

export default function ConsultaPreexistencia() {
  return (
    <>
      <div className="text-xl my-2">
        <span> Consulta Preexistencia y Recetas</span>
      </div>
      <div className="flex my-2 flex-col md:flex-row md:justify-between md:items-center gap-2">
        <div className="flex flex-col">
          <span className="mb-2">Póliza</span>
          <div className="flex flex-row gap-2">
            <input
              className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
              type="text"

            />
            <Button variant={"outline"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            </Button>
          </div>


        </div>

        <div className="flex flex-col w-full">
          <span className="mb-2">Razón Social Compañía</span>
          <input
            className="w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-500/20"
            type="text"

          />

        </div>
      </div>
    </>
  )
}