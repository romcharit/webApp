import mongoose from "mongoose";

export interface IComment {
  _id: string;
  title: string;
  message: string;
  owner: string;
}

const CommentSchema = new mongoose.Schema<IComment>({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IComment>("Comment", CommentSchema);