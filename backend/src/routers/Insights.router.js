import express from 'express';
import { getInsights } from '../controller/Insights.controller.js';

const router = express.Router();

router.get("/get/insights",getInsights)

export default router;