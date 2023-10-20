import { BaseDto } from './dto.generic';
import { BaseEntity } from './entity.generic';

export abstract class BaseService<T extends BaseEntity, Dto extends BaseDto> {
  create(createDto: Dto): Promise<T> {
    return;
  }
  update(id: number, updateDto: Dto): Promise<T> {
    return;
  }
}
