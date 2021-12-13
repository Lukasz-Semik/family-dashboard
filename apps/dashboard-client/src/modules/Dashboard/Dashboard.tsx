import { useLazyQuery, useQuery } from '@apollo/client';
import dayjs from 'dayjs';

import { GetUserInitialAppState } from '@family-dashboard/fe-libs/api-graphql';
import { FULL_DATE_FORMAT } from '@family-dashboard/global/const';

export function Dashboard() {
  const { data } = useQuery(GetUserInitialAppState, {
    onCompleted: () => console.log('main'),
  });
  console.log(data);

  const [f, { data: d2 }] = useLazyQuery(GetUserInitialAppState, {
    onCompleted: () => console.log('lazy'),
  });
  console.log({ d2 });
  console.log(
    // data.getUserInitialAppState?.currentUser
    dayjs(data?.getUserInitialAppState?.currentUser?.dob).format(
      FULL_DATE_FORMAT
    )
  );
  return (
    <div>
      Dashboard <button onClick={() => f()}>click</button>
    </div>
  );
}
