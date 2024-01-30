import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger();

  use(req: Request, res: Response, next: NextFunction): void {
    const start = Date.now();
    const isJsonBody = req.headers['content-type'] === 'application/json';
    const body = isJsonBody ? JSON.stringify(req.body) : '{}';

    res.on('finish', () => {
      this.logger.log(
        `[${req.method}] ${req.url} [${body}] - ${res.statusCode} [${
          Date.now() - start
        }ms]`,
      );
    });
    next();
  }
}
