import { Module } from '@nestjs/common';
import { MysqlModule } from 'nest-mysql';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MulterModule } from '@nestjs/platform-express/multer';
import { memoryStorage } from 'multer';
import { ConfigModule } from '@nestjs/config';

import { getEnvPath } from './core/envs/env.helpers';
import { CategoryModule } from './modules/category/category.module';
import { GroupModule } from './modules/group/group.module';
import { AreaModule } from './modules/area/area.module';
import { MessageModule } from './modules/message/message.module';
import { ArticleModule } from './modules/article/article.module';
import { AuthorModule } from './modules/author/author.module';
import { AboutModule } from './modules/about/about.module';
import { AuthModule } from './auth/auth.module';
const envFilePath: string = getEnvPath('./src/core/envs');

@Module({
  imports: [
    MysqlModule.forRoot({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '',
      database: 'history',
    }),
    ConfigModule.forRoot({ envFilePath: envFilePath, isGlobal: true }),
    MulterModule.register({
      storage: memoryStorage(),
    }),
    CategoryModule,
    GroupModule,
    AreaModule,
    MessageModule,
    ArticleModule,
    AuthorModule,
    AboutModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
