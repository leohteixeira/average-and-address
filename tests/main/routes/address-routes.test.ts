/* eslint-disable @typescript-eslint/no-var-requires */
import { buildApp } from '@/main/config'

import request from 'supertest'

describe('Address Routes', () => {
  describe('GET /get-address/:cep', () => {
    test('Should return 200 on success', async () => {
      const cep = '01001000'
      const app = await buildApp()

      await request(app).get(`/get-address/${cep}`).expect(200)
    })

    test('Should return 400 if cep is incorrect', async () => {
      const cep = '0100100a'
      const app = await buildApp()

      await request(app).get(`/get-address/${cep}`).expect(400)
    })
  })
})
