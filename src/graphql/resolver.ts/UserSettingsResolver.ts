import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserSetting } from '../models2/UserSetting';
import { CreateUserSettingInput } from '../utils/CreateUserSettingsInput';
import { mockUserSettings } from 'src/_mocks_/mockUserSettings';
import { User } from '../models2/User';

@Resolver()
export class UserSettingResolver {
  @Mutation((returns) => UserSetting)
  createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingInput,
  ) {
    console.log(createUserSettingsData);
    mockUserSettings.push(createUserSettingsData);
    return createUserSettingsData;
  }
}
