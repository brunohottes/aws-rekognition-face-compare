import { ConfigModule } from '@nestjs/config';
import { CheckFaceModule } from './check-face/check-face.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ CheckFaceModule, ConfigModule.forRoot({isGlobal: true})]
})
export class AppModule { }
