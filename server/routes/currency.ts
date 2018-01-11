import * as express from 'express'

import CurrencyRateController from '../controllers/currency-rate'

const setCurrencyRoutes = (app: express.Express) => {
  
  const currency = express.Router(),
  currencyRatesController = new CurrencyRateController()

  currency.route('/rates').get(currencyRatesController.fetchAll)

  // Apply the routes to our application with the prefix /currency
  app.use('/currency', currency)
}

export default setCurrencyRoutes
