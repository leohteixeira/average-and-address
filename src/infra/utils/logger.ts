import { LogDebug, LogError, LogInfo } from '@/domain/usecases/log'

import { createLogger, format, transports } from 'winston'

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.json(),
    format.timestamp({ format: 'ddd DD-MM-YYYY HH:mm:ss' }),
    format.prettyPrint()
  ),
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/info.log' })
  ]
})

export class Logger implements LogInfo, LogError, LogDebug {
  info(message: LogInfo.Params): LogInfo.Result {
    logger.info(message)
  }

  error(message: LogError.Params): LogError.Result {
    logger.error(message)
  }

  debug(message: LogDebug.Params): LogDebug.Result {
    logger.debug(message)
  }
}
