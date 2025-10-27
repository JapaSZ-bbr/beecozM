import React, { createContext, ReactNode, useState } from "react";
import { IAutonomousRegister } from "../../../../interfaces/User/Autonomous/IAutonomousRegister";

export interface IAutonomousAuthRegister {
  newAutonomous: IAutonomousRegister | null;
  setNewAutonomous: React.Dispatch<React.SetStateAction<IAutonomousRegister | null>>;
}
interface AutonomousAuthRegisterProviderProps {
  children: ReactNode;
}

export const AutonomousAuthRegisterContext =
  createContext<IAutonomousAuthRegister | null>(null);

export const AutonomousAuthRegisterProvider = ({
  children,
}: AutonomousAuthRegisterProviderProps) => {
  const [newAutonomous, setNewAutonomous] = useState<IAutonomousRegister | null>(null);

  

  return (
    <AutonomousAuthRegisterContext.Provider value={{ newAutonomous, setNewAutonomous }}>
      {children}
    </AutonomousAuthRegisterContext.Provider>
  );
};
