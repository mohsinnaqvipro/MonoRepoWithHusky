import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('AppController123');
    const user = {
      name: 'mohsin',
      age: 29,
      email: 'mohsin@gmail.com',
    };
    console.log(user);
  }

  @Get()
  getData() {
    return this.appService.getData();
  }
}
