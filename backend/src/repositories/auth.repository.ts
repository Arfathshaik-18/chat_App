import AppDataSource from "../data-source";
import { Users } from "../entities/Users";

export const userRepository = AppDataSource.getRepository(Users);

export const findUserByEmail = async (email: string) => {
    return await userRepository.findOne({
        where : {email}
    })
}

export const findUserById = async (id: number) => {
    return await userRepository.findOne({
        where: {id}
    })
}
