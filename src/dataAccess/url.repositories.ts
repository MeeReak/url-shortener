import { PrismaClient } from "@prisma/client";
import { IUrl } from "../types/url.types";

const prisma = new PrismaClient();

class UrlRepositories {
  public async create(data: IUrl) {
    try {
      const response = await prisma.url.create({
        data: {
          longUrl: data.longUrl,
          shortUrl: data.shortUrl,
          click: data.click || 0, // Set click to 0 if not provided
        },
      });

      return response;
    } catch (error: unknown) {
      throw error;
    }
  }

  public async findUrl(url: string) {
    try {
      const response = await prisma.url.findFirst({
        where: {
          shortUrl: url,
        },
      });

      const update = await prisma.url.update({
        where: {
          id: response?.id,
        },
        data: {
          click: {
            increment: 1,
          },
        },
      });

      return response;
    } catch (error: unknown) {
      throw error;
    }
  }
}

export default UrlRepositories;
