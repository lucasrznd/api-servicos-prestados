import { Router } from "express";
import profileRouter from "./profileRouter";
import jobRouter from "./jobRouter";
import depositRouter from "./depositRouter";

const router = Router();

router.use(profileRouter);
router.use(jobRouter);
router.use(depositRouter);

export default router;