import { IAutonomous } from "../User/Autonomous/IAutonomous";
import { IPost } from "../Post/IPost";

export interface IInterest {
    id: number;
    interest: IAutonomous[];
    post: IPost['id']
}