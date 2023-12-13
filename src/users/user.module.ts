import { Module } from "@nestjs/common";
import { UserResolver } from "./UserResolver";
import { UserService } from "./UserService";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/graphql/models2/User";
import { UserSettingService } from "./UserSettingService";
import { UserSetting } from "src/graphql/models2/UserSetting";
import { UserSettingResolver } from "./UserSettingsResolver";

@Module({
    imports:[TypeOrmModule.forFeature([User, UserSetting])] ,
    providers:[UserService , UserResolver , UserSettingService , UserSettingResolver]
})
export class UserModule {}