const request = require('supertest');
const { expect } = require('chai');

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com a menssagem de Login bem-sucedido', async() => {
            const resposta = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'email': 'bruno@bruno.com',
                    'password': '123456'
                });

            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');
        });

          it('Deve retornar 401 se tentar fazer login com um credenciais inválidas', async () => {
            const userData = {
                'email': 'teste@teste.com',
                'password': '123456'
            };

            const resposta = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(userData);
                
            expect(resposta.status).to.equal(401);
        });
    });
});