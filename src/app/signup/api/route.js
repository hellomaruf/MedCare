import { connectDB } from "@/app/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exist = await userCollection.findOne({ email: newUser?.email });
    if (exist) {
      return Response.json({ message: "user exist" }, { status: 400 });
    }
    const hashedPassword = bcrypt.hashSync(newUser?.password, 14);
    newUser.password = hashedPassword;
    const resp = await userCollection.insertOne(newUser);
    return Response.json({ message: "user Created" });
  } catch (error) {
    return Response.json(
      { message: "something went wrong", error },
      { status: 400 }
    );
  }
};
