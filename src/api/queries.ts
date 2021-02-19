import { QueryClient, QueryFunction, QueryKey } from 'react-query';
import { fetchPosts } from './queryFunctions';

type QueryFunctionTuple<T> = (param: T) => [QueryKey, QueryFunction];

class Queries {
  queryClient = new QueryClient();

  postsQuery: QueryFunctionTuple<void> = () => ['posts', fetchPosts];
}

export default new Queries();
