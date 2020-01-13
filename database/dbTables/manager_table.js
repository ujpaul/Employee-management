import Database from '../connection.js';

const db = new Database();
class CreateManagersTable {
  static createTable() {
    return `CREATE TABLE IF NOT EXISTS managers (
      id serial PRIMARY KEY, 
      employeeName varchar(100), 
      nationalID varchar(100), 
      phoneNumber varchar(100),
      email varchar(100),
      dateOfBirth varchar(100),
      status varchar(100),
      position varchar(100),
      password varchar(100),
      created_on timestamp);
      `;
  }

  static dropTable() {
    return 'DROP TABLE IF EXISTS managers;';
  }

  static async executeTables() {
    await db.query(CreateManagersTable.dropTable());
    await db.query(CreateManagersTable.createTable());
  }
}

export default CreateManagersTable.executeTables();