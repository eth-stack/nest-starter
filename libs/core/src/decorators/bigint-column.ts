import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import BigNumber from 'bignumber.js';
import { Type } from 'class-transformer';
import { Column, ColumnOptions, ValueTransformer } from 'typeorm';
import { BigNumberTransform } from './bignumber-transform';

export const bigNumberTransformer: ValueTransformer = {
  from(value: string): BigNumber {
    return value ? new BigNumber(value) : null;
  },

  to(value: BigNumber): string {
    return value?.toString();
  },
};

export function NumberColumn(
  type: 'bigint' | 'int' | 'decimal' | 'varchar' = 'decimal',
  opts?: ColumnOptions,
) {
  const colFn = Column({
    type,
    transformer: bigNumberTransformer,
    ...opts,
  });
  const apiFn = opts?.nullable
    ? ApiPropertyOptional({ type: 'string', format: 'number' })
    : ApiProperty({ type: 'string', format: 'number' });

  return function (target: any, key: string) {
    colFn(target, key);
    BigNumberTransform()(target, key);
    apiFn(target, key);
    Type(() => String, {})(target, key);
  };
}
