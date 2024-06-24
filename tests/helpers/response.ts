import { Assert } from '@japa/assert'
import { ApiResponse } from '@japa/api-client'

export default function checkResponse(
  assert: Assert,
  response: ApiResponse,
  keys: string[],
  isSingle: boolean
) {
  assert.isTrue(response.status() >= 200 && response.status() <= 204)
  response.assertHeader('content-type', 'application/json; charset=utf-8')
  const b = response.body()
  assert.exists(b.data)
  if (!isSingle) {
    assert.isArray(b.data)
    for (const bElement of b.data) {
      assert.properties(bElement, keys)
    }
  } else {
    assert.isObject(b.data)
    assert.properties(b.data, keys)
  }
}
