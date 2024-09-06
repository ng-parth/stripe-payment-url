const generateRandomNumber = prefix => prefix + '_' + Math.round(Math.random() * 10000);

async function postPayUEligibilityV2(request, response) {
  try {
    const bnpl2Original = {
      bnpl: {all: {
        Lazypay: {
          status: 1,
          availableBalance: 500, // only if applicable
          kfsLink: 'https://www.somekfsLink.com', // only if applicable
          eligible: true,
          customerLinked: true,
          PayuToken: 'Token12345'
        },
        Simpl: {
          status: 1,
          kfsLink: 'https://www.somekfsLink.com', // only if applicable
          eligible: false, // based on amount and not to return available balance if eligible is false
          customerLinked: false,
          // PayuToken: '“Token78901',
          failure_code: 'E2408',
          failure_reason:
            'The transaction or loan amount is greater than the available credit line with the customer'
        },
        Mobizip: {
          status: 1,
          availableBalance: 2000, // only if applicable
          kfsLink: 'https://www.somekfsLink.com', // only if applicable
          eligible: true,
          customerLinked: true,
          PayuToken: 'Token12345'
        }
      }}
    };
    response.status(200).json(bnpl2Original);
  } catch (e) {
    response.status(400).json(e);
  }
}

// export default allowCors(getStripePaymentUrl);
export default postPayUEligibilityV2;


// const express = require('express');
// const app = express();
// app.get('/', getStripePaymentUrl);
// app.listen(4242, () => console.log('Running on port 4242'));