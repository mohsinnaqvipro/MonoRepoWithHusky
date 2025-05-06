import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const test: any = () => {
      console.log('Hello');
    };
    test();
  }

  @Get()
  getData() {
    return this.appService.getData();
  }
}
