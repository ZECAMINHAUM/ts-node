import { Request, Response } from 'express'

const homecontroller = {
  index (req: Request, res: Response): Response {
    return res.status(200).json({ Message: 'TUDO CERTO NA BAHIA' })
  }
}

export default homecontroller
