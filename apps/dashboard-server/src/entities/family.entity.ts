import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { InvitationEntity } from './invitation.entity';
import { UserEntity } from './user.entity';

@Entity('family')
export class FamilyEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 255 })
  public name: string;

  @OneToMany(() => UserEntity, (user) => user.family)
  users: UserEntity[];

  @OneToMany(() => InvitationEntity, (invitation) => invitation.family)
  invitations: InvitationEntity[];

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: string;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: string;
}
