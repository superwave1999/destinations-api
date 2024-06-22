import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DestinationFactory } from '#database/factories/destination_factory'

export default class extends BaseSeeder {
  async run() {
    const total = 1000000
    const perInsertion = 10000
    for (let run = 0; run < total / perInsertion; run++) {
      await DestinationFactory.createMany(perInsertion)
    }
  }
}
