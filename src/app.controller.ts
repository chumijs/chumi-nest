import { Controller, Get, loadService, Query } from 'chumi';
import { AppService } from './app.service';

@Controller()
export class AppController {
  appService = loadService(AppService);

  @Get('/')
  getHello(@Query('name') name: string): string {
    return this.appService.getHello() + `${name}`;
  }
}
