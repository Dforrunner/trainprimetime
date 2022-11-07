import prisma from "../../../../prisma";

export default async (req, res) => {
   //Confirm request type
   if (req.method !== 'GET')
      return res.status(405).json({status: 'error', message: 'Method not allowed'})

   //Get categories and tags
   const [categories, tags] = await prisma.$transaction(
      [
         prisma.category.findMany(),
         prisma.tag.findMany()
      ])

   //Format the data into arrays of names
   const data = {
      categories: categories.map(i => i.name),
      tags: tags.map(i => i.name)
   }

   res.status(200).json({status: 'success', data})
}
