import { test } from '@japa/runner'
import { DestinationFactory } from '#database/factories/destination_factory'
import checkResponse from '#tests/helpers/response'

test.group('Destinations - Store / Create', () => {
  test('create destination', async ({ assert, client }) => {
    const data = await DestinationFactory.make()
    const response = await client.post('/api/destinations').json(data)
    checkResponse(
      assert,
      response,
      ['id', 'name', 'description', 'countryCode', 'type', 'createdAt', 'updatedAt'],
      true
    )
  })
})
