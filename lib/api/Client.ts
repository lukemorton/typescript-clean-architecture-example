import * as Swagger from 'swagger-client'
import * as spec from '../../api/swagger.json'

const API_HOST = process.env.API_HOST

export function loadSpec (): any {
  return { ...spec, host: API_HOST }
}

export async function execute (operationId: String, parameters: any): Promise<any> {
  const spec = loadSpec()
  const { body } = await Swagger.execute({ spec, operationId, parameters })
  return body
}
