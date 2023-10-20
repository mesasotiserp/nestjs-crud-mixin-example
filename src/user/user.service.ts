import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './entities/user.entity';
import { CrudService } from 'src/common';

@Injectable()
export class UserService extends CrudService(User) {}
