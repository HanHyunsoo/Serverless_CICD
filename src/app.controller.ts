import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello1')
  getHello1(): string {
    return 'Hello World!1';
  }

  @Get('/hello2')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/env')
  getEnv(): object {
    return {
      a: process.env.TEST1,
      b: process.env.TEST2,
    };
  }
}
