import { UserLocalRepositoryImp } from
'../../../../node-js/data/repositories/UserLocalrepository';

const { remove } = new UserLocalRepositoryImp();
export const RemoveUserLocalUseCase = async () => {
return await remove();
}
