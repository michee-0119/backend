import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, Response } from "express";
import { connectToMongoDb } from "./mongoDB";
import { Usermodel } from "../schema/user.schema";

configDotenv();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/discover", async (req: Request, res: Response) => {
  res.status(200).send(req.body);
});

//Tuesday

//1.CREATE API - POST req

app.post("/create", async (req: Request, res: Response) => {
  res.status(200).send(req.body);
});

//2. UPDATE API - PUT req

app.put("/update", async (req: Request, res: Response) => {
  const newUser = req.body;

  const user = {
    name: "bibi",
    locker: "303",
    password: "223344",
  };

  const updatedUser = {
    ...user,
    ...newUser,
  };
  res
    .status(200)
    .send({ message: "User updated successfully", data: updatedUser });
});

//3. DELETE API - DELETE req

app.delete("/delete", async (req: Request, res: Response) => {
  const user = [
    {
      name: "bibi",
      locker: "303",
      password: "223344",
    },
    {
      name: "gigi",
      locker: "201",
      password: "556677",
    },
  ];

  res.status(200).send({ message: "user deleted successfully", user: user });
});
app.listen(8000, () => console.log("http://localhost:8000"));
