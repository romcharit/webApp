import express from "express";
const router = express.Router();
import UserController from "../controllers/userController";
//import { authMiddleware } from "../controllers/authController";

router.get("/", UserController.get.bind(UserController));
router.get("/:id", UserController.get.bind(UserController));

//post
router.post("/", UserController.post.bind(UserController));

//put
router.put("/", UserController.put.bind(UserController));

//delete
router.delete("/", UserController.delete.bind(UserController));

export default router;