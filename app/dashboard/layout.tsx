import Navegacion from './_components/navegacion'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Navegacion />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>{' '}
    </div>
  )
}
