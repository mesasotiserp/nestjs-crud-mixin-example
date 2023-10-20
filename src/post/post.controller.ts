import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto';
import { BaseController } from 'src/common/generic/controller.generic';
import { Post as PostEntity } from './entities/post.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Post')
@Controller('post')
export class PostController {
  constructor(protected readonly service: PostService) {
    // super(service);
  }

  @Post('v1/create')
  create(@Body() createPostDto: CreatePostDto) {
    // return super.create(createPostDto);
  }
}
