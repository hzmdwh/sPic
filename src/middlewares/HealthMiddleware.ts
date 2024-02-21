import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class HealthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    res.status(200).send(true);
  }
}
