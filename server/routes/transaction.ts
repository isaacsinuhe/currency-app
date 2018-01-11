import * as express from 'express'
import TransactionController from '../controllers/transaction'

const setTransactionRoutes = (app: express.Express) => {
  
  const transaction = express.Router(),
  transactionController = new TransactionController()

  transaction.route('/').get(transactionController.getAll)
  transaction.route('/').post(transactionController.insert)
  transaction.route('/').delete(transactionController.delete)
  transaction.route('/:id/').put(transactionController.update)

  // Apply the routes to our application with the prefix /currency
  app.use('/transactions', transaction)
}

export default setTransactionRoutes
