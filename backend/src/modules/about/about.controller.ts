import { Controller, Get, Post, Body } from '@nestjs/common';
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) { }

  @Post()
  create(@Body() createData) {
    return this.aboutService.create(createData);
  }

  @Get()
  findAll() {
    return this.aboutService.findAll();
  }
}
