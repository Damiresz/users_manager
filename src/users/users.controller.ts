import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService) {
  }

  @UsePipes(new ValidationPipe)
  @Post()
  create(@Body() createUser: CreateUserDto) {
    return this.userService.createUser(createUser);
  }


  @Get()
  getUsers():Promise<User[]> {
    return this.userService.getUsers();
  }


  @Get(':id')
  getUserById(@Param('id') id: string): string {
    return 'name' + id;
  }

  @Delete(":id")
  deleteUser(@Param("id") id: string):string {
    return 'name' + id;
  }
}
