import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/graphql/models2/User';
import { createUserData } from 'src/graphql/utils/CreateUserData';
import { RelationId, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getUser() {
    return this.userRepository.find({ relations: ['settings'] });
  }

  getUserById(id: number) {
    return this.userRepository.findOne({
      where: { id },
      relations: ['settings'],
    });
  }

  createUser(createUserData: createUserData) {
    const newUser = this.userRepository.create(createUserData);
    return this.userRepository.save(newUser);
  }
}
