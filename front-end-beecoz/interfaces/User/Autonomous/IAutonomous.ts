import { ITypeUser } from "../ITypeUser";

export interface IAutonomous {
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
    CNPJ?: string;
    profileImage: string;
    clientType: 'Autonomous'
}