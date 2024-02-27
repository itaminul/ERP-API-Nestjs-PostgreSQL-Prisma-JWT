import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';

@Injectable()
export class ImageResizeService {
  async resizeImage(imagePath: string, width: number, height: number): Promise<Buffer> {
    const resizedImageBuffer = await sharp(imagePath)
      .resize({ width, height })
      .toBuffer();
    return resizedImageBuffer;
  }
}