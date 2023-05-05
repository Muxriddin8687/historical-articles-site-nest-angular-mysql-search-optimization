import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { GroupService } from './group.service';
import { FilterModel } from '../area/filter.model';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  create(@Body() createData: FilterModel) {
    return this.groupService.create(createData);
  }

  @Get()
  findAll() {
    return this.groupService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: FilterModel) {
    return this.groupService.update(+id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupService.remove(+id);
  }
}
