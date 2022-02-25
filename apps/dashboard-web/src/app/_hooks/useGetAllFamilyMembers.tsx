import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';

import { GetAllFamilyMembers } from '@family-dashboard/fe-libs/api-graphql';
import { CTFamilyAllMembersResponse } from '@family-dashboard/global/types';
import { webStoreFamilyActions } from '@family-dashboard/web-libs/store';

export function useGetAllFamilyMembers() {
  const dispatch = useDispatch();

  const { loading } = useQuery<{
    getAllFamilyMembers: CTFamilyAllMembersResponse;
  }>(GetAllFamilyMembers, {
    fetchPolicy: 'network-only',
    onCompleted: (responseData) => {
      dispatch(
        webStoreFamilyActions.setFamilyMembers(responseData.getAllFamilyMembers)
      );
    },
  });

  return {
    isLoading: loading,
  };
}
