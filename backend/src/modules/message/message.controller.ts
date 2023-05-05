import { Controller, Get, Post, Body, Param, Delete, Query, UseInterceptors, UploadedFile, ParseFilePipe, FileTypeValidator, MaxFileSizeValidator } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageModel } from './message.model';
import LocalFilesInterceptor from 'src/core/localFiles.interceptor';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}


  @Post()
  @UseInterceptors(
    LocalFilesInterceptor({ fieldName: 'file', path: '' })
  )
  create(
    @Body() createAuthor: MessageModel,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(docx|doc|pdf)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 10 }),
        ],
      })
    ) file: Express.Multer.File
  ) {
    return this.messageService.create(createAuthor, file);
  }


  @Get()
  findAll() {
    return this.messageService.findAll();
  }


  @Delete(':id')
  remove(@Param('id') id: string, @Query('fileName') fileName: string) {
    return this.messageService.remove(+id, fileName);
  }
}
