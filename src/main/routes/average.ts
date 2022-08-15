import { adaptRoute } from '@/main/adapters'
import { makeCalculateAverageController } from '@/main/factories/controllers'

import { Router } from 'express'

export const applyAverageRoutes = (router: Router): void => {
  router.post(
    '/calculate-average',
    adaptRoute(makeCalculateAverageController())
  )
}
