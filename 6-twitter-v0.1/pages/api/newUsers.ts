import { jwtVerify } from 'jose'
import { NextApiRequest, NextApiResponse } from 'next'

import { DataUsers } from './users'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataUsers[]>
) {
  const responseUsers = await fetch('http://localhost:8000/users')
  const dataUsers = (await responseUsers.json()) as DataUsers[]

  const key = new TextEncoder().encode('chavezinha')
  const result = await jwtVerify(req.cookies.token as string, key)

  const filteredUsers = dataUsers.filter(user => user.id !== result.payload.id)

  return res.send(
    filteredUsers.slice(filteredUsers.length - 3, filteredUsers.length)
  )
}
