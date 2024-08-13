import UrlRepositories from "../dataAccess/url.repositories";
import { IUrl } from "../types/url.types";
import generateRandomString from "../utils/randomString";

class UrlService {
  private _UrlRepo: UrlRepositories;

  constructor() {
    this._UrlRepo = new UrlRepositories();
  }

  public async create(data: IUrl) {
    try {
      const { longUrl, shortUrl, click } = data;

      const string = generateRandomString(12);
      const response = this._UrlRepo.create({
        longUrl,
        shortUrl: string,
        click,
      });
      return response;
    } catch (error: unknown) {
      throw error;
    }
  }

  public async findUrl(url: string) {
    try {
      const response = await this._UrlRepo.findUrl(url);
      return response;
    } catch (error: unknown) {
      throw error;
    }
  }
}

export default UrlService;
