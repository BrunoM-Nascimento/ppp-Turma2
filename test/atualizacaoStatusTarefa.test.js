const request = require('supertest');
const { expect } = require('chai');

describe('Atualização de status da tarefa - PATCH /tasks/{id}/status', () => {

    // Token do admin 
    const adminToken = 'TOKEN_DE_ADMIN';

    // Token de usuário comum 
    const userToken = 'TOKEN_DE_USUARIO_COMUM';

    // ID da tarefa que você quer atualizar
    const taskId = 1;

    // Atualização do status da tarefa: "não realizado", "em andamento", "concluída".
    it('Deve retornar 200 e atualizar o status da tarefa quando o usuario estiver autenticado', async () => {
        const resposta = await request('http://localhost:3000')
            .patch(`/tasks/${taskId}/status`)
            .set('Authorization', `Bearer ${userToken}`)
            .set('Content-Type', 'application/json')
            .send({ status: 'concluída' });

        expect(resposta.status).to.equal(200);
        expect(resposta.body).to.have.property('status');
    });

    it('Deve retornar 401 se não enviar token', async () => {
        const resposta = await request('http://localhost:3000')
            .patch(`/tasks/${taskId}/status`)
            .set('Content-Type', 'application/json')
            .send({ status: 'concluída' });

        expect(resposta.status).to.equal(401);
    });

    it('Deve retornar 403 acesso restrito a usuarios', async () => {
        const resposta = await request('http://localhost:3000')
            .patch(`/tasks/${taskId}/status`)
            .set('Authorization', `Bearer ${adminToken}`)
            .set('Content-Type', 'application/json')
            .send({ status: 'concluída' });

        expect(resposta.status).to.equal(403);
    });

    it('Deve retornar 404 se a tarefa não existir', async () => {
        const resposta = await request('http://localhost:3000')
            .patch('/tasks/999/status')
            .set('Authorization', `Bearer ${userToken}`)
            .set('Content-Type', 'application/json')
            .send({ status: 'concluída' });

        expect(resposta.status).to.equal(404);
    });
});
