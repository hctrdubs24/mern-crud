import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "gedz16id0y9f.us-east-1.psdb.cloud",
  user: "ea5746gyf7tj",
  port: 3306,
  password: "pscale_pw_aYOpzyTcm0lt--9Wbfcw4YJfj-xnkGw4rBFFYC-zOo4",
  database: "mern-crud",
  ssl: {
    rejectUnauthorized: false,
  },
});

/**
 * 

host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "tasksdb",
 */
