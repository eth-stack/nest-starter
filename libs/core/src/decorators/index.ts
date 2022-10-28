import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { SetMetadata } from '@nestjs/common';
import { IS_PUBLIC_KEY } from '../constants';

export * from './bigint-column';
export * from './bignumber-transform';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
