// src/services/user.service.ts

// Exemplo de um array simulando um banco de dados temporário
const usersDB: User[] = [{
    id: 2,
    username: 'Mendes',
    email: 'vanei@gamsil'
}];

export interface User {
  id: number;
  username: string;
  email: string;
}

export class UserService {
  private nextId = 1;

  getAllUsers(): User[] {
    return usersDB;
  }

  getUserById(id: number): User | undefined {
    return usersDB.find((user) => user.id === id);
  }

  createUser(user: User): User {
    const newUser = { ...user, id: this.nextId++ };
    usersDB.push(newUser);
    return newUser;
  }
}

