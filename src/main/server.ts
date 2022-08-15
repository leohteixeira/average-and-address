import 'module-alias/register'
import 'reflect-metadata'
import { IdentifiedError } from '@/domain/errors'
import { buildApp, env } from '@/main/config'

buildApp()
  .then((app) =>
    app.listen(env.port, () =>
      console.log(`Server running at port ${env.port}`)
    )
  )
  .catch(console.error)

process.on('unhandledRejection', (reason, promise) => {
  console.error(
    `Unhandled Rejection at: ${String(promise)}, reason: ${String(reason)}`
  )
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  throw reason
})

process.on('uncaughtException', (error) => {
  console.error(`Uncaught Exception: ${String(error)}`)
  if (!(error instanceof IdentifiedError)) process.exit(1)
})
