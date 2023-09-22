import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  id: string;

  @ApiProperty()
  @IsAlphanumeric()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsAlphanumeric()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsBoolean()
  enabled: boolean;

  @ApiProperty()
  password: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
