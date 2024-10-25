'use client'

import { signIn } from "next-auth/react"
import { useState } from "react"

interface SignInButtonProps {
  idSesion: string
  token: string
  nombrePerfil: string
}

export default function SignInButton({
  idSesion,
  token,
  nombrePerfil
}: SignInButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async () => {
    try {
      setIsLoading(true)
      const result = await signIn('credentials', {
        idSesion,
        token,
        redirect: false,
        callbackUrl: '/dashboard'  // URL a la que redirigir después del login
      })

      if (result?.error) {
        console.error('Error en el inicio de sesión:', result.error)
      } else if (result?.url) {
        window.location.href = result.url
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleSignIn}
      disabled={isLoading}
      className="flex items-center justify-center p-2 m-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
    >
      {isLoading ? 'Cargando...' : nombrePerfil}
    </button>
  )
}