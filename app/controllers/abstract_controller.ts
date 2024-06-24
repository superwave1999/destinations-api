import DestinationActions from '../actions/destination_actions.js'
import { HttpContext } from '@adonisjs/core/http'

export default class AbstractController {
  constructor(protected actions: DestinationActions) {}

  async index({ request, response }: HttpContext) {
    const paginatedData = await this.actions.search(
      request.input('search', ''),
      [],
      request.input('page', 1),
      request.input('pageSize', 25)
    )
    response.send(paginatedData)
  }

  async store({ response, request }: HttpContext) {
    const destination = await this.actions.create(request.all())
    response.status(201).send({ data: destination })
  }

  async show({ params, response }: HttpContext) {
    const destinations = await this.actions.single(params.id)
    response.send({ data: destinations })
  }

  async update({ params, response, request }: HttpContext) {
    const destination = await this.actions.update(params.id, request.all())
    response.send({ data: destination })
  }

  async destroy({ params, response }: HttpContext) {
    const destination = await this.actions.delete(params.id)
    response.send({ data: destination })
  }
}
