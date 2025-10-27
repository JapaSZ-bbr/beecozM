import { IClient } from "../User/CLient/IClient";
import { IServiceType } from "../Service/IServiceType";

export interface IPost {
  id: number;
  serviceType: IServiceType["id"];
  clientId: IClient["id"];
  title: string;
  description: string;
  photo: string;
  date: string;
  region: string;
  tags: IServiceType["id"];
  type: string;
  status: 'Progress' | 'Open' | 'Completed';
  interest: {
    id: number;
    publicationId: number;
    autonomousId: number;
    autonomous: {
      id: number;
      name: string;
      login: string;
      inChat: boolean;
      type: { level: string };
    };
  }[];
}
