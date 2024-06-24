import { test } from '@japa/runner'
import checkResponse from '#tests/helpers/response'
import randomRow from '#tests/helpers/query'

test.group('Destinations - Delete', () => {
  test('delete destination', async ({ assert, client }) => {
    const row = await randomRow('destinations')
    const response = await client.delete(`/api/destinations/${row.id}`)
    checkResponse(
      assert,
      response,
      ['id', 'name', 'description', 'countryCode', 'type', 'createdAt', 'updatedAt'],
      true
    )
  })
})
