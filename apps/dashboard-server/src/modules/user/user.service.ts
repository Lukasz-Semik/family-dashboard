import { CTGender } from '@family-dashboard/common-types';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@dashboard-server/entities/user.entity';
import { throwError } from '@dashboard-server/helpers/throwError';
import { InitialAppStateDto } from '@dashboard-server/schema';
import { serializeFamily } from '@dashboard-server/serializators/family.serializator';
import { serializeCurrentUser } from '@dashboard-server/serializators/user.serializator';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async getUserInitialAppState(id: string): Promise<InitialAppStateDto> {
    try {
      const foundUser = await this.userRepository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.family', 'family')
        .where('user.id = :id', { id })
        .getOne();

      if (!foundUser) {
        throwError(HttpStatus.NOT_FOUND, { msg: 'user not exists' });
      }

      const { family, ...currentUser } = foundUser;

      console.log(foundUser);

      console.log({
        currentUser: {
          email: currentUser.email,
          firstName: currentUser.firstName,
          middleName: currentUser.middleName,
          lastName: currentUser.lastName,
          gender: currentUser.gender as CTGender,
          dob: currentUser.dob,
        },
        family: {
          id: family.id,
          name: family.name,
        },
      });

      return {
        currentUser: serializeCurrentUser(foundUser),
        family: serializeFamily(foundUser.family),
      };
    } catch (err) {
      throwError(HttpStatus.INTERNAL_SERVER_ERROR, err);
    }
  }
}
