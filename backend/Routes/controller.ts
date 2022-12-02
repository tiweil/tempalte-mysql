// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import some1_logic from '../Logic/some1_logic';
import Urls from '../Utils/urls';

// generic router 
const router = express.Router();

// gets all
router.get("/", async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json( await some1_logic.getAllProblems())
})

router.get("/:id", async (request: Request, response: Response, next: NextFunction) => {
  const someData = +request.params.id;
  response.status(200).json( await some1_logic.getSingleProblem(someData))
})

// sends information to DB
router.post("/", async (request: Request, response: Response, next: NextFunction) => {
  const someData = request.body;
  response.status(201).json( await some1_logic.addProblem(someData))
})

// delete information from DB
router.delete("/:id", async (request: Request, response: Response, next: NextFunction) => {
  const someData = +request.params.id;
  response.status(204).json( await some1_logic.deleteProblem(someData))
})

// update information in DB
router.put("/", async (request: Request, response: Response, next: NextFunction) => {
  const body = request.body;
  response.status(201).json( await some1_logic.updateStudent(body));
})





export default router;