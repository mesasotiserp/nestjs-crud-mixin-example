import { IsNotEmpty } from 'class-validator';
import { BaseDto } from 'src/common/generic/dto.generic';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;
}
