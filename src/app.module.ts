import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule, ConfigurationProviderModule } from 'config-management';
import { LoggerModule } from './logger/logger.module';
import { TypeOrm } from './databaseLayer/TypeOrmModule';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    LoggerModule,
    TypeOrmModule.forRootAsync(TypeOrm),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {
  public constructor(@Inject(AppService) private appservice: AppService) { }
  onApplicationBootstrap() {
    if (process.env.NODE_ENV === 'development') {
      this.appservice.genFakeData()
    }
  }

}
