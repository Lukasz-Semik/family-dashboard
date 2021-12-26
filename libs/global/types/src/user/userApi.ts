import { CTFamilyBaseData } from '../family/family';
import { CTUserBaseData } from './user';

export interface CTLoginResponse {
  accessToken: string;
}

export interface CTInitialAppStateResponse {
  currentUser: CTUserBaseData;
  family: CTFamilyBaseData;
}
