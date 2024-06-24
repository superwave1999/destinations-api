import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'
import AbstractModel from '#models/abstract_model'

export default interface CrudRepositoryInterface {
  search(
    search: string,
    filters: object,
    page: number,
    pageSize: number
  ): Promise<ModelPaginatorContract<AbstractModel>>

  single(id: number): Promise<AbstractModel>

  delete(model: AbstractModel): Promise<AbstractModel>

  update(model: AbstractModel, data: object): Promise<AbstractModel>

  create(data: object): Promise<AbstractModel>
}
