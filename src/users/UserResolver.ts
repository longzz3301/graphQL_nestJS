import {
  Query,
  Resolver,
  Args,
  Int,
  Parent,
  ResolveField,
  ID,
  Mutation,
  
} from '@nestjs/graphql';
import { Inject, Injectable } from '@nestjs/common';

// import { mockUser } from 'src/_mocks_/mockUser';

// import { mockUserSettings } from 'src/_mocks_/mockUserSettings';
import { User } from '../graphql/models2/User';
import { UserSetting } from '../graphql/models2/UserSetting';
import { createUserData } from '../graphql/utils/CreateUserData';
import { UserService } from './UserService';
import { UserSettingService } from './UserSettingService';

export let incrementalId = 3;


// @Injectable()
@Resolver(() => User)
export class UserResolver {

  constructor( private userService : UserService , private userServieceSetting : UserSettingService) {}

  @Query((returns) => User, { nullable: true, name: 'getUserById' }) // name: 'getUserById' querry name
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id)
  }

  @Query(() => [User])
   getUsers() {
    return this.userService.getUser();
  }

  // @ResolveField((returns) => UserSetting, { name: 'getUserSettings' , nullable:true})
  // getUserSettings(@Parent() user: User) {
    
  //   return this.userServieceSetting.getUserSettingById(user.id)
  // }

  @Mutation((returns) => User)
  createUser(@Args('createUserData') createUserData: createUserData) {
    return this.userService.createUser(createUserData)
  }
}
