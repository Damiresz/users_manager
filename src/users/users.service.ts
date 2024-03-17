import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUsers():Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async getUserByUsername(username: string) {
    return await this.prisma.user.findUnique({
      where: { username }
    });
  }

  async createUser(user: CreateUserDto) {
    const existingUser = await this.getUserByUsername(user.username);
    
    if (existingUser) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'User with this username already exists',
      };
    }

    try {
      await this.prisma.user.create({
        data: user,
      });
      return {
        status: HttpStatus.CREATED,
        message: 'User created successfully',
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to create user',
      };
    }
  }
}
