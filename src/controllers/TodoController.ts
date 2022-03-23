import { Request, Response } from "express";
import IController from "./ControllerInterface";

class TodoController implements IController {
  index(req: Request, res: Response): Response {
    return res.send("oke");
  }
  create(req: Request, res: Response): Response {
    return res.send("oke");
  }
  show(req: Request, res: Response): Response {
    return res.send("oke");
  }
  update(req: Request, res: Response): Response {
    return res.send("oke");
  }
  delete(req: Request, res: Response): Response {
    return res.send("oke");
  }
}

export default new TodoController();
