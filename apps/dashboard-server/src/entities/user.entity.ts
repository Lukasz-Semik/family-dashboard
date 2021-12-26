import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { FamilyEntity } from './family.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  public email: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public password: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public firstName: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 255,
  })
  public middleName: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public lastName: string;

  @Column({
    type: 'timestamp with time zone',
  })
  public dob: Date;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public gender: string;

  @Column({
    type: 'boolean',
  })
  public isFamilyHead: boolean;

  @Column({
    type: 'boolean',
  })
  public hasFinanceModuleAccess: boolean;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public memberType: string;

  @ManyToOne(() => FamilyEntity, (family) => family.users)
  family: FamilyEntity;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: string;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: string;
}
