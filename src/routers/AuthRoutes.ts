
import BaseRoutes from "./BaseRouter";

import AuthController from "./../controllers/AuthController";
class AuthRoutes extends BaseRoutes {

	public routes(): void{
		this.router.post("/register", AuthController.create);
		this.router.post("/login", AuthController.index);
	}
}

export default new AuthRoutes().router;