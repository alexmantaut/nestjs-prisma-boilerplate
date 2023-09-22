import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsAlphanumeric, IsEmail, IsOptional } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  id: string;

  @ApiProperty()
  @IsAlphanumeric()
  @IsOptional()
  firstName: string;

  @ApiProperty()
  @IsAlphanumeric()
  @IsOptional()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsOptional()
  enabled: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
