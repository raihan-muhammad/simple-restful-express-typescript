import { Request, Response } from 'express';
import IController from './ControllerInterface';

let data: any[] = [
  {
    id: 1,
    name: "Adi",
  },
  {
    id: 2,
    name: "Adi B",
  },
  {
    id: 3,
    name: "Adi C",
  },
  {
    id: 4,
    name: "Adi D",
  },
];

class UserController implements IController {
	index(req: Request, res: Response):Response {
		return res.send(data);
	}
	create(req: Request, res: Response):Response {
		const { id, name } = req.body;
		data.push({
			id,
			name,
		})
		return res.send('Created users successfully!')
	}
	show(req: Request, res: Response):Response {
		const { id } = req.params;
		let person = data.find(data => data.id == id);
		return res.send(person);
	}
	update(req: Request, res: Response):Response {
		const { id } = req.params;
		const { name } = req.body;

		let person = data.find(data => data.id == id);
		person.name = name;

		return res.send("update successfully!")
	}
	delete(req: Request, res: Response):Response {
		const { id } = req.params;

		let person = data.filter(data => data.id != id);

		return res.send(person)
	}

}

export default new UserController();