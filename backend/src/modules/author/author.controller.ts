import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile, ParseFilePipe, FileTypeValidator, MaxFileSizeValidator } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorModel } from './author.model';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) { }

  @Post()
  create(@Body() createAuthor: AuthorModel) {
    return this.authorService.create(createAuthor);
  }


  @Get()
  findAll() {
    return this.authorService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthor: AuthorModel) {
    return this.authorService.update(+id, updateAuthor);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorService.remove(+id);
  }
}
