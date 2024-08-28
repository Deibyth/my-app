import { ResponseApiDelivery } from "../../../node-js/data/sources/remote/models/ResponseApiDelivery";
import { User } from "../entities/User";

export interface AutoRepository {
  login(email: string, password: string): Promise<ResponseApiDelivery>;
  register(user: User): Promise<ResponseApiDelivery>;
}

