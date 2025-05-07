import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('AppController12345');
  }

  @Get()
  getData() {
    return this.appService.getData();
  }
}
