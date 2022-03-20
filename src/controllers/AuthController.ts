import { Request, Response } from "express";

class AuthController {
	index(req: Request, res: Response): Response {
		return res.send("Index");
	}
	create(req: Request, res: Response): Response {
		return res.send("");
	}
}

export default new AuthController();