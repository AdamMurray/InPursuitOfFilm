import { getAuthedRequest, formatApiData } from './apiServiceFunctions';

/**
 * Test getAuthedRequest()
 */
test('getAuthedRequest returns a request object with API key and params', () => {
  const path = 'example.com',
    params = { test: 'test' },
    apiKey = '11112222';

  const authedRequest = getAuthedRequest(path, params, apiKey);

  expect(authedRequest).toEqual(
    new Request('example.com?api_key=11112222&test=test')
  );
});