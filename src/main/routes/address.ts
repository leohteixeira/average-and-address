import { adaptRoute } from '@/main/adapters'
import { makeGetAddressController } from '@/main/factories/controllers'

import { Router } from 'express'

export const applyProductRoutes = (router: Router): void => {
  router.get('/get-address/:cep?', adaptRoute(makeGetAddressController()))
}
