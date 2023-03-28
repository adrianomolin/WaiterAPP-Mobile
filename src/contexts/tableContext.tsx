import { createContext, ReactNode, useState } from 'react';

interface TableContextProps {
  selectedTable: string,
  handleSaveTable: (table: string) => void;
  isTableModalVisible: boolean,
  handleModalVisibility: (val: boolean) => void;
}

interface TableProviderProps {
  children: ReactNode
}


export const TableContext = createContext({} as TableContextProps);

export function TableProvider({ children }: TableProviderProps) {
  const [selectedTable, setSelectedTable] = useState('');
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleModalVisibility(val: boolean) {
    setIsTableModalVisible(val);
  }

  return (
    <TableContext.Provider value={{
      selectedTable,
      handleSaveTable,
      isTableModalVisible,
      handleModalVisibility
    }}>
      {children}
    </TableContext.Provider>
  );
}
