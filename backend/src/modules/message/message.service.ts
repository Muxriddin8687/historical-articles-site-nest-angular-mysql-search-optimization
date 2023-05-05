import { Injectable } from '@nestjs/common';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';
import { MessageModel } from './message.model';
import * as fs from 'fs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MessageService {
    filePath = '';

    constructor(
      @InjectClient() private readonly con: Connection,
      private config: ConfigService
    ) {
      this.filePath = config.get('filePath');
    }


    async create(data: MessageModel, file) {
        return this.con.query('INSERT `message`(`name`, `email`, `phone`, `file`) VALUES (?, ?, ?, ?)', [data.name, data.email, data.phone, file.filename]);
    }


    async findAll() {
        const images = await this.con.query('SELECT * FROM `message` ORDER BY `date` DESC');
        return images[0];
    }


    async remove(id: number, fileName: string) {
        await this.con.query('DELETE FROM `message` WHERE `id`=?', id);
        fs.unlink(this.filePath + fileName, (err) => console.error(err));
        return true;
    }
}
