export interface LogError {
  error: (message: LogError.Params) => LogError.Result
}

export namespace LogError {
  export type Params = any
  export type Result = void
}
