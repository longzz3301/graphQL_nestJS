import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/graphql/models2/User';
import { UserSetting } from 'src/graphql/models2/UserSetting';
import { CreateUserSettingInput } from 'src/graphql/utils/CreateUserSettingsInput';
import { Repository } from 'typeorm';

@Injectable()
export class UserSettingService {
  constructor(
    @InjectRepository(UserSetting)
    private userSettingsRepository: Repository<UserSetting>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  getUserSettingById(userId: number) {
    return this.userSettingsRepository.findOneBy({ userId });
  }
   async createUserSetting(createUserSettingData: CreateUserSettingInput) {
    const findUsser = await this.userRepository.findOneBy({id: createUserSettingData.userId})

    if (!findUsser) throw new Error('user not found')   

    const newUserSetting =  this.userSettingsRepository.create(
      createUserSettingData,
    );

    const saveSettings = await  this.userSettingsRepository.save(newUserSetting);

    findUsser.settings = saveSettings ;

  await this.userRepository.save(findUsser)

    return saveSettings;
  }
}
