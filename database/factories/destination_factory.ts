import factory from '@adonisjs/lucid/factories'
import Destination from '#models/destination'
import { DestinationType } from '../../app/types/destination_type.js'

export const DestinationFactory = factory
  .define(Destination, async ({ faker }) => {
    return {
      name: `${faker.location.city()}, ${faker.location.country()}`,
      description: faker.lorem.paragraphs(4),
      countryCode: faker.location.countryCode('alpha-3'),
      type: faker.helpers.arrayElement([
        DestinationType.Alpine,
        DestinationType.City,
        DestinationType.Coast,
      ]),
    }
  })
  .build()
