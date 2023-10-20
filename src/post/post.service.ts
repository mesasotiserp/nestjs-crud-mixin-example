import { Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto';
import { BaseService } from 'src/common/generic/service.generic';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService extends BaseService<Post, CreatePostDto> {}
