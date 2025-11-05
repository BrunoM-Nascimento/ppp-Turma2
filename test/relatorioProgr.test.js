const request = require('supertest');
const { expect } = require('chai');

describe('Relatório de Progresso - GET /tasks/report', () => {

    // Token do admin 
    const adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImJydW5vIiwiaWF0IjoxNzYyMzA0MzQ5LCJleHAiOjE3NjIzMDc5NDl9.ugxlbdTIlxuzJUVK7fDcBGSKF3JysfrCK74ZQSWZvFk';

    // Token de usuário comum 
    const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6InVzZXIiLCJuYW1lIjoibG9oYW5uZSIsImlhdCI6MTc2MjMwNTM3NiwiZXhwIjoxNzYyMzA4OTc2fQ.P82PkoBVij5U_3qN7tEjTT6BwYc5JAjzICCjEvwgsO4';

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