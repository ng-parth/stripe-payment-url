const { STRIPE_PVT_KEY } = process.env;
const stripe = require('stripe')(STRIPE_PVT_KEY);

const allowCors = fn => async (req, res) => {
  const origin = req.headers?.origin;
  // console.log('Origin: ', origin);
  if (origin && !(
      origin.indexOf('localhost') > -1 || 
      origin.indexOf('vercel') > -1 || 
      origin.indexOf('heroku') > -1 || 
      origin.indexOf('ome-extension') > -1
    )
  ) {
    res.status(401).end();
    return;
  }
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', origin);
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  // res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

async function getStripePaymentUrl(request, response) {
  console.log('Stripe Key: ', STRIPE_PVT_KEY);
  const { DEFAULT_PRICE_ID } = process.env;
  const DOMAIN = 'http://localhost:3000/'
  const { 
    priceId = DEFAULT_PRICE_ID, 
    quantity = 1,
    curl = `${DOMAIN}co/payment?&result=failed&reason=Unknown_failure_reason`,
    surl = `${DOMAIN}co/order/`,
    orderNo = '',
   } = request.query;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: priceId,
        quantity,
      },
    ],
    mode: 'payment',
    success_url: surl + `?order=${orderNo}`,
    cancel_url: curl + `?order=${orderNo}`,
  });
const paymentUrl = session.url;
  
  response.status(200).json({paymentUrl});
}

// export default allowCors(getStripePaymentUrl);
export default getStripePaymentUrl;  
