import { Field, Int, ObjectType } from "@nestjs/graphql";
import { UserSetting } from "./UserSetting";
import  {Entity , Column , PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm' ;


@Entity({name:'users'})
@ObjectType()
export class User {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;


    @Column()
    @Field()
    username: string ;

    @Column()
    @Field({nullable : true}) // có thể có giá trị null 
    displayName?: string ; // trường này có thể có giá trị undefined hoặc không cần phải được khai báo (optional)

    @OneToOne(() => UserSetting)
    @JoinColumn()
    @Field({nullable:true})
    settings?: UserSetting
}