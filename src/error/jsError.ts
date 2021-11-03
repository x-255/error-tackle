import { ERROR_TYPE } from 'src'
import { Reporter } from 'src/report'
import { ErrorOptions } from '.'
import { getErrorInfo } from './parseErrorInfo'

export const tackleJsError = (options: ErrorOptions, reporter: Reporter) =>
  window.addEventListener('error', (e) => {
    const { coverError } = options
    coverError && e.preventDefault()
    let errorInfo = getErrorInfo(ERROR_TYPE.JS_ERROR, e)
    reporter(errorInfo)
  })