const bnplResp = {
    bnpl: {
        all: {
            Lazypay: {
                status: 1,
                availableBalance: 100, // only if applicable
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
                // availableBalance: 500, // only if applicable
                kfsLink: 'https://www.somekfsLink.com', // only if applicable
                eligible: false, // based on amount and not to return available balance if eligible is false
                customerLinked: false,
                failure_code: 'E2408',
                failure_reason:
                'The transaction or loan amount is greater than the available credit line with the customer'
            }
        }
    }
  };

  export const bnpl2Original = bnplResp;
  module.exports = {bnpl2Original: bnplResp}
