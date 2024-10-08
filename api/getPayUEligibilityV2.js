import { bnpl2Original as bnplResponse } from "../utlis/bnplv2Response";
const generateRandomNumber = prefix => prefix + '_' + Math.round(Math.random() * 10000);

async function getPayUEligibilityV2(request, response) {
  try {
    const bnpl2Original = bnplResponse;
    response.status(200).json(bnpl2Original);
  } catch (e) {
    response.status(400).json(e);
  }
}

// export default allowCors(getStripePaymentUrl);
export default getPayUEligibilityV2;


// const express = require('express');
// const app = express();
// app.get('/', getStripePaymentUrl);
// app.listen(4242, () => console.log('Running on port 4242'));
