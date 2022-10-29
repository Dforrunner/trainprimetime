import prisma from "../../prisma";
import dayjs from "dayjs";

export default async (req, res) => {
   //Confirm request type is POST
   if (req.method !== 'POST')
      return res.status(405).json({message: 'Method not allowed'})

   const {initialSave, id, blogData} = JSON.parse(req.body)
   //format date for DB
   blogData.date = dayjs(blogData.date).format()

   //If the post data contains the post id then that means the user has already saved the data once, and they
   //trying to save it again, in which case we need to update the data rather than creating a new entry
   if(!initialSave && id){
      const update = await prisma.blogs.update({
         where: { id },
         data: blogData
      })

      return res.status(200).json({status: 'saved', data: update})
   }

   //Check to see if the slug exists
   const slugConflict = await prisma.blogs.findFirst({
      where: {
         slug: blogData.slug
      }
   })

   //If it exists, then return an error to the client
   if(slugConflict)
      return res.status(409).json({status: 'error', field: 'slug', message: 'Slug already exists and they must be unique'})

   //Insert the date into the DB
   const saveBlog = await prisma.blogs.create({
      data: blogData
   })

   //Return response to client
   res.status(200).json({status: 'success', data: saveBlog})
}
