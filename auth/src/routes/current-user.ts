import express from "express";

import { currentUsert } from "../middlewares/current-user";

const router = express.Router();

router.get("/api/users/currentuser", currentUsert, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
