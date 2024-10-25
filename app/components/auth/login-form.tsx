'use client'

import { authenticateUser } from '@/app/action/auth'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useFormState } from 'react-dom'

export default function AuthForm() {
  //generate a variable with useFormState
  const [state, action] = useFormState(authenticateUser, null)

  return (
    <section className="bg-secondary dark:bg-[#252525] ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <div className="p-2">
            <Image
              width={70}
              height={70}
              alt="logo"
              src="/logo-mok.svg"
              className="object-contain dark:hidden"
              style={{ width: '70px', height: '70px' }}
            />
            <Image
              width={70}
              height={70}
              alt="logo"
              src="/logo-mok-dark.svg"
              className="object-contain hidden dark:block"
              style={{ width: '70px', height: '70px' }}
            />
          </div>
          <strong>MPRO</strong>Liquidadores
        </a>
        <div className="w-full dark:shadow-lg  bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#1F1F1F] dark:border-gray-600">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Bienvenido a Oficina Virtual
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action={action}
              autoComplete="off"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Usuario
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  name="username"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#1F1F1F] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Contraseña
                </label>
                <input
                  autoComplete="off"
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#1F1F1F] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Olvidaste tu contraseña?
                </a>
              </div>

              <Button
                type="submit"
                className="mx-auto w-full mt-4"
                variant={'outline'}
              >
                Ingresar
              </Button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
