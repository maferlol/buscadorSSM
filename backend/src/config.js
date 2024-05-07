import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;

//DB
export const MYSQLDATABASE        =     process.env.MYSQLDATABASE
export const MYSQLHOST            =     process.env.MYSQLHOST
export const MYSQLPORT            =     process.env.MYSQLPORT
export const MYSQLUSER            =     process.env.MYSQLUSER
export const MYSQL_ROOT_PASSWORD  =     process.env.MYSQL_ROOT_PASSWORD


