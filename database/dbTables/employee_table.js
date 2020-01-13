import Database from '../connection.js';

const db = new Database();
class CreateEmpTable {
  static createTable() {
    return `CREATE TABLE IF NOT EXISTS employees (
      id serial PRIMARY KEY, 
      employeeName varchar(100), 
      nationalID varchar(100), 
      phoneNumber varchar(100),
      email varchar(100),
      dateOfBirth varchar(100),
      status varchar(100),
      position varchar(100),
      created_on timestamp);
      `;
  }

  static dropTable() {
    return 'DROP TABLE IF EXISTS employees;';
  }

  static async executeTables() {
    await db.query(CreateEmpTable.dropTable());
    await db.query(CreateEmpTable.createTable());
  }
}

export default CreateEmpTable.executeTables();