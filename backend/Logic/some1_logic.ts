// All logical operations of the backend folder will displayed here.
// importations 
import dal from "../Utils/dal_mysql" 
import { OkPacket } from "mysql";
import Problem from "../Models/Something1";
import Something1 from "../Models/Something1";


// functions( async / await ) for getting data from DB
const getAllProblems = async (): Promise<Something1[]> => {
    // command line for the DB
    const sql = `
        SELECT something1.* ,something2.name AS something1
        FROM something1 JOIN something2
        ON something1.part = something2.id;
        
    `;
    // a promise function that connects us to the database with the command line
    const something = await dal.execute(sql);
    return something;
}

const getSingleProblem = async (id:number): Promise<Something1> => {
    // command line for the DB
    const sql = `
        SELECT something1.* ,something2.name AS something1
        FROM something1 JOIN something2
        ON something1.part = something2.id;
        WHERE problem.id=${id};
    `;
    // a promise function that connects us to the database with the command line
    const something = await dal.execute(sql);
    return something;
}

const addProblem = async (newProblem: Something1): Promise<Something1> => {
    // command line for the DB
    const sql = `
    INSERT INTO something1 VALUES 
    (DEFAULT, 
    '${newProblem.name}',
    '${newProblem.address}',
    '${newProblem.tel}',
    ${newProblem.part},
    '${newProblem.description}');`;
    const response : OkPacket = await dal.execute(sql);
    newProblem.id = response.insertId;
    return newProblem;

} 

const deleteProblem = async (id: number): Promise<void> => {
    const sql = `
    DELETE FROM something1 WHERE id=${id}`
    const response = await dal.execute(sql);
    
}

const updateProblem = async (something1: Something1): Promise<Something1> => {
    const sql = `
    UPDATE students 
    SET id=${something1.id},
    name=${something1.name}......
    `;
    await dal.execute(sql);
    return something1;
}

export default {
    getAllProblems,
    getSingleProblem,
    addProblem,
    deleteProblem,
    updateProblem

}