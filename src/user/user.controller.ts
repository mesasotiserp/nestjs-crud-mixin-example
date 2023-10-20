import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { ApiTags } from '@nestjs/swagger';
import { CrudController } from '../common';
import { User } from './entities/user.entity';

@ApiTags('User')
@Controller('user')
export class UserController extends CrudController<
  User,
  CreateUserDto,
  UpdateUserDto
>(User, [CreateUserDto, UpdateUserDto]) {
  constructor(protected readonly service: UserService) {
    super(service);
  }
}
