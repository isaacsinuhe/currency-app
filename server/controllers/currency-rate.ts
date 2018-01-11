import axios from 'axios'
import CurrencyRate from '../models/currency-rate';
import Controller from './base'
import { Request, Response } from 'express';
import * as fs from 'fs'
import * as util from 'util'

util.promisify(fs.writeFile)

export default class CurrencyRateController extends Controller {
    model = CurrencyRate
    url = 'https://openexchangerates.org/api/latest.json'
    consumerId = process.env.EXCHANGE_RATES_ID as string
    fileName = 'currencies.txt'
    GET_STRING = `${this.url}?app_id=${this.consumerId}`

    fetchAll = async(req: Request, res: Response) => {
        try {
            const { data: {rates} } = await axios.get(this.GET_STRING)
            const file = await new Promise((resolve, reject) => {
                const fileData = JSON.stringify(rates)
                                    .replace(/:/g, '=')
                                    .replace(/{|}|"/g, '')
                                    .replace(/,/g, '\n')
                fs.writeFile(this.fileName, fileData, { encoding: 'UTF-8' }, 
                             (err) => err ? reject(false) : resolve(true))
            })
            if (rates && file) {
                const dataAsArray = Object.entries(rates).reduce(
                    (acc, [code, rate]) => {
                        acc.push({currencyCode: code, currentRateValue: rate} as never)
                        return acc
                    },
                    []
                )
                res.status(200).json(dataAsArray)
            } else {
                res.status(404).json('not found')
            }
        } catch {
            res.status(500).json('error')
        }
        
    }
}
