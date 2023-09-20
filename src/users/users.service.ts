import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CustomLogger } from 'src/logger/logger.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    private logger: CustomLogger,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
  }

  create(createUserDto: CreateUserDto) {
    this.logger.debug('create')
    return 'This action adds a new user';
  }

  async createBulk(createUserDto: CreateUserDto[]) {
    this.logger.debug('create')
    const savedData = await this.userRepository.save(createUserDto)
    return savedData
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
