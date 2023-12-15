import express from "express";
import {
  createFlight,
  flightlist,
  fligthSearch,
  getBooking,
  userBooking,
} from "../Controller/Flight.Controller.js";
import {
  getUserById,
  loginUser,
  registerUser,
  resetPassword,
  resetPasswordpage,
} from "../Controller/User.Controller.js";
import { authMiddleware } from "../Middleware/auth.middleware.js";

const router = express.Router();

router.post("/setflight", createFlight);
router.post("/fligthSearch", fligthSearch);
router.get("/getflight", flightlist);
router.post("/userBooking", userBooking);
router.post("/getBooking", getBooking);

// log-reg routers

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/getuser", authMiddleware, getUserById);
router.post("/resetpassword", resetPassword);
router.post("/resetpasswordpage", resetPasswordpage);

export default router;
