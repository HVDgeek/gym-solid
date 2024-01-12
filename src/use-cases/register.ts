import { UsersRepository } from "@/repositories/users-repository";
import { hash } from "bcryptjs";

interface UserRegisterRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({ email, name, password }: UserRegisterRequest) {
    const password_hash = await hash(password, 6);

    const userAlreadyExists = await this.userRepository.findByEmail(email);

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
