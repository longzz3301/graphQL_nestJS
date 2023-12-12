import { InputType , Field,Int } from "@nestjs/graphql";

@InputType()
export class CreateUserSettingInput {
    @Field ((type) => Int)
    userId : number;

    @Field({nullable :true ,defaultValue: false})
    recieveEmails : boolean
    
    @Field({nullable :true , defaultValue: false})
    recieveNotifications: boolean ;

}