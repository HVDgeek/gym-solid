import { prisma } from "@/lib/prisma";
import { PrismaUserRepository } from "@/repositories/prisma-user-repository";
import { hash } from "bcryptjs";

interface UserRegisterRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterUseCase {
  constructor(private userRepository: any) {}

  async execute({ email, name, password }: UserRegisterRequest) {
    const password_hash = await hash(password, 6);

    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("E-mail already exists.");
    }

    await this.userRepository.create({
      email,
      name,
      password_hash,
    });
  }
}
