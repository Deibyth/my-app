import { UserLocalRepositoryImp } from
'../../../../node-js/data/repositories/UserLocalrepository';
const { getUser } = new UserLocalRepositoryImp();
export const GetUserLocalUseCase = async() => {
return await getUser();
}