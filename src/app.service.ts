import { Injectable } from '@nestjs/common';
import { User } from './modules/users/user.entity';

@Injectable()
export class AppService {
  constructor() {
    //
  }

  home(user?: User) {
    return { nickname: `${user?.nickname}` };
  }
}
