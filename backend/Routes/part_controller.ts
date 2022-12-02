// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import parts_logic from '../Logic/some2_logic';
import Urls from '../Utils/urls';

// generic router 
const router_parts = express.Router();

// gets all
router_parts.get("/", async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json( await parts_logic.getAllParts())
})

router_parts.get("/:id", async (request: Request, response: Response, next: NextFunction) => {
  const someData = +request.params.id;
  response.status(200).json( await parts_logic.getSinglePart(someData))
})

// sends information to DB
router_parts.post("/", async (request: Request, response: Response, next: NextFunction) => {
  const someData = request.body;
  response.status(201).json( await parts_logic.addPart(someData))
})

// delete information from DB
router_parts.delete("/:id", async (request: Request, response: Response, next: NextFunction) => {
  const someData = +request.params.id;
  response.status(204).json( await parts_logic.deletePart(someData))
})





export default router_parts;