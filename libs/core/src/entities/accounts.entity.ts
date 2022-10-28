import { Entity } from 'typeorm';
import { DateDeleteEntity } from './with-date.entity';
import { WithId } from './with-id.entity';

@Entity('accounts')
export class Account extends WithId(DateDeleteEntity) {}
