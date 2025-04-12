import { Module } from '@nestjs/common';
import { TypeOrmConfigModule, GlobalConfigModule } from '@/utils/conig.module';
import GlobalEntitiesModule from './db.module';

@Module({
  imports: [TypeOrmConfigModule, GlobalConfigModule, GlobalEntitiesModule],
  controllers: [],
  providers: [],
  exports: [],
})
export default class AppModule {}
