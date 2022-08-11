import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa56e5d36b8832fc14b1ca28e252e8c433b2275b1'
);

export default instance;