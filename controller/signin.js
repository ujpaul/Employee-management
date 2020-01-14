import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Database from '../database/connection';

const db = new Database();
dotenv.config();

const Signin = async (req, res) => {
  try {
    const managerEmail = req.body.email;
    const managerPassword = req.body.password;
    const { rows } = await db.query('SELECT * FROM managers WHERE email = $1', [managerEmail]);
    if (!rows[0]) {
      return res.status(401).json({
        status: 401,
        error: 'Wrong credentials',

      });
    }
    const verifypassword = await bcrypt.compare(managerPassword.trim(), rows[0].password);
    if (!verifypassword) {
      return res.status(401).json({
        status: 401,
        error: 'Wrong credentials',

      });
    }

    const Payload = {
        nationalId: rows[0].nationalId,
      phoneNumber: rows[0].phoneNumber,
    };

    const token = await jwt.sign(Payload, process.env.JWT_KEY, { expiresIn: '1d' });

    return res.status(200).json({
      status: 200,
      message: 'Login successfully',
      data: {
        token,
      },
    });
  } catch (err) {
    console.log(err);
  }
  return {};
};

export default Signin;