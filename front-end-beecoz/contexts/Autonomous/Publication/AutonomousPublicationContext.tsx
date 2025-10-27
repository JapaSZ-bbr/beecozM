import { createContext, ReactNode, useEffect, useState } from "react";
import { IAutonomousPost } from "../../../interfaces/Post/IAutonomousPost";
import { privateApi } from "../../../services/privateApi";
import * as SecureStore from "expo-secure-store";

export interface IAutonomousPublicationContext {
  publications: IAutonomousPost[];
  setPublications: React.Dispatch<React.SetStateAction<IAutonomousPost[]>>;
  interest: { id: number; publicationId: number; autonomousId: number } | null;
  setInterest: React.Dispatch<React.SetStateAction<{ id: number; publicationId: number; autonomousId: number } | null>>
  joinInterest: (idAutonomous: number, idPublication: number) => void;
  exitInterest: (idAutonomous: number, idPublication: number, idInterest: number) => void
}

interface AutonomousPublicationProviderProps {
  children: ReactNode;
}

export const AutonomousPublicationContext =
  createContext<IAutonomousPublicationContext | null>(null);

export const AutonomousPublicationProvider = ({
  children,
}: AutonomousPublicationProviderProps) => {
  const [publications, setPublications] = useState<IAutonomousPost[]>([]);
  const [interest, setInterest] = useState<{ id: number; publicationId: number; autonomousId: number } | null>(null);

  const joinInterest = async (idAutonomous: number, idPublication: number) => {
    const {data: {interest}} = await privateApi.post<{interest: { id: number; publicationId: number; autonomousId: number }}>(`/interest/join/${idAutonomous}/${idPublication}`, {
      headers: {
        authorization: (await SecureStore.getItemAsync("token")) as string,
      },
    });

    setInterest(interest)
  };
  const exitInterest = async (idAutonomous: number, idPublication: number, idInterest: number) => {
    await privateApi.post(`/interest/exit/${idAutonomous}/${idPublication}/${idInterest}`, {
      headers: {
        authorization: (await SecureStore.getItemAsync("token")) as string,
      },
    });
    

    setInterest(null)
  }

  useEffect(() => {
    const fetch = async () => {
      const { data } = await privateApi.get<IAutonomousPost[]>(
        "/autonomous/publications",
        {
          headers: {
            authorization: (await SecureStore.getItemAsync("token")) as string,
          },
        
          
        }
      );


      console.log(data);


      setPublications(data);
    };

    fetch();
  }, []);

  return (
    <AutonomousPublicationContext.Provider
      value={{ publications, setPublications, joinInterest, interest, setInterest, exitInterest }}
    >
      {children}
    </AutonomousPublicationContext.Provider>
  );
};
