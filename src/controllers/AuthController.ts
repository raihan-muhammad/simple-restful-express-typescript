import { Request, Response } from "express";
import Authentication from "../utils/Authentication";
const db = require("./../db/models");

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;
    const hashedPassword: string = await Authentication.passwordHash(password);

    await db.user.create({
      username,
      password: hashedPassword,
    });

    return res.status(201).json({ message: "Register successfully!" });
  };
  async login(req: Request, res: Response): Promise<Response> {
    let { username, password } = req.body;

    const user = await db.user.findOne({ where: { username } });

    if (!user) return res.send("User not found");

    // Check Password

    let compare = await Authentication.comparePassword(password, user.password);

    // Generate Token
    if (compare) {
      let token = Authentication.generateToken(
        user.id,
        username,
        user.password
      );
      return res.json({ message: "login successfully!", token });
    }

    return res.json({ message: "Login failed" });
  }

  profile(req: Request, res: Response): Response {
    return res.json({ data: req.app.locals.credentials });
  }
}

export default new AuthController();