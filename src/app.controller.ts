import { Controller, Get } from '@nestjs/common';
import { AppService, helloWorldTest } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest(): helloWorldTest {
    return this.appService.getTest();
  }
}
