import { useLazyQuery, useQuery } from '@apollo/client';

import { GetUserInitialAppState } from '../../api/queries/user';

export function Dashboard() {
  const { data } = useQuery(GetUserInitialAppState, {
    onCompleted: () => console.log('main'),
  });
  console.log(data);

  const [f, { data: d2 }] = useLazyQuery(GetUserInitialAppState, {
    onCompleted: () => console.log('lazy'),
  });
  console.log({ d2 });
  return (
    <div>
      Dashboard <button onClick={() => f()}>click</button>
    </div>
  );
}
