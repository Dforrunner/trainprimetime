import prisma from "../../../prisma";

export default async (req, res) => {
   //Confirm request type
   if (req.method !== 'POST')
      return res.status(405).json({status: 'error', message: 'Method not allowed'})

   const {id, data} = JSON.parse(req.body);



   if(!id || !data || !data.title || !data.slug)
      return res.status(409).json({status: 'error', message: 'Missing required fields'})


   //Check to see if the slug exists
   const slugConflict = await prisma.post.findMany({
      where: {
         slug: data.slug,
         NOT: {
            id: id
         }
      }
   })

   //If it exists, then return an error to the client
   if(slugConflict.length)
      return res.status(409).json({status: 'error', field: 'slug', message: 'Slug already exists and they must be unique'})

   const update = await prisma.post.update({
      where: { id },
      data: data
   })

   res.status(200).json({status: 'success', data: update})
}
