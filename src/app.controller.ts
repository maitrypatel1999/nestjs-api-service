import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@UseGuards(AuthGuard('basic'))
export class AppController {
  @Get()
  getHello(): string {
    return 'Nestjs Api Service!';
  }
}
