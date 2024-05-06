import Comment, { IComment } from "../models/commentModel";
import BaseController from "./baseController";
import { Response } from "express";
import { AuthRequest } from "./authController";

class CommentController extends BaseController<IComment>{
    constructor() {
        super(Comment);
    }

    async post(req: AuthRequest, res: Response) {
        const _id = req.user._id;
        req.body.owner = _id;
        super.post(req, res);
    }
}

export default new CommentController();