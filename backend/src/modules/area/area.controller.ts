import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AreaService } from './area.service';
import { FilterModel } from './filter.model';

@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Post()
  create(@Body() createData: FilterModel) {
    return this.areaService.create(createData);
  }

  @Get()
  findAll() {
    return this.areaService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: FilterModel) {
    return this.areaService.update(+id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.areaService.remove(+id);
  }
}
