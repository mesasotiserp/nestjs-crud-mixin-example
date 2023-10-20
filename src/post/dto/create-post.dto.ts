import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseDto } from 'src/common/generic/dto.generic';

export class CreatePostDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;
}
