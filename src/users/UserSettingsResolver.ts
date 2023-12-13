import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserSetting } from '../graphql/models2/UserSetting';
import { CreateUserSettingInput } from '../graphql/utils/CreateUserSettingsInput';
// import { mockUserSettings } from 'src/_mocks_/mockUserSettings';
import { User } from '../graphql/models2/User';
import { UserSettingService } from './UserSettingService';

@Resolver()
export class UserSettingResolver {
  constructor(private userSettingsService : UserSettingService){}

  @Mutation((returns) => UserSetting)
  async createUserSettings(  // async
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingInput,
  ){
    const userSetting = await this.userSettingsService.createUserSetting(
      createUserSettingsData,
    );
    return userSetting;
  }
}
