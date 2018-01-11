import { Schema, model } from 'mongoose'

const TransactionSchema = new Schema(
    {
        date: String,
        concept: String,
        ammount: Number,
        type: String
    },
    {
        timestamps: { createdAt: 'createdAt' } 
    }
)

export const Transaction = model('Transaction', TransactionSchema)

export default Transaction
