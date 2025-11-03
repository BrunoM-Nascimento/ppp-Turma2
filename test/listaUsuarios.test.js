const request = require('supertest');
const { expect } = require('chai');

describe('Lista de Usuários', () => {
    const tokenAdmin = 'TOKEN_DE_ADMIN';
    describe('GET /users', () => {
        it('Deve retornar 200 e uma lista de usuários', async () => {
            const resposta = await request('http://localhost:3000')
                .get('/users')
                .set('Authorization', `Bearer ${tokenAdmin}`)
                .set('Content-Type', 'application/json');

            console.log('Status:', resposta.statusCode);
            console.log(resposta.body);

            expect(resposta.status).to.equal(200);
            expect(resposta.body).to.be.an('array');
        });

        it('Deve retornar 401 se não enviar token', async () => {
        const res = await request('http://localhost:3000')
            .get('/users')
            .set('Content-Type', 'application/json');

        expect(res.status).to.equal(401); 
        });

        it('Deve retornar 403 se enviar token de usuário comum', async () => {
        const tokenUser = 'TOKEN_DE_USUARIO_COMUM';
        const res = await request('http://localhost:3000')
            .get('/users')
            .set('Authorization', `Bearer ${tokenUser}`)
            .set('Content-Type', 'application/json');

        expect(res.status).to.equal(403);
        });

    });
});