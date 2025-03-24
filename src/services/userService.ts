import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

const userRepository = AppDataSource.getRepository(User);

export class UserService {
  static async getAllUsers() {
    return await userRepository.find();
  }

  static async getUserById(id: number) {
    return await userRepository.findOneBy({ id });
  }
}
