export interface LogInfo {
  info: (message: LogInfo.Params) => LogInfo.Result
}

export namespace LogInfo {
  export type Params = any
  export type Result = void
}
