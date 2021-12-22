import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export interface CurrentLoggedInUserData {
  userId: string;
  familyId: string;
}

export const CurrentLoggedInUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);

    const user = ctx.getContext().req.user;
    return {
      userId: user.userId,
      familyId: user.familyId,
    };
  }
);
