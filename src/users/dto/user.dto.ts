import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsEmail, IsOptional } from 'class-validator';

export class UserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  @IsAlphanumeric()
  @IsOptional()
  firstName?: string;

  @ApiProperty()
  @IsAlphanumeric()
  @IsOptional()
  lastName?: string;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsOptional()
  enabled?: boolean;

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  updatedAt?: Date;
}
