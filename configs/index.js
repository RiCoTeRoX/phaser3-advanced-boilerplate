/* eslint-disable max-len */
const global = {
  tittle: 'Some Title',
  version: '1.0',
  api_path: '//your-api.com/',
  assets_images_url: 'assets/images/',
  develop: 0
};

const local = Object.assign({}, global, {
  clientProtocol: 'http',
  clientDomain: 'localhost',
  clientPort: '3000',
  develop: 1
});

const production = Object.assign({}, global, {
  facebook_domain: '',
  facebook_id: 0
});

const config = {
  local,
  production
};

export default config[process.env.NODE_ENV];
