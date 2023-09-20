import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([User]), LoggerModule],
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule.forFeature([User])]
})
export class UsersModule { }