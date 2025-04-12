import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuClosureEntity, MenuEntity } from '@/entity/menu.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([MenuClosureEntity, MenuEntity])],
  exports: [TypeOrmModule],
})
export default class GlobalEntitiesModule {}
