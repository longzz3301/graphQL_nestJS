import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/graphql/models2/User";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository : Repository<User>
    ) {}

    getUser() {
        return this.userRepository.find()
    }
}