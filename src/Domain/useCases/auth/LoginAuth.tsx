import { AuthRepositoryImpl } from "../../../../node-js/data/repositories/AuthRepository";
const {login} = new AuthRepositoryImpl();
export const LoginAuthUseCase = async (email: string, password: string) => {
return await login(email, password);
}