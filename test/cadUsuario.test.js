const request = require('supertest');
const { expect } = require('chai');

describe('Registro', () => {
    describe('POST /users/register', () => {
        it('Deve retornar 201 com a menssagem de Usuário cadastrado', async() => {
            const resposta = await request('http://localhost:3000')
                .post('/users/register')
                .set('Content-Type', 'application/json')
                .send({
                    'name': 'lohanne',
                    'email': 'lohanne@lohanne.com',
                    'password': '123456'
                });

            expect(resposta.status).to.equal(201);
            expect(resposta.body);
        });

          it('Deve retornar 400 se tentar registrar um usuário já existente', async () => {
            const userData = {
                'name': 'lohanne',
                'email': 'lohanne@lohanne.com',
                'password': '123456'
            };

            const resposta = await request('http://localhost:3000')
                .post('/users/register')
                .set('Content-Type', 'application/json')
                .send(userData);

            expect(resposta.status).to.equal(400);
        });
    });
});