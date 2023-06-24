import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(private readonly mailService: MailerService){}

    sendMail(toUser:string, text: string){
        this.mailService.sendMail({
            from: process.env.mailFrom,
            to: toUser,
            text: text,
        })
    }
}
