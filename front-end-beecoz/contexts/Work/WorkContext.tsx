import React, { createContext, ReactNode, useState } from "react";

export interface Work {
    id: number;
    status: "Progress" | "Open" | "Completed";
    interest: {
      id: number;
      publicationId: number;
      autonomousId: number;
      autonomous: {
        id: number;
        login: string;
      };
      publication: {
        id: number;
        title: string;
        description: string;
        region: string;
        data: string;
        servTypeId: 1;
        clientId: 1;
        status: "Open" | "Progress" | "Completed";
        client: {
          id: number;
          login: string;
        };
      };
    };
}

export interface IWorkContext {
  works: Work[],
  setWorks: React.Dispatch<React.SetStateAction<Work[]>>
}

export const WorkContext = createContext<IWorkContext | null>(null)

export const WorkProvider = ({children}: {children: ReactNode}) => {
    const [works, setWorks] = useState<Work[]>([]);

    return (
        <WorkContext.Provider value={{works, setWorks}}>
            {children}
        </WorkContext.Provider>
    )
}
