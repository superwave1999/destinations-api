import Destination from '#models/destination'
import string from '@adonisjs/core/helpers/string'
import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'
import CrudRepositoryInterface from '../interfaces/crud_repository.js'

export default class DestinationRepository implements CrudRepositoryInterface {
  async search(
    search: string,
    filters: object,
    page: number,
    pageSize: number
  ): Promise<ModelPaginatorContract<Destination>> {
    const query = Destination.query()
    for (const [k, v] of Object.entries(filters)) {
      query.where(string.snakeCase(k), v)
    }
    if (search) {
      query.whereILike('name', `${search}%`)
    }
    return await query.paginate(page, pageSize)
  }

  async single(id: number): Promise<Destination> {
    return await Destination.findOrFail(id)
  }

  async delete(model: Destination): Promise<Destination> {
    await model.delete()
    return model
  }

  async update(model: Destination, data: object): Promise<Destination> {
    return await model.merge(data).save()
  }

  async create(data: object): Promise<Destination> {
    return await Destination.create(data)
  }
}
