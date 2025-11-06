const request = require('supertest');
const { expect } = require('chai');

describe('Exclusão de tarefa - DELETE /tasks/{id}', () => {

    // Token do admin 
    const adminToken = 'TOKEN_DE_ADMIN';

    // Token de usuário comum 
    const userToken = 'TOKEN_DE_USUARIO_COMUM';

    // ID da tarefa que você quer editar
    const taskId = 1;

    // Status da tarefa: "não realizado", "em andamento", "concluída".
    it('Deve retornar 204 e excluir a tarefa', async () => {
        const resposta = await request('http://localhost:3000')
            .delete(`/tasks/${taskId}`)
            .set('Authorization', `Bearer ${adminToken}`)
            .set('Content-Type', 'application/json')

        expect(resposta.status).to.equal(204);
    });

    it('Deve retornar 401 se não enviar token', async () => {
        const resposta = await request('http://localhost:3000')
            .delete(`/tasks/${taskId}`)
            .set('Content-Type', 'application/json')

        expect(resposta.status).to.equal(401);
    });

    it('Deve retornar 403 acesso restrito a administradores', async () => {
        const resposta = await request('http://localhost:3000')
            .delete(`/tasks/${taskId}`)
            .set('Authorization', `Bearer ${userToken}`)
            .set('Content-Type', 'application/json')

        expect(resposta.status).to.equal(403);
    });

    it('Deve retornar 404 se a tarefa não existir', async () => {
        const resposta = await request('http://localhost:3000')
            .delete('/tasks/999')
            .set('Authorization', `Bearer ${adminToken}`)
            .set('Content-Type', 'application/json')

        expect(resposta.status).to.equal(404);
    });
});