import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    return this.users.find((x) => x.id === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((x) => x.email === email);
  }

  turnAdmin(receivedUser: User): User {
    if (receivedUser.admin) {
      throw new Error("User is already admin");
    }
    // eslint-disable-next-line no-param-reassign
    receivedUser.admin = !receivedUser.admin;

    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
