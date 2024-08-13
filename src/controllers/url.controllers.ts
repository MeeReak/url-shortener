import UrlService from "../services/url.service";
import { IUrl } from "../types/url.types";

class UrlController {
  private _UrlService: UrlService;

  constructor() {
    this._UrlService = new UrlService();
  }

  public async create(data: IUrl) {
    try {
      const response = await this._UrlService.create(data);
      return response;
    } catch (error: unknown) {
      throw error;
    }
  }

  public async findUrl(url: string) {
    try {
      const response = await this._UrlService.findUrl(url);
      return response;
    } catch (error: unknown) {
      throw error;
    }
  }
}

export default UrlController;
