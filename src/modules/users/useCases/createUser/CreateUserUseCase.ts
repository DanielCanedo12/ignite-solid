import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailAlreadyRegistred = this.usersRepository.findByEmail(email);

    if (emailAlreadyRegistred) {
      throw new Error("User already registred");
    }
    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
