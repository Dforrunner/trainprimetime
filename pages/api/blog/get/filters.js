import prisma from "../../../../prisma";

export default async (req, res) => {
   //Confirm request type
   if (req.method !== 'GET')
      return res.status(405).json({status: 'error', message: 'Method not allowed'})

   const [categories, tags] = await Promise.allSettled(
      [
         prisma.category.findMany(),
         prisma.tag.findMany()
      ])

   const data = {
      categories: categories.value,
      tags: tags.value
   }

   res.status(200).json({status: 'success', data})
}
