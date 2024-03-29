import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Inject } from '@nestjs/common';
import { ConfigType /* ConfigService */ } from '@nestjs/config';
import type { Request as ExpressRequest } from 'express';
import { config } from '@/common/config';

import { AuthService } from './auth.service';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Strategy = require('./../../common/passport-auth-signature/strategy');

@Injectable()
export class SignatureStrategy extends PassportStrategy(
  Strategy,
  'checkSignature',
) {
  constructor(
    private readonly authService: AuthService,
    @Inject(config.KEY) protected readonly appConfig: ConfigType<typeof config>,
  ) {
    super({
      headerSignFields: [appConfig.project.headerSignToken], // 自动格式化为小写
      // tokenSignFields: [appConfig.project.headerSignToken],
      headerSignDateFields: [appConfig.project.headerSignTokenDate], // 自动格式化为小写
      // tokenSignDateFields: [appConfig.project.headerSignTokenDate],
      passReqToCallback: true,
    });
  }

  async validate(
    req: ExpressRequest,
    signature: string,
    signatureDate: string,
  ): Promise<any> {
    return await this.authService.validateSignature(
      req,
      signature,
      signatureDate,
    );
  }
}
