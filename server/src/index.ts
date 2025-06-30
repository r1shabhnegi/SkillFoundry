import express, { Request, Response } from "express";
const app = express();
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with tsx!");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
