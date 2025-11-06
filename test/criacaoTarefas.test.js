const request = require('supertest');
const { expect } = require('chai');

describe('Criação de Tarefas', () => {
    const tokenAdmin = 'TOKEN_DE_ADMIN';
    describe('POST /Tasks', () => {
        it('Deve retornar 200 com a menssagem de Tarefa criada com sucesso', async() => {
            const resposta = await request('http://localhost:3000')
                .post('/Tasks')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${tokenAdmin}`)
                .send({
                    'title': 'string',
                    'description': 'string',
                    'deadline': 'string',
                    'responsibleId': 2
                });

            expect(resposta.status).to.equal(201);
            expect(resposta.body).to.have.property('id');
            expect(resposta.body.title).to.equal('string');
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