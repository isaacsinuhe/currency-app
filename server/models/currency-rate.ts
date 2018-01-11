import { Schema, model } from 'mongoose'

const CurrencyRateSchema = new Schema(
    {
        disclaimer: String,
        license: String,
        timestamp: Number,
        base: String,
        rates: {}
    },
    {
        timestamps: { createdAt: 'createdAt' } 
    })

export const CurrencyRate = model('CurrencyRate', CurrencyRateSchema)

export default CurrencyRate
