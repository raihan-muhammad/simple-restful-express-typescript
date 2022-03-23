import { Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
export const auth = (req: Request, res: Response, next: NextFunction): any => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  let secretKey = process.env.JWT_SECRET_KEY || "kepokepo";
  const token: string = req.headers.authorization.split(" ")[1];

  try {
    const credentials: string | object = jwt.verify(token, secretKey);
    if (credentials) {
      req.app.locals.credentials = credentials;
      next();
    }

    return res.json({ message: "Authentication failed!" });
  } catch (err) {
    return res.json({ message: err });
  }
};