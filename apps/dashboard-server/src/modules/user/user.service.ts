import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '../../entities/user.entity';
import { throwError } from '../../helpers/throwError';
import { InitialAppStateDto } from '../../schema';
import { serializeFamily } from '../../serializators/family.serializator';
import { serializeCurrentUser } from '../../serializators/user.serializator';

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
        throwError('user not exists');
      }

      // TODO: move serializators to resolver and keep convention - serialize only and alwyas in resolvers
      return {
        currentUser: serializeCurrentUser(foundUser),
        family: serializeFamily(foundUser.family),
      };
    } catch (err) {
      throwError(err.message);
    }
  }
}
