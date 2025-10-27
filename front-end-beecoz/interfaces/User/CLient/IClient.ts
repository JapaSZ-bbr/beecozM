import { ITypeUser } from "../ITypeUser";

export interface IClient {
    id: number;
    profile: {
        id: number;
        biography: string;
    };
    login: string;
    typeId: ITypeUser['id'];
    name: string;
    lastName: string;
    sex: 'Male' | 'Female';
    birthDate: string;
    CPF: string;
    profileImage: string;
    clientType: 'Client'
}