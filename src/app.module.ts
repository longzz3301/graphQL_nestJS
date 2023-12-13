import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './users/UserResolver';
import { UserSettingResolver } from './users/UserSettingsResolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './graphql/models2/User';
import { UserSetting } from './graphql/models2/UserSetting';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig >({
      driver: ApolloDriver ,
      autoSchemaFile : 'src/schema.sql'

    }),
    TypeOrmModule.forRoot({
      type:'postgres' ,
      host:'localhost' ,
      port: 5433 ,
      username:'postgres',
      password:'1',
      database:'test1',
      entities: [User , UserSetting] ,
      synchronize: true ,
      logging:true

    }),
    UserModule,
  ],
  controllers: [],
  providers: [], 
})
export class AppModule {}
