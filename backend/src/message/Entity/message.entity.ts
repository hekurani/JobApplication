import { Entity, Column, PrimaryGeneratedColumn,ManyToOne, CreateDateColumn, OneToOne } from "typeorm";
import {User} from "../../users/user.entity";
import {ChatRoom} from "../../chatroom/chat.entity";
import { DeletedMessage } from "./deletedmessage.entity";
import { EditedMessage } from "./editedmessage.entity";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

   @Column({ default: () => 'CURRENT_TIMESTAMP' })
   publishDate: Date;

    @ManyToOne(() => User)
    user: User;


    @OneToOne(()=>DeletedMessage,(deletedmessage)=>deletedmessage.message)
    deletedmessage:DeletedMessage;
  

    @OneToOne(()=>EditedMessage,(editedmessage)=>editedmessage.message)
    editedmessage:EditedMessage;

    @ManyToOne(() => ChatRoom)
    chat: ChatRoom;

    
}
