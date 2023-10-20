import { Type } from '@nestjs/common';
import { BaseDto } from './dto.generic';

export function CrudService<Entity, BaseDto>(entity: Type<Entity>): Type<any> {
  class CrudServiceMixin {
    async create(data: Partial<BaseDto>): Promise<Entity> {
      // Implement your create logic here
      console.log('CrudService.create() is called.');
      return;
    }

    async findOne(id: number): Promise<Entity> {
      // Implement your find one logic here
      return;
    }

    async update(id: number, data: Partial<BaseDto>): Promise<Entity> {
      // Implement your update logic here
      return;
    }

    async remove(id: number): Promise<void> {
      // Implement your delete logic here
      return;
    }
  }

  return CrudServiceMixin;
}
