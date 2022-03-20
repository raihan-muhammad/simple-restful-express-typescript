
import BaseRoutes from "./BaseRouter";
import validate from "./../middlewares/AuthValidator";

import AuthController from "./../controllers/AuthController";
class AuthRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("/register", validate, AuthController.register);
    this.router.post("/login", AuthController.login);
  }
}

export default new AuthRoutes().router;