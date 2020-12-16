const { API_UNDER_TEST } = process.env;

const axios = require('axios');

describe('When a request is made to the service', () => {
  describe('to the liveness endpoint', () => {
    let result;

    beforeAll(async () => {
      result = await axios.get(`http://${API_UNDER_TEST}/live`);
    });

    it('should return a 200', () => {
      expect(result.status).toBe(200);
    });
  });
});
