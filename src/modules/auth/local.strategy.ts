import { Strategy } from 'passport-auth-token';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Inject } from '@nestjs/common';
import { ConfigType /* ConfigService */ } from '@nestjs/config';
import { config } from '@/common/config';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'checkScan') {
  constructor(
    private readonly authService: AuthService,
    @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
  ) {
    super({
      tokenFields: ['sessionKey'],
      // params: true, // check req.params
      passReqToCallback: true,
    });
  }

  async validate(req: Record<any, any>, sessionKey: string): Promise<any> {
    return await this.authService.validateScanSuccess(
      sessionKey,
      req.header(this.appConfig.project.headerLoginToken),
    );
  }
}
