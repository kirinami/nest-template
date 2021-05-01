import { Injectable } from '@nestjs/common';

import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(
        private readonly usersRepository: UsersRepository,
    ) {
    }

    async findAll() {
        return this.usersRepository.find();
    }

    async findOne(id: number) {
        return this.usersRepository.findOne(id);
    }

    async create(createUserDto: CreateUserDto) {
        const user = await this.usersRepository.create(createUserDto);
        return this.usersRepository.save(user);
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        return this.usersRepository.update(id, updateUserDto);
    }

    async delete(id: number) {
        return this.usersRepository.delete(id);
    }
}
