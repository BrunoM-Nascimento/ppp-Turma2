const request = require('supertest');
const { expect } = require('chai');

describe('Lista de Tarefas', () => {
    const tokenAdmin = 'TOKEN_DE_ADMIN';
    describe('GET /tasks', () => {
        it('Deve retornar 200 e uma lista de tarefas', async () => {
            const resposta = await request('http://localhost:3000')
                .get('/tasks')
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

    });
});