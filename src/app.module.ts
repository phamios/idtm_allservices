import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'containers-us-west-95.railway.app',
      port: 6404,
      username: 'root',
      password: 'P0iIFA8cc9hcG7GwOwtO',
      database: 'railway',
      autoLoadEntities: true,
      // entities: [UsersEntity],
      synchronize: true,
    }),
    UsersModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
}
