// All logical operations of the backend folder will displayed here.
// importations 
import dal from "../Utils/dal_mysql" 
import { OkPacket } from "mysql";
import Parts from "../Models/Parts";


// functions( async / await ) for getting data from DB
const getAllParts = async (): Promise<Parts[]> => {
    // command line for the DB
    const sql = `
        SELECT * FROM parts;
        
    `;
    // a promise function that connects us to the database with the command line
    const something = await dal.execute(sql);
    return something;
}

const getSinglePart = async (id:number): Promise<Parts> => {
    // command line for the DB
    const sql = `
        SELECT * FROM parts
        WHERE id=${id};
    `;
    // a promise function that connects us to the database with the command line
    const something = await dal.execute(sql);
    return something;
}

const addPart = async (newPart: Parts): Promise<Parts> => {
    // command line for the DB
    const sql = `
    INSERT INTO parts VALUES 
    (DEFAULT, 
    '${newPart.name}',);`;
    const response : OkPacket = await dal.execute(sql);
    newPart.id = response.insertId;
    return newPart;

} 

const deletePart = async (id: number): Promise<void> => {
    const sql = `
    DELETE FROM parts WHERE id=${id}`
    const response = await dal.execute(sql);
    
}

export default {
    getAllParts,
    getSinglePart,
    addPart,
    deletePart 

}