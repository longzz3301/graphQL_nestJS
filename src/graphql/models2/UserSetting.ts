import { Field, Int, ObjectType } from "@nestjs/graphql";
import { PrimaryColumn, Column , Entity ,  OneToOne} from "typeorm";

@Entity({name:'user_settings'})
@ObjectType()
export class UserSetting {

    @PrimaryColumn()
    @Field ((type) => Int)
    userId : number;
   
    @Column({default:false})
    @Field({defaultValue:false})
    recieveEmails : boolean
    
    @Column({default:false})
    @Field({defaultValue :false})
    recieveNotifications: boolean ;

}