// server/src/connectors/rest-endpoints/country.js

import rp from 'request-promise';

const Country = {
  getAll() {
    return rp('http://services.groupkt.com/country/get/all')
      .then((res) => JSON.parse(res))
      .then((res) => {
        return res.RestResponse.result;
      });
  },
};

export { Country };