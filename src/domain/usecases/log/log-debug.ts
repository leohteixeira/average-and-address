export interface LogDebug {
  debug: (message: LogDebug.Params) => LogDebug.Result
}

export namespace LogDebug {
  export type Params = any
  export type Result = void
}
