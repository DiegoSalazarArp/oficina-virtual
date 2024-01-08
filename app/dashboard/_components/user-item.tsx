'use client'

import { ChevronsLeftRight } from 'lucide-react'
import { forwardRef, Ref } from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { ModeToggle } from '@/components/mode-toggle'

export const UserItem = () => {
  const router = useRouter()

  const logout = () => {
    router.push('/')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center text-sm p-3 w-full hover:bg-primary/5"
        >
          <div className="gap-x-2 flex items-center max-w-[150px]">
            <Avatar className="h-5 w-5">
              <AvatarImage src="https://media.licdn.com/dms/image/C4D03AQEgIEEk0PB4lA/profile-displayphoto-shrink_200_200/0/1617586561059?e=2147483647&v=beta&t=usRVFiGtfHtAkJ3XED99rBu77TA-EslLYhPex3iYEVs" />
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              {'Diego Salazar Arp'}&apos;s Notion
            </span>
          </div>
          <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col space-y-4 p-1 ">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium leading-none text-muted-foreground">
              {'Perfil - Sura Compañia'}
            </p>
            <div>
              <ModeToggle />
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-secondary p-1">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://media.licdn.com/dms/image/C4D03AQEgIEEk0PB4lA/profile-displayphoto-shrink_200_200/0/1617586561059?e=2147483647&v=beta&t=usRVFiGtfHtAkJ3XED99rBu77TA-EslLYhPex3iYEVs" />
              </Avatar>
            </div>
            <div className="space-y-1">
              <p className="text-sm line-clamp-1">{'Diego Salazar Arp'}</p>
              <p className="text-xs antialiased">Analista Programador</p>
              <p className="text-xs antialiased">diego.salazar@grupomok.com</p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />

        <Button
          onClick={logout}
          className="mx-auto w-full hover:bg-red-900 hover:text-white"
          variant={'outline'}
        >
          Cerrar Sesion
        </Button>
        <DropdownMenuItem
          asChild
          className="w-full cursor-pointer text-muted-foreground"
        ></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserItem
