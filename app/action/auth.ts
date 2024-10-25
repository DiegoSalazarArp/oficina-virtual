'use server'

import { redirect } from "next/navigation"

export async function getLoginMok(body: any) {
  return await fetch('https://apisesiones.grupomok.com/api/getLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
}

export async function getSessionsMok(id: string) {
  return await fetch(`https://apisesiones.grupomok.com/api/getSesiones?tkn=${id}`)
    .then(res => res.json())
}

// This function is called when the user submits the form and set the session
export async function authenticateUser(prevState: any, formData: FormData) {
  // get the usr and password from the form data
  const usr = formData.get('username') as string
  const pwd = formData.get('password') as string

  // create a new object to the body api
  const body = {
    usr,
    pwd,
    sitiocod: process.env.SITIOCOD
  }
  const res = await getLoginMok(body)

  if (res.codigo === 0) {
    const queryParams = new URLSearchParams(res.data).toString();
    redirect(`/select-profile?idSession=${encodeURIComponent(queryParams)}`);
  }

}

export const generateJWT = async (idSesion: any, token: string) => {
  return await fetch('https://apisesiones.grupomok.com/api/generateJWT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      idSesion,
      tkn: token
    })
  }).then(res => res.json())
}


