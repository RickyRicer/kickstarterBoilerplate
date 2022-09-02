import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x8EfA2e75feEc15304Fb6A9a04D0855B68c6042B3'
);

export default instance;