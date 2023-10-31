import { User, UserService } from "./UserService";

describe('UserService', () => {
    const mockDb: User[] = []
    const userService = new UserService(mockDb);

    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('nath', 'nath@test.com');
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb)
    })

    it('Deve remover um usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.deleteUser('nath', 'nath@test.com');
        expect(mockConsole).toHaveBeenCalledWith('Deletando usuário...', mockDb)
    })

    it('Deve trazer todos os usuários', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.getAllUsers();
        expect(mockConsole).toHaveBeenCalledWith('os usuarios são:', mockDb)
    })
})
