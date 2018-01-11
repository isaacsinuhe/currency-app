import * as http from 'http'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as dotenv from 'dotenv'
import * as morgan from 'morgan'
import * as mongoose from 'mongoose'
import setCurrencyRoutes from './routes/currency'
import setTransactionRoutes from './routes/transaction'

dotenv.config({ path: '.env' })
const { PORT = 8000, PWD = __dirname } = process.env
const app = express()

app.set('port', PORT)
app.use(express.static(path.resolve(PWD, 'build')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'));

// mongoose 
(<any> mongoose).Promise = global.Promise
const connection = mongoose.connect(
    process.env.MONGODB_URI as string,
    { useMongoClient: true }
)

const server = http.createServer(app)
connection.then(() => {
        console.log('Connected to MongoDB')

        // connected to mongo and routes fully setted up
        setCurrencyRoutes(app)
        setTransactionRoutes(app)
        
        app.all('/', (req, res) => {
            res.sendFile('index.html')
        })

        server.listen(app.get('port'), () => {
            console.log('Express listening on port ' + app.get('port'))
        })
    })
    .catch((e) => {
        console.log('connection error:')
    })

export { app }
