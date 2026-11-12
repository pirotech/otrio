import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import type { User } from '@otrio/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  getUser(): User {
    return { id: '1', email: 'hello@otrio.io' };
  }
}
