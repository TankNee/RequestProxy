import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes";

// Create Express Server
const app = express();

// Configure Express
app.set("port", 3325);
app.use(
	cors({
		methods: ["GET", "POST", "OPTIONS", "DELETE", "PUT"],
		allowedHeaders: [
			"Content-Type",
			"application/json;charset=utf-8;application/x-www-form-urlencoded",
		],
	})
);
// Compress request as well as response
app.use(compression());
// Parse request as json
app.use(bodyParser.json());
// Return middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
app.use(bodyParser.urlencoded({ extended: true }));
// Express 框架
app.use("/", router);
// app.use(`/${API_VERSION}/douban`, controllers.doubanRouter);

export default app;
