// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import DataUsers from '../../interfaces/DataUsers'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataUsers[] | { success: boolean }>
) {
  if (req.method === 'GET') {
    // res.status(200).json(DB.users)
    fetch('http://localhost:8000/users')
      .then(response => response.json())
      .then((response: DataUsers[]) => res.status(200).send(response))
  } else if (req.method === 'POST') {
    // DB.users.unshift(req.body as DataUsers)
    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body as DataUsers)
    }).then(() => res.status(200).send({ success: true }))
  }
}
