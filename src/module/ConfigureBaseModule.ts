import { Module } from '@nestjs/common';
import { MenusController } from '@/controller/menusController';
import { MenusServices } from '@/service/menusServices';

@Module({
  controllers: [MenusController],
  providers: [MenusServices],
  exports: [MenusServices],
})
export default class ConfigureBaseModule {}
