import React, { createContext, ReactNode, useContext, useState } from "react";
import { IClientRegister } from "../../../../interfaces/User/CLient/IClientRegister";

export interface IClientAuthRegister {
  newClient: IClientRegister | null;
  setNewClient: React.Dispatch<React.SetStateAction<IClientRegister | null>>;
}
interface ClientAuthRegisterProvider {
  children: ReactNode;
}

export const ClientAuthRegisterContext =
  createContext<IClientAuthRegister | null>(null);

export const ClientAuthRegisterProvider = ({
  children,
}: ClientAuthRegisterProvider) => {
  const [newClient, setNewClient] = useState<IClientRegister | null>(null);

  

  return (
    <ClientAuthRegisterContext.Provider value={{ newClient, setNewClient }}>
      {children}
    </ClientAuthRegisterContext.Provider>
  );
};
