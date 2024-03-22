import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService) {
  }

  @UsePipes(new ValidationPipe)
  @Post()
  create(@Body() createUser: CreateUserDto) {
    return 
  }


  @Get()
  getUsers() {
    return 
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
