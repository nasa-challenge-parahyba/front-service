import React, { createContext, useContext, useState } from 'react';

const SelectionContext = createContext();

export const useSelection = () => {
    return useContext(SelectionContext);
};

export const SelectionProvider = ({ children }) => {
    const [selectedGas, setSelectedGas] = useState({ CO2: false, CH4: false });

    const toggleGasSelection = (gas) => {
        setSelectedGas((prev) => ({ ...prev, [gas]: !prev[gas] }));
    };

    return (
        <SelectionContext.Provider value={{ selectedGas, toggleGasSelection }}>
            {children}
        </SelectionContext.Provider>
    );
};