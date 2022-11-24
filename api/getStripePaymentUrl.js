const { STRIPE_PVT_KEY } = process.env;
const stripe = require('stripe')(STRIPE_PVT_KEY);

// const allowCors = fn => async (req, res) => {
//   const origin = req.headers?.origin;
//   // console.log('Origin: ', origin);
//   if (origin && !(
//       origin.indexOf('localhost') > -1 || 
//       origin.indexOf('vercel') > -1 || 
//       origin.indexOf('heroku') > -1 || 
//       origin.indexOf('ome-extension') > -1
//     )
//   ) {
//     res.status(401).end();
//     return;
//   }
//   res.setHeader('Access-Control-Allow-Credentials', true)
//   res.setHeader('Access-Control-Allow-Origin', origin);
//   // another common pattern
//   // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//   // res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
//   res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST')
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
//   )
//   if (req.method === 'OPTIONS') {
//     res.status(200).end()
//     return
//   }
//   return await fn(req, res)
// }
const cartItems = [
  {
    "productId": 115,
    "productName": "Tiger Prawn (Whole)",
    "quantityType": "6 Pieces",
    "baseCurrency": "INR",
    "imageUrl": "https://ik.imagekit.io/iwcam3r8ka/prod/products/202102/de897829-9f90-4f65-8429-834865c4c259.jpg",
    "sku": "FIS-1015",
    "salePrice": 800,
    "retailPrice": 894,
    "saleDiscountPercentage": "10% OFF",
    "saleDiscountFlat": "₹94 OFF",
    "onSale": true,
    "cuts": "Whole",
    "maxQuantityCart": 10,
    "maxAvailableQuantity": 0,
    "inCartQty": 1,
    "deliveryStartDate": "2022-11-16",
    "deliveryEndDate": "2022-11-17",
    "invAvailable": true,
    "presale": true,
    "comboProduct": false,
    "comboOn": false,
    "comboSkusMapped": false,
    "comboInvAvailable": false,
    "validCampaignArea": false
  },
  {
    "productId": 1,
    "productName": "Chicken Curry Cut ",
    "quantityType": "500 gms",
    "baseCurrency": "INR",
    "imageUrl": "https://ik.imagekit.io/iwcam3r8ka/prod/products/202009/07e75f9e-3f98-4bdb-84b7-badad5536cdc.jpg",
    "sku": "CHK-1001",
    "salePrice": 100,
    "retailPrice": 119,
    "saleDiscountPercentage": "15% OFF",
    "saleDiscountFlat": "₹19 OFF",
    "onSale": true,
    "cuts": "Small",
    "maxQuantityCart": 5,
    "maxAvailableQuantity": 0,
    "inCartQty": 1,
    "invAvailable": true,
    "presale": false,
    "comboProduct": false,
    "comboOn": false,
    "comboSkusMapped": false,
    "comboInvAvailable": false,
    "validCampaignArea": false
  },
  {
    "productId": 24,
    "productName": "Surmai Steak",
    "quantityType": "1 Pieces",
    "baseCurrency": "INR",
    "imageUrl": "https://ik.imagekit.io/iwcam3r8ka/prod/products/202102/0df7763c-e2f0-4532-9a7f-4340d41125fc.jpg",
    "sku": "FIS-1003",
    "salePrice": 0,
    "retailPrice": 187,
    "onSale": false,
    "cuts": "Steak",
    "maxQuantityCart": 10,
    "maxAvailableQuantity": 0,
    "inCartQty": 2,
    "invAvailable": true,
    "presale": false,
    "comboProduct": false,
    "comboOn": false,
    "comboSkusMapped": false,
    "comboInvAvailable": false,
    "validCampaignArea": false
  },
  {
    "productId": 13,
    "productName": "White Pomfret /Paplet (Whole)",
    "quantityType": "1 Pieces",
    "baseCurrency": "INR",
    "imageUrl": "https://ik.imagekit.io/iwcam3r8ka/prod/products/202102/4de21edb-4cec-4825-8ed5-9997c7c94207.jpg",
    "sku": "FIS-1001",
    "salePrice": 0,
    "retailPrice": 299,
    "onSale": false,
    "cuts": "Whole",
    "maxQuantityCart": 8,
    "maxAvailableQuantity": 0,
    "inCartQty": 1,
    "invAvailable": true,
    "presale": false,
    "comboProduct": false,
    "comboOn": false,
    "comboSkusMapped": false,
    "comboInvAvailable": false,
    "validCampaignArea": false
  },
  {
    "productId": 31,
    "productName": "Rohu Bengali Cut (With Head)",
    "quantityType": "500 gms",
    "baseCurrency": "INR",
    "imageUrl": "https://ik.imagekit.io/iwcam3r8ka/prod/products/202009/8f11bfe7-9876-4903-a8a2-7d9c255f0301.jpg",
    "sku": "FIS-1005",
    "salePrice": 145,
    "retailPrice": 159,
    "onSale": false,
    "cuts": "Bengali",
    "maxQuantityCart": 5,
    "maxAvailableQuantity": 0,
    "inCartQty": 1,
    "invAvailable": true,
    "presale": false,
    "comboProduct": false,
    "comboOn": false,
    "comboSkusMapped": false,
    "comboInvAvailable": false,
    "validCampaignArea": false
  },
  {
    "productId": 1,
    "productName": "Chicken Curry Cut ",
    "quantityType": "2000 gms",
    "baseCurrency": "INR",
    "imageUrl": "https://ik.imagekit.io/iwcam3r8ka/prod/products/202009/07e75f9e-3f98-4bdb-84b7-badad5536cdc.jpg",
    "sku": "CHK-1054",
    "salePrice": 300,
    "retailPrice": 330,
    "saleDiscountPercentage": "9% OFF",
    "saleDiscountFlat": "₹30 OFF",
    "onSale": true,
    "cuts": "Small",
    "maxQuantityCart": 1,
    "maxAvailableQuantity": 0,
    "inCartQty": 1,
    "invAvailable": true,
    "presale": false,
    "comboProduct": false,
    "comboOn": false,
    "comboSkusMapped": false,
    "comboInvAvailable": false,
    "validCampaignArea": false
  },
  {
    "productId": 32,
    "productName": "Bombil (Bombay Duck)",
    "quantityType": "500 gms",
    "baseCurrency": "INR",
    "imageUrl": "https://ik.imagekit.io/iwcam3r8ka/prod/products/202009/470742f8-af19-4ad2-9952-5ae6a8e97074.jpg",
    "sku": "FIS-1006",
    "salePrice": 230,
    "retailPrice": 245,
    "onSale": false,
    "cuts": "Gutted",
    "maxQuantityCart": 8,
    "maxAvailableQuantity": 0,
    "inCartQty": 1,
    "invAvailable": true,
    "presale": false,
    "comboProduct": false,
    "comboOn": false,
    "comboSkusMapped": false,
    "comboInvAvailable": false,
    "validCampaignArea": false
  },
  {
    "productId": 21,
    "productName": "White Prawns (Medium)",
    "quantityType": "250 gms",
    "baseCurrency": "INR",
    "imageUrl": "https://ik.imagekit.io/iwcam3r8ka/prod/products/202102/20bc550c-4fd3-4421-a059-93a53cd8fa93.jpg",
    "sku": "FIS-1002",
    "salePrice": 331,
    "retailPrice": 368,
    "onSale": false,
    "cuts": "Deveined",
    "maxQuantityCart": 8,
    "maxAvailableQuantity": 0,
    "inCartQty": 1,
    "invAvailable": true,
    "presale": false,
    "comboProduct": false,
    "comboOn": false,
    "comboSkusMapped": false,
    "comboInvAvailable": false,
    "validCampaignArea": false
  },
  {
    "productId": 116,
    "productName": "Salmon Fillet ",
    "quantityType": "200 gms gms",
    "baseCurrency": "INR",
    "imageUrl": "https://ik.imagekit.io/iwcam3r8ka/prod/products/202102/541aab49-aee2-4eb8-875a-0f975a60f7c7.jpg",
    "sku": "FIS-1016",
    "salePrice": 664,
    "retailPrice": 699,
    "saleDiscountPercentage": "5% OFF",
    "saleDiscountFlat": "₹35 OFF",
    "onSale": true,
    "cuts": "Fillet",
    "maxQuantityCart": 8,
    "maxAvailableQuantity": 0,
    "inCartQty": 1,
    "invAvailable": true,
    "presale": false,
    "comboProduct": false,
    "comboOn": false,
    "comboSkusMapped": false,
    "comboInvAvailable": false,
    "validCampaignArea": false
  },
  {
    "productId": 6,
    "productName": "Chicken Lollipop",
    "quantityType": "12 Pieces",
    "baseCurrency": "INR",
    "imageUrl": "https://ik.imagekit.io/iwcam3r8ka/prod/products/202009/a2243ed8-b980-492e-8cdd-6ad56fd862e8.jpg",
    "sku": "CHK-1006",
    "salePrice": 140,
    "retailPrice": 148,
    "saleDiscountPercentage": "5% OFF",
    "saleDiscountFlat": "₹8 OFF",
    "onSale": true,
    "cuts": "Small",
    "maxQuantityCart": 4,
    "maxAvailableQuantity": 0,
    "inCartQty": 1,
    "invAvailable": true,
    "presale": false,
    "comboProduct": false,
    "comboOn": false,
    "comboSkusMapped": false,
    "comboInvAvailable": false,
    "validCampaignArea": false
  },
  {
    "productId": 9,
    "productName": "Chicken Drumsticks",
    "quantityType": "500 gms",
    "baseCurrency": "INR",
    "imageUrl": "https://ik.imagekit.io/iwcam3r8ka/prod/products/202009/3139c57a-2623-468e-8d4f-3221812149d0.jpg",
    "sku": "CHK-1009",
    "salePrice": 176,
    "retailPrice": 186,
    "onSale": false,
    "cuts": "Medium",
    "maxQuantityCart": 2,
    "maxAvailableQuantity": 0,
    "inCartQty": 1,
    "invAvailable": true,
    "presale": false,
    "comboProduct": false,
    "comboOn": false,
    "comboSkusMapped": false,
    "comboInvAvailable": false,
    "validCampaignArea": false
  },
  {
    "productId": 4,
    "productName": "Chicken Keema (Mince)",
    "quantityType": "500 gms",
    "baseCurrency": "INR",
    "imageUrl": "https://ik.imagekit.io/iwcam3r8ka/prod/products/202009/ca4ef012-63f7-42ac-861c-e8d27a14de8b.jpg",
    "sku": "CHK-1004",
    "salePrice": 149,
    "retailPrice": 205,
    "onSale": false,
    "cuts": "Mince",
    "maxQuantityCart": 4,
    "maxAvailableQuantity": 0,
    "inCartQty": 1,
    "invAvailable": true,
    "presale": false,
    "comboProduct": false,
    "comboOn": false,
    "comboSkusMapped": false,
    "comboInvAvailable": false,
    "validCampaignArea": false
  },
  {
    "productId": 2,
    "productName": "Chicken Boneless Cut",
    "quantityType": "500 gms",
    "baseCurrency": "INR",
    "imageUrl": "https://ik.imagekit.io/iwcam3r8ka/prod/products/202102/a4e30687-d4ea-43e0-8e51-566c03beeb26.jpg",
    "sku": "CHK-1002",
    "salePrice": 170,
    "retailPrice": 189,
    "onSale": false,
    "cuts": "Medium",
    "maxQuantityCart": 10,
    "maxAvailableQuantity": 0,
    "inCartQty": 1,
    "invAvailable": true,
    "presale": false,
    "comboProduct": false,
    "comboOn": false,
    "comboSkusMapped": false,
    "comboInvAvailable": false,
    "validCampaignArea": false
  }
]
const getResizedImageUrl = url => {
  const scale = 0.25, quality = 30;
  // sample: https://ik.imagekit.io/iwcam3r8ka/prod/products/202102/tr:q-40,w-0.5,h-0.5/a4e30687-d4ea-43e0-8e51-566c03beeb26.jpg
  const imageArray = url.split('/');
  const lastIndex = imageArray.length - 1;
  imageArray[lastIndex] = `tr:q-${quality},w-${scale},h-${scale}/${imageArray[lastIndex]}`;
  const finalUrl = imageArray.join('/');
  return finalUrl;
};
const getPrice = ({onSale, retailPrice, salePrice}) => (onSale && salePrice) || retailPrice;
const getLineItems = () => {
  const lineItems = [];
  let amount = 0;
  for(let i = 0; i < cartItems.length; i++) {
    if (Math.random() > 0.5) {
        const cartItem = cartItems[i];
        amount += (getPrice(cartItem) * 100);
        lineItems.push({
            quantity: cartItem.inCartQty,
            price_data: {
                currency: 'usd',
                unit_amount: getPrice(cartItem) * 100,
                product_data: {
                    name: cartItem.productName,
                    // images: [getResizedImageUrl(cartItem.imageUrl)],
                },
            }
        });
    }
  }
  const finalItem = [{
    quantity: 1,
    price_data: {
      currency: 'usd',
      unit_amount:  amount,
      product_data: {
        name: lineItems[0].price_data.product_data.name + ` ${lineItems.length > 1 ? `+ ${lineItems.length-1} more item(s)` : ''}`,
      }
    }
  }]
  return finalItem;
}
const generateRandomNumber = prefix => prefix + '_' + Math.round(Math.random() * 10000);

