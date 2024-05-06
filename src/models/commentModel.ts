import mongoose from "mongoose";

export interface IComment {
  //Fields: ID, content, date posted, user ID (foreign key), 
  //cocktail ID (foreign key)
  _id: string;
  message: string;
  owner: string;
}

const CommentSchema = new mongoose.Schema<IComment>({
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