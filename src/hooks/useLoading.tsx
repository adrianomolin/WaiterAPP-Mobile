import { useContext } from 'react';
import { LoadingContext } from '../contexts/loadingContext';

export function useLoading() {
  const context = useContext(LoadingContext);

  return context;
}
