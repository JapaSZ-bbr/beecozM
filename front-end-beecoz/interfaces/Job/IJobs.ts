import { IEvaluation } from "./IEvaluation";
import { IInterest } from "./IInterested";

export interface IJobs {
    id: number;
    idEvaluation: IEvaluation['id'];
    idInterest: IInterest['id'];
    status: 'Progress' |'Completed' | 'Open';
}