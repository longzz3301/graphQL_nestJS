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
import { Inject } from '@nestjs/common';

import { mockUser } from 'src/_mocks_/mockUser';

import { mockUserSettings } from 'src/_mocks_/mockUserSettings';
import { User } from '../graphql/models2/User';
import { UserSetting } from '../graphql/models2/UserSetting';
import { createUserData } from '../graphql/utils/CreateUserData';
import { UserService } from './UserService';

export let incrementalId = 3;

@Resolver((of) => User)
export class UserResolver {

  constructor( private userService : UserService) {

  }


  @Query((returns) => User, { nullable: true, name: 'getUserById' }) // name: 'getUserById' querry name
  getUserById(@Args('id', { type: () => Int }) id: number): User | undefined {
    return mockUser.find((user) => user.id === id);
  }

  @Query(() => [User])
   getUsers() {
    return this.userService.getUser();
  }

  @ResolveField((returns) => UserSetting, { name: 'getUserSettings' })
  getUserSettings(@Parent() user: User) {
    console.log(user);
    return mockUserSettings.find((setting) => setting.userId === user.id);
  }

  // @Mutation(returns => User)
  // createUser(
  //   @Args('username') username : string ,
  //   @Args ('displayName', {nullable: true}) displayName : string) {
  //       const newUser = {username , displayName , id : ++incrementalId}
  //       mockUser.push(newUser)
  //       return newUser
  // }

  @Mutation((returns) => User)
  createUser(@Args('createUserData') createUserData: createUserData) {
    const { username, displayName } = createUserData;
    const newUser = { username, displayName, id: ++incrementalId };
    mockUser.push(newUser);
    return newUser;
  }
}
