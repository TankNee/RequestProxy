import { NextFunction, Request, Response, Router } from "express";
import { request } from "../utils";

const router = Router();

router.all("/", async (req: Request, res: Response, next: NextFunction) => {
    const result = await request(req.method.toLowerCase(), req.query.url, req.body);
    res.status(result?.status || 200);
    res.send(result?.text).end();
});
export default router;
