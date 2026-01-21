import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, Response } from "express";
import { connectToMongoDb } from "./mongoDB";
import { Usermodel } from "../schema/user.schema";

configDotenv();

const app: Application = express();

const port = 8000;

app.use(cors());
app.use(express.json());

//CREATE - POST:

app.post("/discover", async (req: Request, res: Response) => {
  const user = {
    name: "test",
    email: "test@example.com",
    password: "123456",
  };
  res.send(user);
});

// //UPDATE - PUT:

// app.put("/update", async (req: Request, res: Response) => {
//   const newUser = req.body;

//   const user = {
//     name: "test",
//     email: "test@example.com",
//     password: "123456",
//   };

//   const updatedUser = {
//     ...user,
//     ...newUser,
//   };

//   res
//     .status(200)
//     .send({ message: "User updated successfully", data: updatedUser });
// });

// //DELETE:

// app.delete("/delete", async (req: Request, res: Response) => {
//   res.status(200).send({ message: "User deleted succesfully" });
// });

// //LIST - GET:

// app.get("/get-users", async (req: Request, res: Response) => {});

//

app.post("/create-user", async (req: Request, res: Response) => {
  const { name, email } = req.body;

  const user = await Usermodel.create({ name, email });
  res.status(200).send({ message: "user created succesfully", data: user });
});

app.get("/get-users", async (req: Request, res: Response) => {
  const users = await Usermodel.find();
  res.status(200).send({ message: "user fetched succeesfully", data: users });
});

app.listen(8000, async () => {
  await connectToMongoDb();
  console.log("http://localhost:8000");
});
