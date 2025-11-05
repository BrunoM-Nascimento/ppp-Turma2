const request = require('supertest');
const { expect } = require('chai');

describe('Relatório de Progresso - GET /tasks/report', () => {

    // Token do admin 
    const adminToken = 'TOKEN_DE_ADMIN';

    // Token de usuário comum 
    const userToken = 'TOKEN_DE_USUARIO_COMUM';

    // Status da tarefa: "não realizado", "em andamento", "concluída".
    it('Deve retornar 200 e o relatório de progresso', async () => {
        const resposta = await request('http://localhost:3000')
            .get(`/tasks/report`)
            .set('Authorization', `Bearer ${adminToken}`)
            .set('Content-Type', 'application/json')

        console.log(resposta.body);
        console.log('Status:', resposta.status);

        expect(resposta.status).to.equal(200);
    });

    it('Deve retornar 401 se não enviar token', async () => {
        const resposta = await request('http://localhost:3000')
            .get(`/tasks/report`)
            .set('Content-Type', 'application/json')

        expect(resposta.status).to.equal(401);
    });

    it('Deve retornar 403 acesso restrito a administradores', async () => {
        const resposta = await request('http://localhost:3000')
            .get(`/tasks/report`)
            .set('Authorization', `Bearer ${userToken}`)
            .set('Content-Type', 'application/json')

        expect(resposta.status).to.equal(403);
    });
});