import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';

import { GetAllFamilyMembers } from '@family-dashboard/fe-libs/api-graphql';
import { fdStoreFamilyActions } from '@family-dashboard/fe-libs/fd-store';
import { CTFamilyAllMembersResponse } from '@family-dashboard/global/types';

export function useGetAllFamilyMembers() {
  const dispatch = useDispatch();

  const { loading } = useQuery<{
    getAllFamilyMembers: CTFamilyAllMembersResponse;
  }>(GetAllFamilyMembers, {
    fetchPolicy: 'network-only',
    onCompleted: (responseData) => {
      dispatch(
        fdStoreFamilyActions.setFamilyMembers(responseData.getAllFamilyMembers)
      );
    },
  });

  return {
    isLoading: loading,
  };
}
