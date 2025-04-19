import { Controller, Post, Body, InternalServerErrorException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateMenuDto } from './dto';

@Controller('menus')
@ApiTags('菜单管理')
class MenusController {
  @Post('create')
  @ApiOperation({ summary: '新增菜单' })
  @ApiResponse({
    description: '新增菜单成功',
    type: 'string',
  })
  private createMenus(@Body() createMenuDto: CreateMenuDto) {
    if (!createMenuDto.code) {
      throw new InternalServerErrorException('菜单编码不能为空');
    }
    return '新增成功';
  }
}

export { MenusController };
