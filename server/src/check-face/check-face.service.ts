import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { RekognitionClient, DetectFacesCommand, DetectFacesCommandOutput  } from "@aws-sdk/client-rekognition";

@Injectable()
export class CheckFaceService {
  private readonly client = new RekognitionClient({ 
    region: this.configService.getOrThrow('AWS_REGION')
  });

  constructor(private readonly configService: ConfigService){}

  async check(file:Express.Multer.File): Promise<DetectFacesCommandOutput>{

    const params = {
      "Attributes": [ "ALL"],
      "Image": { 
         "Bytes": file.buffer
      }
    };
    const command = new DetectFacesCommand(params);

    try {
      const response: DetectFacesCommandOutput = await this.client.send(command);
      return response;
      
    } catch (error) {
      console.log(error);
    }
  }

 }
