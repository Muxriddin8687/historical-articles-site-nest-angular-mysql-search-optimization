import { Injectable } from '@nestjs/common';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';
import { AuthorModel } from './author.model';

@Injectable()
export class AuthorService {
    constructor(@InjectClient() private readonly con: Connection) { }


    async create(data: AuthorModel) {
        return this.con.query('INSERT `author`(`name`, `email`, `phone`) VALUES (?, ?, ?)', [data.name, data.email, data.phone]);
    }


    async findAll() {
        const images = await this.con.query('SELECT * FROM `author` ORDER BY `date` DESC');
        return images[0];
    }


    async update(id: number, data: AuthorModel) {
        return await this.con
            .query('UPDATE `author` SET `name`=?, `email`=?, `phone`=? WHERE id=?',
                [data.name, data.email, data.phone, id]);
    }


    async remove(id: number) {
        try {
            await this.con.query('DELETE FROM `author` WHERE `id`=?', id);
            return true;
        } catch {
            return false;
        }
    }
}
