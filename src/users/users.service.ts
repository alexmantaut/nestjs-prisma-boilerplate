import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class UsersService extends PrismaCrudService {
  constructor(private prisma: PrismaService) {
    super({
      model: 'user',
      allowedJoins: [],
    });
  }

  create(createUserDto: CreateUserDto) {
    const { password, ...userForDb } = createUserDto;
    return this.prisma.user.create({ data: userForDb });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }
}
