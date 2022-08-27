import { useState } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input } from 'semantic-ui-react';

const NewCampaign = (props) => {
  const [minimumContribution, setMinimumContribution] = useState('');

  const onMinimumContributionChange = (event) => {
    setMinimumContribution(event.target.value);
  };

  return (
    <Layout>
      <h3>Create Your Own Campaign!</h3>
      <Form>
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
