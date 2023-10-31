export interface User {
    name: string
    email: string
}

const db = [
    {
        name: "Joana",
        email: "joana@dio.com",
    }
]

export class UserService {
    db: User[]

    constructor(
        database = db
    ){
        this.db = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user)
        console.log('DB atualizado', this.db)
    }

    getAllUsers = () => {
        return console.log('os usuarios são:', this.db)
    }

    deleteUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        console.log('Deletando usuário...', this.db)
    }

}

