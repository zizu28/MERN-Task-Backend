const { registerUser } = require('../backend/controllers/userController')

jest.mock('../backend/models/userModel', () => {
    const mockUser = {_id: 'user-id', name: 'Jane Doe', email: 'johndoe@example.com'}
    return {
        findOne: jest.fn().mockResolvedValue(null),
        create: jest.fn().mockResolvedValue(mockUser)
    }
})

jest.mock('jsonwebtoken', () => {
    sign: jest.fn().mockReturnValue('mock-token')
})

const bcrypt = require('bcryptjs')
bcrypt.genSalt = jest.fn().mockResolvedValue('mock-salt')
bcrypt.hash = jest.fn().mockResolvedValue('mock-hashed-password')

test('should register a new user', async () => {
    const req = {
        body: {
            name: 'Jane Doe',
            email: 'janedoe@example.com',
            password: 'password'
        }
    }

    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    }

    await registerUser(req, res);
    expect(res.status).toHaveBeenCalledWith(201) 
})