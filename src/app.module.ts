import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       load: [configuration],
//     }),
//   ],
// })
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQLHOST,
      port: parseInt(process.env.MYSQLPORT) || 3306,
      username: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'containers-us-west-95.railway.app',
    //   port: 6404,
    //   username: 'root',
    //   password: 'P0iIFA8cc9hcG7GwOwtO',
    //   database: 'railway',
    //   autoLoadEntities: true,
    //   // entities: [User],
    //   synchronize: true,
    // }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
}
