import { IAutonomous } from "../User/Autonomous/IAutonomous";
import { IServiceType } from "./IServiceType";

export interface IService {
    id: number;
    autonomousId: IAutonomous['id'];
    serviceType: IServiceType['id']
}