import { NextApiRequest, NextApiResponse } from 'next';

import DataUsers from '../../interfaces/DataUsers';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{sucess: boolean} | DataUsers[]>
  ) {
    if(req.method === 'GET'){
      const response = await fetch('http://localhost:8000/posts')
      const data = await response.json() as DataUsers[]

      return res.status(200).send(data)
    }
    if(req.method === 'POST'){
      try{
        await fetch('http://localhost:8000/posts', {
          method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(req.body)
        })
        return res.status(201).send({sucess: true})
      } catch{
        return res.status(400).send({sucess: false})
      }
    }

    return res.status(405).send({sucess: false})
  }