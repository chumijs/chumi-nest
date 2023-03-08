import { Service } from 'chumi';
import { Context } from 'koa';

@Service
export class AppService {
  ctx: Context;

  getHello(): string {
    return 'Hello World!' + this.ctx.path;
  }
}
