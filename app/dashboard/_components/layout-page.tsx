import { Button } from '@/components/ui/button'

type LayoutPageProps = {
  children: React.ReactNode
  title: string
  onTourStart: () => void
}

/**
 * Layout principal de una página
 * @param title Titulo de página
 * @param onTourStart Función que inicia el tour
 * @returns
 */
export default function LayoutPage({
  children,
  title,
  onTourStart,
}: LayoutPageProps) {
  /**
   * Maneja el inicio del tour.
   */
  const handleTourStart = () => {
    onTourStart()
  }
  return (
    <div className="mx-auto my-6 max-w-[80%] text-sm text-muted-foreground">
      <div className="flex items-center justify-between my-2">
        <span className="text-3xl" id="labelTitle">
          {title}
        </span>
        <div className="flex items-center justify-end gap-2">
          <span className="hidden lg:block lg:hover:text-primary text-pretty">
            <i>
              {' '}
              Tienes dudas de como funciona? Haz clic para iniciar el tour{' '}
            </i>
          </span>

          <Button
            onClick={handleTourStart}
            className="hover:bg-green-500 hover:text-white duration-300 "
            variant={'outline'}
            size={'sm'}
          >
            Tour
          </Button>
        </div>
      </div>
      <hr />
      {children}
    </div>
  )
}
