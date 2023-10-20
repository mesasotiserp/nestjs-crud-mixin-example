import { Controller } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto';
import { Post as PostEntity } from './entities/post.entity';
import { ApiTags } from '@nestjs/swagger';
import { CrudController } from '../common';

@ApiTags('Post')
@Controller('post')
export class PostController extends CrudController<
  PostEntity,
  CreatePostDto,
  UpdatePostDto
>(PostEntity, [CreatePostDto, UpdatePostDto]) {
  constructor(protected readonly service: PostService) {
    super(service);
  }
}
