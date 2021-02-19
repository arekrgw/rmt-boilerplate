import { useQuery } from 'react-query';
import Queries from '@api/queries';

export const usePosts = () => {
  return useQuery(...Queries.postsQuery());
};
