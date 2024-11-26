import { Router } from "express";
import profileRouter from "./profileRouter";
import jobRouter from "./jobRouter";
import depositRouter from "./depositRouter";
import contractRouter from "./contractRouter";
import paymentRouter from "./paymentRouter";

const router = Router();

router.use(profileRouter);
router.use(jobRouter);
router.use(depositRouter);
router.use(contractRouter);
router.use(paymentRouter);

export default router;