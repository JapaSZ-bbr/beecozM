import { createContext, ReactNode, useEffect, useState } from "react";
import { IPost } from "../../../interfaces/Post/IPost";
import { privateApi } from "../../../services/privateApi";
import * as SecureStore from 'expo-secure-store'

export interface IClientPublicationContext {
  publications: IPost[];
  setPublications: React.Dispatch<React.SetStateAction<IPost[]>>;
  onAddPublication: (publication: {
    title: string;
    description: string;
    servTypeId: string;
    data: string;
    region: string;
  }) => void;
}

interface ClientPublicationProviderProps {
  children: ReactNode;
}

export const ClientPublicationContext = createContext<IClientPublicationContext | null>(
  null
);

export const ClientPublicationProvider = ({ children }: ClientPublicationProviderProps) => {
  const [publications, setPublications] = useState<IPost[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const {
        data: { publications },
      } = await privateApi.get<{ publications: Array<IPost> }>(
        "/publication/read",
        {
          headers: {
            authorization: (await SecureStore.getItemAsync("token")) as string,
          },



        }
        
      );

      setPublications(publications);
    };


    
    fetch();
    
  }, []);

  const onAddPublication = async (publication: {
    title: string;
    description: string;
    servTypeId: string;
    data: string;
    region: string;
  }) => {
    const { data } = await privateApi.post<{ publication: Array<IPost> }>(
      "/publication/create",
      {
        title: publication.title,
        description: publication.description,
        servTypeId: publication.servTypeId,
        data: publication.data,
        region: publication.region,
        
      },
      {
        headers: {
          authorization: (await SecureStore.getItemAsync("token")) as string,
        }
      }
    );

    console.log(data);

    setPublications((prev: any) => [
      {
        ...data.publication,
      },
      ...prev,
    ]);
  };

  return (
    <ClientPublicationContext.Provider
      value={{ publications, setPublications, onAddPublication }}
    >
      {children}
    </ClientPublicationContext.Provider>
  );
};
