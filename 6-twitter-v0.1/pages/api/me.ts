import { jwtVerify, JWTVerifyResult } from 'jose'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JWTVerifyResult>
) {
  const key = new TextEncoder().encode('chavezinha')

  const result = await jwtVerify(req.cookies.token as string, key)
  return res.send(result)
}
