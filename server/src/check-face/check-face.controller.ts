import { 
  Controller, 
  Post,
  UploadedFile,
  UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CheckFaceService } from './check-face.service';

@Controller('check-face')
export class CheckFaceController {

  constructor(private readonly checkFaceService: CheckFaceService){}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async checkFace(@UploadedFile() file:Express.Multer.File ){
    return await this.checkFaceService.check(file);
  }

}
