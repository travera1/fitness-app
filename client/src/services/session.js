import router from "../router";
import { Login } from "./users";

const session = {
    user: null,
    messages: [],
    toRoute: '/',
    Login(email, password){

        const response = Login(email, password);

        this.user = response.user;

        router.push(this.toRoute);

    },
    
};

export function Logout() {
    this.user = null;
}

export default session;

