import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('AppController123');
  }

  @Get()
  getData() {
    return this.appService.getData();
  }
}
