import mongoose, { Document, Schema } from "mongoose";

export interface UserDocument extends Document {
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {},
  }
);

const UserModel = mongoose.model<UserDocument>("User", userSchema);
export default UserModel;
