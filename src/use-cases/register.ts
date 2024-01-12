import { prisma } from "@/lib/prisma";
import { PrismaUserRepository } from "@/repositories/prisma-user-repository";
import { hash } from "bcryptjs";

interface UserRegisterRequest {
  name: string;
  email: string;
  password: string;
}

export async function registerUseCase({
  email,
  name,
  password,
}: UserRegisterRequest) {
  const password_hash = await hash(password, 6);

  const userAlreadyExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userAlreadyExists) {
    throw new Error("E-mail already exists.");
  }

  const prismaUsersRepository = new PrismaUserRepository();

  await prismaUsersRepository.create({
    email,
    name,
    password_hash,
  });
}
