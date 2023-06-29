import { CheckFaceService } from './check-face.service';
import { CheckFaceController } from './check-face.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [ 
        CheckFaceController,
    ],
    providers: [
        CheckFaceService
    ],
})
export class CheckFaceModule { }
