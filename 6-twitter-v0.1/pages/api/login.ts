import { SignJWT } from 'jose'
import { NextApiRequest, NextApiResponse } from 'next'

import { DataUsers } from './users'

export const secret = new TextEncoder().encode('chavezinha')

async function createToken(data: DataUsers) {
  // eslint-disable-next-line sonarjs/prefer-immediate-return
  const token = await new SignJWT(data)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(secret)

  return token
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: DataUsers | string | null; token?: string }>
) {
  if (req.method === 'POST') {
    const body = req.body as { login: string; password: string }
    const result = await fetch('http://localhost:8000/users')
    const data = (await result.json()) as DataUsers[]
    const [user] = data.filter(
      userData =>
        userData.email === body.login && userData.password === body.password
    )

    if (user === undefined) {
      res.status(401).send({ message: 'Email e/ou senha incorretos' })
    } else {
      res
        .status(200)
        .send({ message: 'Usuário encontrado', token: await createToken(user) })
    }
  }
}
