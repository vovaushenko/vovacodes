import mongoose, { Schema } from 'mongoose';

export interface IComment extends Document {
  comment: string;
  author: string;
  isApproved: boolean;
}

const CommentSchema: Schema<IComment> = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, 'Please leave comment'],
      maxLength: 50,
    },
    author: {
      type: String,
      required: [true, 'Please add author name'],
      maxLength: 30,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Comment ||
  mongoose.model('Comment', CommentSchema);
