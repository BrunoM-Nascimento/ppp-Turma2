const request = require('supertest');
const { expect } = require('chai');

describe('Registro', () => {
    describe('POST /admin/register', () => {
        it('Deve retornar 201 com a menssagem de Administrador cadastrado', async() => {
            const resposta = await request('http://localhost:3000')
                .post('/admin/register')
                .set('Content-Type', 'application/json')
                .send({
                    'name': 'bruno',
                    'email': 'bruno@bruno.com',
                    'password': '123456'
                });

            console.log(resposta.status);
            console.log(resposta.body);

            expect(resposta.status).to.equal(201);
            expect(resposta.body);
        });

          it('Deve retornar 400 se tentar registrar um usuário já existente', async () => {
            const userData = {
                'name': 'bruno',
                'email': 'bruno@bruno.com',
                'password': '123456'
            };

            const resposta = await request('http://localhost:3000')
                .post('/admin/register')
                .set('Content-Type', 'application/json')
                .send(userData);

            console.log(resposta.status);
            expect(resposta.status).to.equal(400);
        });
    });
});