const bnplResponse = require("../utlis/bnplv2Response");
const generateRandomNumber = prefix => prefix + '_' + Math.round(Math.random() * 10000);

async function postPayUEligibilityV2(request, response) {
  try {
    const bnpl2Original = bnplResponse.bnpl2Original;
    response.status(200).json(bnpl2Original);
  } catch (e) {
    response.status(400).json(e);
  }
}

// export default allowCors(getStripePaymentUrl);
export default postPayUEligibilityV2;


// const express = require('express');
// const app = express();
// app.get('/', postPayUEligibilityV2);
// app.listen(4242, () => console.log('Running on port 4242'));
