import { useState } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

const NewCampaign = (props) => {
  const [minimumContribution, setMinimumContribution, errorMessage] = useState('');

  const onMinimumContributionChange = (event) => {
    setMinimumContribution(event.target.value);
  };

  onSubmit = async (event) => {
    event.preventDefault();

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0],
        });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  return (
    <Layout>
      <h3>Create Your Own Campaign!</h3>
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Minimum Contribution Amount</label>
          <Input
            value={minimumContribution}
            onChange={onMinimumContributionChange}
            label="ETH"
            labelPosition="right"
          />
        </Form.Field>

        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary>Create Campaign</Button>
      </Form>
    </Layout>
  );
};

export async function getServerSideProps() {
  return { props: {} };
}

export default NewCampaign;
