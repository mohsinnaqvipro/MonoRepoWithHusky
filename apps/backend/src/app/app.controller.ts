import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface User {
  name: string;
  age: number;
  email: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('AppController1234');
    const user: User = {
      name: 'mohsin',
      age: 29,
      email: 'mohsin@gmail.com',
    };
    console.log(user, 123);
  }

  @Get()
  getData() {
    return this.appService.getData();
  }
}
