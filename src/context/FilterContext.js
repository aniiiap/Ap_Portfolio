import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};

export const FilterProvider = ({ children }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <FilterContext.Provider value={{ selectedSkill, setSelectedSkill }}>
      {children}
    </FilterContext.Provider>
  );
};

