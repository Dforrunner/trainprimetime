import * as Joi from 'joi';

/**
 * Using Joi to validate post schema
 * Used before adding a post to DB or updating a post in DB
 * Doc: https://joi.dev/api/?v=17.7.0#introduction
 * @type {Joi.ObjectSchema<any>}
 */
const blogPostSchema = Joi.object({
   id: Joi.string(),
   userId: Joi.string(),
   img: Joi.string(),
   title: Joi.string().required(),
   slug: Joi.string().required(),
   date: Joi.date().required(),
   author: Joi.string(),
   excerpt: Joi.string(),
   content: Joi.string(),
   publish: Joi.boolean(),
   isScheduled: Joi.boolean(),
   publishDate: Joi.when('isScheduled', {
      is: true,
      then: Joi.date().required()
   }),
   tags: {
      newTags: Joi.array().items(Joi.string()),
      existingTags: Joi.array().items(Joi.string())
   },
   categories: Joi.array().items(Joi.string())
})

export const ValidateBlogPost = data => blogPostSchema.validate(data)