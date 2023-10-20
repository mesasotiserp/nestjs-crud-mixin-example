import { Body, Post } from '@nestjs/common';
import { BaseDto } from './dto.generic';
import { BaseEntity } from './entity.generic';
import { BaseService } from './service.generic';
export abstract class BaseController<
  T extends BaseEntity,
  Dto extends BaseDto,
> {
  constructor(protected readonly service: BaseService<T, Dto>) {}

  // @Post('v1/create')
  // async create(@Body() createDto: Dto): Promise<T> {
  //   // return await this.service.create(createDto);
  //   return;
  // }
}
