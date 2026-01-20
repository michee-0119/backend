import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, Response } from "express";

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

app.listen(8000, () => console.log("http://localhost:8000"));

//UPDATE - PUT:

app.put("/update", async (req: Request, res: Response) => {
  const newUser = req.body;

  const user = {
    name: "test",
    email: "test@example.com",
    password: "123456",
  };

  const updatedUser = {
    ...user,
    ...newUser,
  };

  res
    .status(200)
    .send({ message: "User updated successfully", data: updatedUser });
});

//DELETE:

app.delete("/delete", async (req: Request, res: Response) => {
  res.status(200).send({ message: "User deleted succesfully" });
});

//LIST - GET:

app.get("/get-users", async (req: Request, res: Response) => {});
