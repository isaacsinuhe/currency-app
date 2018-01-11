import { Request, Response } from 'express'
import { Model, Document } from 'mongoose'

abstract class Controller {

  abstract model: Model<Document>

  // Get all
  getAll = (req: Request, res: Response) => {
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err) }
      res.status(200).json(docs)
    })
  }

  count = (req: Request, res: Response) => {
    this.model.count((err: any, count: number) => {
      if (err) { return console.error(err) }
      res.json(count)
    })
  }

  insert = (req: Request, res: Response) => {
    console.log(req.body)
    const obj = new this.model(req.body)
    
    obj.save((err, item) => {
      // 11000 is the code for duplicate key error
      if (err && err.code === 11000) {
        res.sendStatus(400)
      }
      if (err) {
        return console.error(err)
      }
      res.status(200).json(item)
    })
  }

  // Get by id
  get = (req: Request, res: Response) => {
    this.model.findOne({ _id: req.params.id }, (err, obj) => {
      if (err) { return console.error(err) }
      res.json(obj)
    })
  }

  // Update by id
  update = (req: Request, res: Response) => {
    this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
      if (err) { return console.error(err) }
      res.sendStatus(200)
    })
  }

  // Delete by id
  delete = (req: Request, res: Response) => {
    this.model.findOneAndRemove({ _id: req.body.id }, (err) => {
      if (err) { return console.error(err) }
      res.sendStatus(200)
    })
  }
}

export default Controller
