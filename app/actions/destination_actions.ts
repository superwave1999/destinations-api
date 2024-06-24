import Destination from '#models/destination'
import { inject } from '@adonisjs/core'
import DestinationRepository from '../repositories/destination_repository.js'
import { createDestinationValidator, updateDestinationValidator } from '#validators/destination'

@inject()
export default class DestinationActions {
  constructor(protected repository: DestinationRepository) {}

  async search(search: string, filters: object, page: number, pageSize: number) {
    return await this.repository.search(search, filters, page, pageSize)
  }

  async single(id: number): Promise<Destination> {
    return await this.repository.single(id)
  }

  async delete(id: number): Promise<Destination> {
    const model = await this.repository.single(id)
    return await this.repository.delete(model)
  }

  async update(id: number, data: object): Promise<Destination> {
    const model = await this.repository.single(id)
    const payload = await updateDestinationValidator.validate(data)
    return await this.repository.update(model, payload)
  }

  async create(data: object): Promise<Destination> {
    const payload = await createDestinationValidator.validate(data)
    return await this.repository.create(payload)
  }
}
