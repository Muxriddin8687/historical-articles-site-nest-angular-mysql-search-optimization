import { Injectable } from '@nestjs/common';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';

@Injectable()
export class AuthService {
    constructor(@InjectClient() private readonly con: Connection) { }


    async login(userInfo) {
        const data = await this.con.query('SELECT * FROM `user` WHERE login=? AND password=?', [userInfo.login, userInfo.password]);

        if (data[0].length == 1)
            return true;
        else
            return false; 
    }
}
