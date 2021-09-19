import { v4 as uuidV4 } from "uuid";

class User {
  constructor() {
    this.id = uuidV4();
    this.admin = false;
  }

  id: string;

  name: string;

  admin: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;
}

export { User };
