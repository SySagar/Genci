import express, { urlencoded } from "express";
import cors from "cors";
import DBConnect from "@config/db";
import authRoutes from "@auth/index";
import validateRoutes from "@user/index";
import playgroundsRoutes from "@playgrounds/index";
import welcomeRoutes from "@welcome/index";
import apiRateLimiter from "@config/rateLimit";

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(urlencoded({
	extended: true
}))

 const whitelist = ['http://localhost:3000',
"https://genci-three.vercel.app"];
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

app.use("/auth", authRoutes);
app.use("/user", validateRoutes);
app.use("/playgrounds", apiRateLimiter, playgroundsRoutes);
app.use("/welcome", welcomeRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running at port 5000");
});
