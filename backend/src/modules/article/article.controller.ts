import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleModel } from './article.model';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) { }

  @Post()
  create(@Body() createNewsDto: ArticleModel) {
    return this.articleService.create(createNewsDto);
  }


  @Get('search')
  searchByText(@Query('search') search: string) {
    return this.articleService.searchByText(search);
  }


  @Post('search')
  searchByFilter(@Body() filterData: any) {
    return this.articleService.searchByFilter(filterData);
  }


  @Get()
  findAll() {
    return this.articleService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateManagementDto: ArticleModel) {
    return this.articleService.update(+id, updateManagementDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }
}
