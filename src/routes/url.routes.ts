import express, { NextFunction, Request, Response } from "express";
import UrlController from "../controllers/url.controllers";

const UrlRoute = express();

UrlRoute.post(
  "/add",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const controller = new UrlController();
      const response = await controller.create(req.body);
      res.redirect("/");

      // res.status(200).json({
      //   message: "It's Created Successful",
      //   response,
      // });
    } catch (error: unknown) {
      next(error);
    }
  }
);

UrlRoute.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body.shortUrl);
    const controller = new UrlController();
    const response = await controller.findUrl(req.body.shortUrl as string);
    const longUrl = encodeURI(response?.longUrl!);
    console.log(longUrl);
    res.redirect(`${longUrl}`);
    return longUrl;
  } catch (error: unknown) {
    next(error);
  }
});

export default UrlRoute;
