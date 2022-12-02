import dal_mysql from "../Utils/dal_mysql";

const problem_sql=`CREATE TABLE IF NOT EXISTS problem (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
    address VARCHAR(45) NULL,
    tel VARCHAR(45) NULL,
    part INT NULL,
    description VARCHAR(250) NULL,
    PRIMARY KEY (id));`;
const parts_sql=`CREATE TABLE IF NOT EXISTS parts (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
    PRIMARY KEY (id));`;

const sql_init=()=>{
    dal_mysql.execute(problem_sql);
    dal_mysql.execute(parts_sql);
}

export default sql_init;