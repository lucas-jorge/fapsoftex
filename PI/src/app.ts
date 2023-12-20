const app = express();
const port = 3000;

let model = new Student("João", 5);
let view = new StudentView();
let controller = new StudentController(model, view);

app.get('/', (req: Request, res: Response) => {
    res.send(controller.updateView());
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});