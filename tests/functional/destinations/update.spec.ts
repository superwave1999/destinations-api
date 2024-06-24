import { test } from '@japa/runner'
import { DestinationFactory } from '#database/factories/destination_factory'
import checkResponse from '#tests/helpers/response'
import randomRow from '#tests/helpers/query'

test.group('Destinations - Update', () => {
  test('update destination', async ({ assert, client }) => {
    const original = await randomRow('destinations')
    const data = await DestinationFactory.make()
    const response = await client.patch(`/api/destinations/${original.id}`).json(data)
    checkResponse(
      assert,
      response,
      ['id', 'name', 'description', 'countryCode', 'type', 'createdAt', 'updatedAt'],
      true
    )
  })
})
