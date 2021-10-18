

const list = [
    { 
        firstName: 'Aaron',
        lastName: 'Traver',
        email: 'ajtsoccer99@gmail.com',
        password: '123'
    },
];

export function Login(email, password){
    console.log({ email, password})
    const user = list.find(x=> x.email == email);
    if(!user) throw { code: 401, msg: "Sorry there is no user with that handle" };

    if(password != user.password) {
        throw { code: 401, msg: "Wrong Password" };
    }

    const data = { ...user, password: undefined };

    return { user: data };
}