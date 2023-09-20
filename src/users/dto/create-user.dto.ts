import { OmitType } from '@nestjs/mapped-types';
import { User } from 'src/entities/user.entity';



export class CreateUserDto extends OmitType(User, ['created_at', 'updated_at'] as const) {

}
