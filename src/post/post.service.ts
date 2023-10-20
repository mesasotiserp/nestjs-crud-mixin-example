import { Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto';
import { CrudService } from 'src/common/generic/crud.service';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService extends CrudService(Post) {
  // create(createDto: CreatePostDto) {
  //   console.log('called super.create()');
  //   return super.create({} as any);
  // }
}