async function getStripePaymentUrl(request, response) {
  console.log('Stripe Key: ', STRIPE_PVT_KEY);
  const { DEFAULT_PRICE_ID } = process.env;
  const DOMAIN = 'http://localhost:3000/'
  const { 
    priceId = DEFAULT_PRICE_ID, 
    quantity = 1,
    curl = `${DOMAIN}co/payment?&result=failed&reason=Unknown_failure_reason`,
    surl = `${DOMAIN}co/order/`,
    orderNo = generateRandomNumber('order'),
   } = request.query;
   const line_items = getLineItems();
  //  console.log('Line Items: ', JSON.stringify(line_items));
  try {
    const session = await stripe.checkout.sessions.create({
      // line_items: [
      //   {
      //     // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
      //     price: priceId,
      //     quantity,
      //   },
      // ],
      line_items,
      mode: 'payment',
      success_url: surl + `?order=${orderNo}`,
      cancel_url: curl + `?order=${orderNo}`,
      client_reference_id: orderNo ,
      currency: 'usd',
    });
    const paymentUrl = session.url;
    response.status(200).json(session);
  } catch (e) {
    response.status(400).json(e);
  }
  
}

// export default allowCors(getStripePaymentUrl);
export default getStripePaymentUrl;


// const express = require('express');
// const app = express();
// app.get('/', getStripePaymentUrl);
// app.listen(4242, () => console.log('Running on port 4242'));