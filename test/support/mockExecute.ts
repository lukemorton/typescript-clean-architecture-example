import * as Swagger from 'swagger-client'
import * as nock from 'nock'
import { loadSpec } from '../../lib/api/Client'

export default function mockExecute (operationId: String, parameters: any): any {
  const spec = loadSpec()
  const { method, url } = Swagger.buildRequest({ spec, operationId, parameters })
  return nock(url).intercept('', method)
}
