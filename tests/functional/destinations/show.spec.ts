import { test } from '@japa/runner'
import checkResponse from '#tests/helpers/response'
import randomRow from '#tests/helpers/query'

test.group('Destinations - Show', () => {
  test('show single destination', async ({ assert, client }) => {
    const data = await randomRow('destinations')
    const response = await client.get(`/api/destinations/${data.id}`)
    checkResponse(
      assert,
      response,
      ['id', 'name', 'description', 'countryCode', 'type', 'createdAt', 'updatedAt'],
      true
    )
  })
})
