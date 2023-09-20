import { Entity } from 'typeorm';
import { UsersModule } from './users/users.module';
import { Inject, Injectable } from '@nestjs/common';
import { CustomLogger } from './logger/logger.service';
import { mocks } from './utils/mocks'
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  constructor(
    @Inject(UsersService) private users: UsersService,

    private logger: CustomLogger,
  ) {
  }
  getHello(): string {
    return 'Hello World!';
  }

  async genFakeData(): Promise<void> {
    const fakeDatas = Object.entries(await mocks)
    Promise.all(fakeDatas.map(async ([key, mock]) => {
      const repo = await this[key].createBulk(mock)
      this.logger.verbose({ repo })
      return repo
    }))

  }
}
