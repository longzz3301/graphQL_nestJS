import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class createUserData {
    @Field()
    username : string ;

    @Field({nullable:true})
    displayName?: string ;

    

}