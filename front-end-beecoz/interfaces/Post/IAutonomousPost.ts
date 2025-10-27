export interface IAutonomousPost {
    id: number;
    title: string;
    description: string;
    region: string;
    data: Date;
    serviceTypeId: number;
    interest: [
        {
            autonomousId: number,
        }
    ]
}