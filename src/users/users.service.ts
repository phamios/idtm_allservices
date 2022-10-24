/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
 
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  public async register(user: CreateUserDto): Promise<User> {
    return this.usersRepository.save({ ...user });
  }

  async getByEmail(email: string) {
    const user = await this.usersRepository.findOneBy({ email });
    if (user) {
      return user;
    }
    throw new HttpException(
      ' User with this email does not exits',
      HttpStatus.NOT_FOUND,
    );
  }

  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  async create(userData: CreateUserDto) {
    // const passwordHash = await bcrypt.hashSync(userData.password.trim(),100);
    const saltOrRounds = 10;
    const password = userData.password;
    const hash = await bcrypt.hash(password, saltOrRounds);
    userData.password = hash;
    console.log(hash);
    const newUser = await this.usersRepository.create(userData);
    
    await this.usersRepository.save(newUser);
    return newUser;
  }
}
