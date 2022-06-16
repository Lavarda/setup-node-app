import { Request, Response } from 'express';
import User from '@models/User';

export default class UserController {
  show(req: Request, res: Response) {
    const user = new User();
    return res.json(user.name);
  }
}
