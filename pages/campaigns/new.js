import { useState } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

const NewCampaign = (props) => {
  const [minimumContribution, setMinimumContribution] = useState('');

  const onMinimumContributionChange = (event) => {
    setMinimumContribution(event.target.value);
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    await factory.methods.createCampaign(this.state.minimumContribution).send({
      from: accounts[0],
    });
  };

  return (
    <Layout>
      <h3>Create Your Own Campaign!</h3>
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Minimum Contribution Amount</label>
          <Input
            value={minimumContribution}
            onChange={onMinimumContributionChange}
            label="ETH"
            labelPosition="right"
          />
        </Form.Field>
        <Button primary>Create Campaign</Button>
      </Form>
    </Layout>
  );
};

export async function getServerSideProps() {
  return { props: {} };
}

export default NewCampaign;
