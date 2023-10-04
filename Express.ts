import express, { Application, Response, Request } from "express";

const port: number = 4000;

const app: Application = express();

app.use(express.json());

const db = [
	{
		id: 1,
		name: "Ekene",
	},
	{
		id: 2,
		name: "Ahmed",
	},
	{
		id: 3,
		name: "Zion",
	},
	{
		id: 4,
		name: "Ayo",
	},
	{
		id: 5,
		name: "Wisdom",
	},
];

app.get("/", (req: Request, res: Response) => {
	res.send("Hey how are u doing");
});

app.get("/getit", (req: Request, res: Response) => {
	res.send(db);
});

app.post("/add", (req: Request, res: Response) => {
	let newUser = req.body;
	db.push(newUser);
	res.json(db);
});

app.listen(port, () => {
	console.log("");
	console.log(`${port} iS RUNNING`);
});
