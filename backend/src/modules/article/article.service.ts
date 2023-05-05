import { Injectable } from '@nestjs/common';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';
import { ArticleModel } from './article.model';

@Injectable()
export class ArticleService {
    constructor(@InjectClient() private readonly con: Connection) { }


    async searchByText(searchText) {
        let sql = 'SELECT a.id, a.title, a.text, a.date, m.name AS `author` ' +
            'FROM `article` AS a, `author` AS m ' +
            'WHERE a.author_id = m.id AND MATCH(a.title, a.descriptions, a.text, a.years) ' +
            `AGAINST("${searchText}" IN NATURAL LANGUAGE MODE)`;
        const articles = await this.con.query(sql);
        return articles[0];
    }


    async searchByFilter(filterData) {
        let area = '', author = '', category = '', group = '';


        if (filterData.area.length > 0) {
            area = 'area_id IN (' + filterData.area.map(i => "'" + i + "'").toString() + ')';
        }
        if (filterData.author.length > 0) {
            author = (area.length > 3) ? ' AND ' : '';
            author += 'author_id IN (' + filterData.author.map(i => "'" + i + "'").toString() + ')';
        }
        if (filterData.category.length > 0) {
            category = (area.length > 3 || author.length > 3) ? ' AND ' : '';
            category += 'category_id IN (' + filterData.category.map(i => "'" + i + "'").toString() + ')';
        }
        if (filterData.group.length > 0) {
            group = (area.length > 3 || author.length > 3 || category.length > 3) ? ' AND ' : '';
            group += 'group_id IN (' + filterData.group.map(i => "'" + i + "'").toString() + ')';
        }


        let sql = 'SELECT a.id, a.title, a.text, a.date, m.name ' +
            'FROM `article` AS a, `author` AS m ' +
            `WHERE ${area + author + category + group}`;

        const articles = await this.con.query(sql);
        return articles[0];
    }


    async create(data: ArticleModel) {
        return this.con.query('INSERT `article`(`area_id`, `author_id`, `category_id`, `group_id`, `descriptions`, `title`, `text`, `years`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [data.area_id, data.author_id, data.category_id, data.group_id, data.descriptions, data.title, data.text, data.years]);
    }


    async findAll() {
        let sql = 'SELECT a.id, a.title, a.text, a.date, m.name AS `author` FROM `article` AS a, `author` AS m WHERE a.author_id = m.id ORDER BY `date` DESC LIMIT 15';
        const articles = await this.con.query(sql);
        return articles[0];
    }


    async findOne(id: number) {
        const articles = await this.con.query('SELECT * FROM `article` WHERE id=?', id);
        return articles[0];
    }


    async update(id: number, data: ArticleModel) {
        return await this.con
            .query('UPDATE `article` SET `area_id`=?, `author_id`=?, `category_id`=?, `group_id`=?, `descriptions`=?, `title`=?, `text`=?, `years`=? WHERE id=?',
                [data.area_id, data.author_id, data.category_id, data.group_id, data.descriptions, data.title, data.text, data.years, id]);
    }


    async remove(id: number) {
        return this.con.query('DELETE FROM `article` WHERE `id`=?', id);;
    }
}
