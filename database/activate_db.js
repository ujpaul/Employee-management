import { CreateEmployeesTable, CreateManagersTable } from './dbTables';

const DBInit = async () => {
  await CreateEmployeesTable.run();
  await CreateManagersTable.run();

  console.log('Tables were created successfully');
  console.log('---------------------------------');
}

module.exports = DBInit;
require('make-runnable');