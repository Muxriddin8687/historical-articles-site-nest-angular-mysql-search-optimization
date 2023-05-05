import { Injectable } from '@nestjs/common';
import { InjectClient } from 'nest-mysql';
import { Connection } from 'mysql2';

@Injectable()
export class AboutService {

    constructor(@InjectClient() private readonly con: Connection) { }


    async create(data) {
        const oldData = await this.findAll();

        if (oldData.length == 1)
            return this.con.query('UPDATE `about_us` SET `text`=?, `email`=?, `phone`=?, `telegram`=? WHERE id="1"',
                [data.text, data.email, data.phone, data.telegram ]);
        else
            return this.con.query('INSERT INTO `about_us`(`id`, `text`, `email`, `phone`, `telegram`) VALUES(?, ?, ?, ?, ?)',
                ["1", data.text, data.email, data.phone, data.telegram ]);
    }


    async findAll() {
        const news = await this.con.query('SELECT * FROM `about_us` WHERE id="1"');
        return news[0];
    }
}
