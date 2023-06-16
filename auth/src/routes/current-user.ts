import express from "express";
import { currentUsert } from "../middlewares/current-user";
import { requireAuth } from "../middlewares/require-auth";

const router = express.Router();

router.get("/api/users/currentuser", currentUsert, requireAuth, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
