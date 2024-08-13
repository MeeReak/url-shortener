import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import UrlRoute from "./routes/url.routes";
import path from "path";

const app = express();
const port = 3000;

const prisma = new PrismaClient();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/health", (_req: Request, res: Response) => {
  res.status(200).json({ health: "This is so Goood" });
});

app.get("/", async (_req: Request, res: Response) => {
  const allUrl = (await prisma.url.findMany()).reverse();
  res.render("index", { allUrl });
});

app.use("/v1/url", UrlRoute);

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
