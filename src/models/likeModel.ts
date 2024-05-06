import mongoose from "mongoose";

export interface ILike {
    //Fields: ID, user ID (foreign key), cocktail ID (foreign key), date liked
  _id: string;
  owner: string;
}

const LikeSchema = new mongoose.Schema<ILike>({
  owner: {
    type: String,
    required: true,
  },
});

export default mongoose.model<ILike>("Like", LikeSchema);