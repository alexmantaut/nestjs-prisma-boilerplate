import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
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
}
