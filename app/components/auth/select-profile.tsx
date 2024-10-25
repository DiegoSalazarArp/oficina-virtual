import { getSessionsMok } from "@/app/action/auth"
import { signIn } from "@/auth"

export default async function SelectProfile({ searchParams }: { searchParams: { idSession: string } }) {
  const sessions = await getSessionsMok(searchParams.idSession)
  console.log(sessions)
  return (
    <form action={async (formData) => {
      'use server'
      await signIn("credentials", formData)
    }}>
      <div className="flex flex-col items-center justify-center h-screen">
        {
          sessions.data.map((perfil: any) => (
            <button key={perfil.iIdSesiond} className="flex items-center justify-center">
              {perfil.NombrePerfil}
            </button>
          ))
        }
      </div>
    </form>

  )
}

// Se debe revisar el boton para hacer el sign in, se le puede pasar las variables?
