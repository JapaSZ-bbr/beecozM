import { Client } from "@prisma/client";
import { Request, Response } from "express";
import ClientProfileRepository from "../../../repositories/Client/ClientProfile/ClientProfileRepository";
import ClientRepository from "../../../repositories/Client/ClientRepository";
import TypeUserRepository from "../../../repositories/TypeUser/TypeUserRepository";
import { hashPassword } from "../../../utils/hashPassword";
import { generateToken } from "../../../utils/generateToken";

class ClientController {
  async register(req: Request, res: Response) {
    const {
      name,
      login,
      password,
      lastName,
      gender,
      bornDate,
      cpf,
      biography,
    }: Client & {
      biography: string;
    } = req.body;

    const profile = await ClientProfileRepository.create({
      data: { biography },
    });
    const typeId = await TypeUserRepository.findByLevel({
      level: gender === "Female" ? "Queen" : "Beginner",
    });

    const client = await ClientRepository.create({
      data: {
        name,
        lastName,
        gender,
        bornDate: new Date(bornDate),
        cpf,
        login,
        password: await hashPassword(password),
        profileId: profile.id,
        typeId,
      },
    });

    return res.json({
      client,
      token: generateToken("id", client.id),
      clientType: "Client",
    });
  }

  async read(req: Request, res: Response) {
    const client = await ClientRepository.read();

    return res.json(client);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const clientExists = await ClientRepository.findClientById({
      id: parsedId,
    });
    if (!clientExists) {
      return res.status(400).json({ message: "Client not found" });
    }

    await ClientRepository.delete({ id: parsedId });

    return res.status(200).json({ message: "Client deleted successfully" });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const { name, login, password, lastName }: Client = req.body;

    const clientExists = await ClientRepository.findClientById({
      id: parsedId,
    });

    if (!clientExists) {
      return res.status(400).json({ message: "Client not found" });
    }

    const client = await ClientRepository.update({
      id: parsedId,
      data: { name, lastName, login, password: await hashPassword(password) },
    });

    return res.json({ client });
  }

  async changePassword(req: Request, res: Response) {
    const { id } = req.params;
    const {
      oldPassword,
      newPassword,
    }: { oldPassword: string; newPassword: string } = req.body;
    const parsedId = Number(id);

    const clientsExists = await ClientRepository.findClientById({
      id: parsedId,
    });
    if (!clientsExists) {
      return res.status(400).json({ message: "Client not found" });
    }

    const passwordMatch = (await clientsExists.password) === oldPassword;
    if (!passwordMatch) {
      return res.status(400).json({ message: "Password does not match" });
    }

    await ClientRepository.updatePassword({
      id: parsedId,
      password: await hashPassword(newPassword),
    });

    return res.status(200).json({ message: "Password updated" });
  }

  async loginExists(req: Request, res: Response) {
    const {login} = req.body

    console.log('1aaaaaaaaaaaaaaa', login)

    const clientsExists = await ClientRepository.findClientByLogin({
      login,
    });

    if (clientsExists) {
      return res.status(400).json({ message: "Login já existe" })
    }

    return res.status(200).send()
  }
}

export default new ClientController();
