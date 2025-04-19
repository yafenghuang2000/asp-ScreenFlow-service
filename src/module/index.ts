import { Module } from '@nestjs/common';
import { TypeOrmConfigModule, GlobalConfigModule } from '@/utils/conig.module';
import GlobalEntitiesModule from './db.module';
import ConfigureBaseModule from './ConfigureBaseModule';

@Module({
  imports: [TypeOrmConfigModule, GlobalConfigModule, GlobalEntitiesModule, ConfigureBaseModule],
  controllers: [],
  providers: [],
  exports: [],
})
export default class AppModule {}
