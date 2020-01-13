// import { Pool } from 'pg';
// import dotenv from 'dotenv';
const {Pool} = require('pg');
const dotenv = require('dotenv');

dotenv.config();
const connectionString = process.env.DB_URL;
const pool = new Pool({ connectionString });

pool.on('connect', () => {
  console.log('Connected on Database');
});

module.exports = {
  query(text, param) {
    try {
      return pool.query(text, param);
    } catch (err) {
      return err;
    }
  }
};
