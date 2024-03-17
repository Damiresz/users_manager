import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateUserDto {
  @IsString({ message: 'First name must be a string' })
  @IsNotEmpty({ message: 'First name is required' })
  readonly first_name: string;

  @IsString({ message: 'Last name must be a string' })
  @IsNotEmpty({ message: 'Last name is required' })
  readonly last_name: string;

  @IsString({ message: 'Username must be a string' })
  @IsNotEmpty({ message: 'Username is required' })
  readonly username: string;

  @IsString({ message: 'Email must be a string' })
  @IsNotEmpty({ message: 'Email is required' })
  readonly email: string;

  @IsString({ message: 'Phone must be a string' })
  @IsNotEmpty({ message: 'Phone is required' })
  readonly phone: string;

  @IsString({ message: 'Company must be a string' })
  @IsNotEmpty({ message: 'Company is required' })
  readonly company: string;

  @IsNumber()
  @IsNotEmpty({ message: 'ICO is required' })
  readonly ico: number;

  @IsString({ message: 'Role must be a string' })
  @IsNotEmpty({ message: 'Role is required' })
  readonly role: string;

  @IsString({ message: 'Department must be a string' })
  @IsNotEmpty({ message: 'Department is required' })
  readonly department: string;
}