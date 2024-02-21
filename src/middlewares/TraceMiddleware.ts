import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TraceMiddleware implements NestMiddleware {
  private readonly logger = new Logger(TraceMiddleware.name);
  use(request: Request, response: Response, next: NextFunction) {
    try {
      const traceId =
        request.headers.traceId || request.headers.traceid || uuidv4();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      request.traceId = traceId; // 用来放在日志里的
      response.setHeader('traceId', traceId);
    } catch {
      this.logger.error(`生成traceId异常.`);
    }
    next();
  }
}
