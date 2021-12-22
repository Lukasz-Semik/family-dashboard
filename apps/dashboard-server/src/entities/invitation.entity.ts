import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { FamilyEntity } from './family.entity';

@Entity('invitation')
export class InvitationEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  public email: string;

  @Column({
    nullable: true,
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
    nullable: true,
    type: 'varchar',
    length: 255,
  })
  public lastName: string;

  @Column({
    nullable: true,
    type: 'timestamp with time zone',
  })
  public dob: Date;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public gender: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public familyName: string;

  @ManyToOne(() => FamilyEntity, (family) => family.invitations)
  family: FamilyEntity;

  @Column({
    type: 'timestamp with time zone',
  })
  public validTo: Date;

  @Column({
    type: 'varchar',
    length: 4,
  })
  public code: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public inviterName: string;
}
