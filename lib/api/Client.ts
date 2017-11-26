import * as Swagger from 'swagger-client'
import * as spec from '../../api/swagger.json'

const API_HOST = process.env.API_HOST

export function loadSpec (): any {
  return { ...spec, host: API_HOST }
}

export async function execute (operationId: string, parameters: object): Promise<any> {
  const spec = loadSpec()

  try {
    const { body } = await Swagger.execute({ spec, operationId, parameters })
    return body
  } catch (e) {
    if (e.status === 404) {
      console.info(e.message, operationId, parameters)
    } else {
      throw e
    }
  }
}
