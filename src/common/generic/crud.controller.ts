import { Type } from '@nestjs/common';
import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

export function CrudController<Entity, CreateDto, UpdateDto>(
  entity: Type<Entity>,
  dtos: [Type<CreateDto>, Type<UpdateDto>],
): Type<any> {
  const [CreateDto, UpdateDto] = dtos;
  const entityName = entity.name.toLowerCase();

  @Controller(`/${entityName}`)
  class CrudControllerMixin {
    constructor(private readonly crudService: any) {}

    @Post('v1/create')
    async create(@Body() createDto: CreateDto): Promise<Entity> {
      const entity = this.crudService.create(createDto);
      return entity;
    }

    @Get('v1/:id')
    async findOne(@Param('id') id: number): Promise<Entity> {
      return this.crudService.findOne(id);
    }

    @Put('v1/:id')
    async update(
      @Param('id') id: number,
      @Body() updateDto: UpdateDto,
    ): Promise<Entity> {
      return this.crudService.update(id, updateDto);
    }

    @Delete('v1/:id')
    async remove(@Param('id') id: number): Promise<void> {
      return this.crudService.remove(id);
    }
  }

  return CrudControllerMixin;
}
