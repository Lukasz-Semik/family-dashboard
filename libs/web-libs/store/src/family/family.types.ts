import { APIGetFamilyDisplay } from '@family-dashboard/fe-libs/api-graphql';

export interface WSFamilyState {
  data: Omit<APIGetFamilyDisplay, 'currentUser'>;
}
