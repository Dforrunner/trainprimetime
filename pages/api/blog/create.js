import prisma from "../../../prisma";
import dayjs from "dayjs";
import {ValidateBlogPost} from "../../../utils/dataValidation";

export default async (req, res) => {
   //Confirm request type
   if (req.method !== 'POST')
      return res.status(405).json({status: 'error', message: 'Method not allowed'})

   const data = JSON.parse(req.body)
   const validate = ValidateBlogPost(data) //Validate post data schema

   if(validate.error)
      return res.status(409).json({status: 'error', message: validate.error})

   //Check to see if the slug exists
   const slugConflict = await prisma.post.findMany({
      where: {
         slug: data.slug
      }
   })

   //If it exists, then return an error to the client
   if(slugConflict.length)
      return res.status(409).json({status: 'error', field: 'slug', message: 'Slug already exists and they must be unique'})

   try {
      //Insert the date into the DB
      const saveBlog = await prisma.post.create({
         data: {
            ...data,
            date: dayjs(data.date).format(),
            tags: [...data.tags.newTags, ...data.tags.existingTags],
            categories: data.categories
         }
      })

      //Return response to client
      res.status(200).json({status: 'success', data: saveBlog})

   } catch (e){
      console.error(e)

      //Return response to client
      res.status(409).json({status: 'error', message: 'Improper data'})
   } finally {

      //Add new tags to the DB
      const tags = data.tags.newTags.map(i => ({name: i}))

      await prisma.$transaction(
         tags.map(tag =>
            prisma.tag.upsert({
               where: tag,
               update: tag,
               create: tag,
            })
         )
      );
   }

}
