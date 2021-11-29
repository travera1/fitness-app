import router from "../router";
import { Login } from "./users";

const session = {
    user: null,
    messages: [],
    toRoute: '/',
    async Login(email, password){

        try{
            const response = Login(email, password);

            this.user = response.user;

            router.push(this.toRoute);
        } catch (error){
            this.Error(error)
        }
        

    },
    Error(error){
        console.error(error)
        const msg = error.msg ?? error
        this.messages.push({ text: msg, type: 'warning'})

    }
};



export default session;

