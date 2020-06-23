import mongoose from 'mongoose'
import pick from 'lodash.pick'
import Joi from 'joi'

/** create a schema (data modeling) */
const schema = {
  title: {
    type: String,
    required: [true, 'Please enter a title'],
    uppercase: true,
  },
  description: String,
  author: {
    type: String,
    required: [true, 'Please enter an author'],
    uppercase: true,
  },
  image: {
    type: String,
    trim: true,
  },
  draft: {
    type: Boolean,
    required: [true, 'Please make a selection for draft'],
  },
}

/** create the model */
const shotSchema = new mongoose.Schema(schema, { timestamps: true })

/** choose shot data to send back to client */
shotSchema.methods.toJSON = function () {
  let shotObject = this.toObject()
  return pick(shotObject, ['_id', 'title', 'description', 'author', 'image'])
}

/** export model */
export const Shot = mongoose.model('shot', shotSchema)

export function validateShot(data) {
  const schema = Joi.object().keys({
    title: Joi.string().required().label('Title is required'),
    author: Joi.string().required().label('Author is required'),
    image: Joi.string().required().label('Image is required'),
    draft: Joi.string().required().label('Draft is required'),
  })
  return Joi.validate(data, schema)
}
