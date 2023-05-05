import { Injectable } from '@nestjs/common';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';
import { FilterModel } from '../area/filter.model';

@Injectable()
export class CategoryService {

    constructor(@InjectClient() private readonly con: Connection) { }

    async create(data: FilterModel) {
        return this.con.query('INSERT `category`(`name`) VALUES (?)', data.name);
    }

    async findAll() {
        const news = await this.con.query('SELECT * FROM `category` ORDER BY `date` DESC');
        return news[0];
    }

    async update(id: number, data: FilterModel) {
        return await this.con
            .query('UPDATE `category` SET `name`=? WHERE id=?', [data.name, id]);
    }

    async remove(id: number) {
        try {
            await this.con.query('DELETE FROM `category` WHERE `id`=?', id);
            return true;
        } catch {
            return false;
        }
    }
}
