// 'use client'

// // /contexts/CheckboxContext.tsx
// import React, { createContext, useState, useContext } from 'react'

// type CheckboxState = Record<number, boolean>

// interface CheckboxContextType {
//   checkboxState: CheckboxState
//   setCheckboxState: React.Dispatch<React.SetStateAction<CheckboxState>>
// }

// const initialCheckboxState: CheckboxState = {
//   1: true,
//   2: true,
//   3: true,
// }

// const CheckboxContext = createContext<CheckboxContextType>({
//   checkboxState: initialCheckboxState,
//   setCheckboxState: () => {},
// })

// export const CheckboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [checkboxState, setCheckboxState] = useState<CheckboxState>(initialCheckboxState)

//   return <CheckboxContext.Provider value={{ checkboxState, setCheckboxState }}>{children}</CheckboxContext.Provider>
// }

// export const useCheckboxContext = () => useContext(CheckboxContext)
