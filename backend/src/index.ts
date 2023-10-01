import express, { urlencoded } from "express";
import cors from "cors";
import DBConnect from "@config/db";
import authRoutes from "@auth/index";
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(urlencoded({
	extended: true
}))

 const whitelist = ['http://localhost:3000'];
app.use(cors({
  credentials: true,
	origin: function(origin, callback) {
		// console.log('origin', origin)
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	}
}))

DBConnect();


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running at port 5000");
});
