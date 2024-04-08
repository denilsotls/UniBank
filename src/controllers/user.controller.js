import { createUser, getAll, deliteUser } from "../repositorys/user.repository";

export const create = async (req, res) => {
    try{
        const user = await createUser(req.body);
        res.status(200).send(user)
    }catch(e){
        res.status(400).send(e)

    }
};

export const get = async (req,res)=>{
    try{
        const users=await getAll();
        res.status(200).send(users)
    }catch(e){
        res.status(400).send(e);
    }
}

export const remove = async (req, res) => {
    try{
        await deliteUser(Number(req.params.id));
        res.status(200).send();
    }catch(e){
        res.status(400).send(e);
    }
};
