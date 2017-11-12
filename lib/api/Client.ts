import * as Swagger from 'swagger-client'
import * as fs from 'fs'
import * as jsYaml from 'js-yaml'
import * as nock from 'nock'

const API_HOST = process.env.API_HOST

function loadSpec (): any {
  const spec = fs.readFileSync(__dirname + '/../../api/swagger.yml', 'utf8')
  return { ...jsYaml.safeLoad(spec), host: API_HOST }
}

export async function execute (operationId: String, parameters: any): Promise<any> {
  const spec = loadSpec()
  const { body } = await Swagger.execute({ spec, operationId, parameters })
  return body
}

export function mockExecute (operationId: String, parameters: any): any {
  const spec = loadSpec()
  const { method, url } = Swagger.buildRequest({ spec, operationId, parameters })
  return nock(url).intercept('', method)
}
