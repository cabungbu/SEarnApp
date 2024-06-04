import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 5,
      max: 70,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    avaURL: {
      type: String,
      default: "",
    },
    backgroundImageUrl: {
      type: String,
      default: "",
    },
    likedSongs: [
      {
        type: String,
      },
    ],
    recentListeningSong: {
      artistName: { type: String, default: "" },
      imageURL: { type: String, default: "" },
      songId: { type: String, default: "" },
      songName: { type: String, default: "" },
    },
    notificationCount: {
      type: Number,
    },
    likedArtists: [{ type: String }],
    likedAlbums: [{ albumId: String, timestamp: Date }],
    userCoin: {
      type: Number,
      default: 0,
    },
    userAddressEthereum: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
