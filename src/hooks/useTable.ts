import { useContext } from 'react';
import { TableContext } from '../contexts/tableContext';

export function useTable() {
  const context = useContext(TableContext);

  return context;
}
