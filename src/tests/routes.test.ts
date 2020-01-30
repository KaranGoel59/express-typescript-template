import request from 'supertest';
import server from 'app/index';

describe('/', () => {
  it('Restricted Acess', async () => {
    const res = await request(server)
    .get('/')
    expect(res.status).toEqual(200)
    expect(res.text).toEqual("Restricted Acess")
  })
})