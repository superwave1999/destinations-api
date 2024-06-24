import { test } from '@japa/runner'
import checkResponse from '#tests/helpers/response'
import randomRow from '#tests/helpers/query'

test.group('Destinations - Index', () => {
  test('get destinations full test', async ({ assert, client }) => {
    const destination = await randomRow('destinations')
    const variations = [
      { page: 1, pageSize: 500 },
      { page: 100, pageSize: 30 },
      {
        page: 1,
        pageSize: 10,
        type: destination.type,
        countryCode: destination.countryCode,
        name: destination.name,
        search: destination.name.charAt(0),
      },
    ]
    for (const variation of variations) {
      const response = await client.get('/api/destinations').qs(variation)
      const b = response.body()
      assert.exists(b.meta)
      checkResponse(
        assert,
        response,
        ['id', 'name', 'description', 'countryCode', 'type', 'createdAt', 'updatedAt'],
        false
      )
    }
  })
})
