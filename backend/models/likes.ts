import mongoose, { Date as MongooseDate, Schema } from 'mongoose';

export interface ILike extends Document {
  createdAt: MongooseDate;
}

const LikesSchema: Schema<ILike> = new mongoose.Schema(
  {},
  { timestamps: true }
);

export default mongoose.models.Like || mongoose.model('Like', LikesSchema);
