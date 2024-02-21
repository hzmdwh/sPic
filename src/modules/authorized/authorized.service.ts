import {
  Injectable,
  // Inject,
  // CACHE_MANAGER,
  // GoneException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Cache } from 'cache-manager';
// import { ConfigType /* ConfigService */ } from '@nestjs/config';

import { Authorized } from './authorized.entity';
// import { AuthorizedAPI } from './authorized_api.entity';
// import { UtilsService } from '../utils/services/utils.service';
// import { CodeService } from './../code/code.service';
// import { config } from './../config';

@Injectable()
export class AuthorizedService {
  constructor(
    // private readonly utilsService: UtilsService,
    // @InjectRepository(AuthorizedAPI)
    // private authorizedAPIRepository: Repository<AuthorizedAPI>,
    // @Inject(CACHE_MANAGER) private cacheManager: Cache,
    // @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
    // private readonly codeService: CodeService,
    @InjectRepository(Authorized)
    private authorizedRepository: Repository<Authorized>,
  ) {}
  async findOneByBusinessKey(businessKey: string): Promise<Authorized | null> {
    return this.authorizedRepository.findOneBy({ businessKey, isDeleted: -1 });
  }
}
