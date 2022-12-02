// All logical operations of the backend folder will displayed here.
// importations 
import dal from "../Utils/dal_mysql"
import { SomeModel } from "../Models/someModel"
import { OkPacket } from "mysql";


// functions( async / await ) for getting data from DB
const getFunction = async (): Promise<SomeModel> => {
    // command line for the DB
    const sql = `
        SELECT * FROM SOMETHING
    `;
    // a promise function that connects us to the database with the command line
    const something = await dal.execute(sql);
    return something;
}

const postFunction = async (something: SomeModel): Promise<SomeModel> => {
    // command line for the DB
    const sql = `
    INSERT INTO something VALUES
    (DEFAULT,
    '${something.firstName}')
    `
    const response : OkPacket = await dal.execute(sql);
    something.id = response.insertId;
    return something;

} 

const deleteFunction = async (id: number): Promise<void> => {
    const sql = `
    DELETE FROM something WHERE id=${id}`
    const response = await dal.execute(sql);
    
}

const updateFunction = async (something: SomeModel): Promise<SomeModel> => {
    const sql = `
    UPDATE something 
    SET firstName = '${something.firstName}'
    WHERE id = ${something.id}
    `;
    const response : OkPacket = await dal.execute(sql);
    return something;
}

// exporting 
export default {
    getFunction,
    postFunction,
    deleteFunction,
    updateFunction
}