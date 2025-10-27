import {
  PrismaClient,
  Autonomous,
  PrismaPromise,
  Prisma,
  AutonomousProfile,
  Service,
} from "@prisma/client";
import {
  AutonomousRepositoryCreateDTO,
  AutonomousRepositoryDeleteDTO,
  AutonomousRepositoryFindAutonomousByIdDTO,
  AutonomousRepositoryFindAutonomousByLoginDTO,
  AutonomousRepositoryUpdateDTO,
  AutonomousRepositoryUpdatePasswordDTO,
} from "../../interfaces/DTOs/repositories/Autonomous/AutonomousRepositoryDTO";
import { IAutonomousRepository } from "../../interfaces/repositories/Autonomous/IAutonomousRepository";
const prisma = new PrismaClient();

class AutonomousRepository implements IAutonomousRepository {
  async create({
    data: { autonomousData, serviceData },
  }: AutonomousRepositoryCreateDTO): Promise<Autonomous> {
    const autonomous = await prisma.autonomous.create({
      data: {
        name: autonomousData.name,
        lastName: autonomousData.lastName,
        login: autonomousData.login,
        password: autonomousData.password,
        gender: autonomousData.gender,
        bornDate: autonomousData.bornDate,
        cpf: autonomousData.cpf,
        cnpj: autonomousData.cnpj,
        typeId: autonomousData.typeId,
        profileId: autonomousData.profileId,

        service: {
          create: {
            servTypeId: serviceData,
          },
        },
      },
      include: {
        service: true,
        profile: true,
      },
    });
    return autonomous;
  }
  async read(): Promise<PrismaPromise<Autonomous[]>> {
    const autonomous = await prisma.autonomous.findMany({
      include: {
        profile: true,
        service: true,
      },
    });
    return autonomous;
  }
  async findAutonomousById({
    id,
  }: AutonomousRepositoryFindAutonomousByIdDTO): Promise<(Autonomous & {
    profile: AutonomousProfile;
    service: Service[];
}) | null> {
    const autonomousId = await prisma.autonomous.findUnique({
      where: {
        id,
      },
      include: {
        profile: true,
        service: true,
      },
    });
    return autonomousId;
  }
  async update({
    id,
    data: { autonomousData, serviceData, profileData },
  }: AutonomousRepositoryUpdateDTO): Promise<Autonomous> {
    const newAutonomous = await prisma.autonomous.update({
      where: {
        id,
      },
      data: {
        ...autonomousData,

        service: {
          update: {
            data: {
              servTypeId: serviceData,
            },
            where: {
              autonomousId: id,
            },
          },
        },

        profile: {
          update: {
            biography: profileData.biography,
          },
        },
      },
      include: {
        profile: true,
        service: true,
      },
    });
    return newAutonomous;
  }
  async delete({ id }: AutonomousRepositoryDeleteDTO): Promise<Autonomous> {
    console.log("repo", id);

    const deletedAutonomous = await prisma.autonomous.delete({
      where: {
        id,
      },
    });

    return deletedAutonomous;
  }
  async findAutonomousByLogin({
    login,
  }: AutonomousRepositoryFindAutonomousByLoginDTO): Promise<Autonomous | null> {
    const autonomousId = await prisma.autonomous.findUnique({
      where: {
        login,
      },
    });
    return autonomousId;
  }

  async updatePassword({
    id,
    password,
  }: AutonomousRepositoryUpdatePasswordDTO): Promise<
    Prisma.Prisma__AutonomousClient<{
      password: string;
    }>
  > {
    const newPassword = await prisma.autonomous.update({
      where: {
        id,
      },
      data: {
        password,
      },
      select: {
        password: true,
      },
    });
    return newPassword;
  }
}

export default new AutonomousRepository();
