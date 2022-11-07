import prisma from "../../../../prisma";

export default async (req, res) => {
   //Confirm request type
   if (req.method !== 'GET')
      return res.status(405).json({status: 'error', message: 'Method not allowed'})

   //Get all category names
   const data = await prisma.category.findMany()

   //Convert object into array of category names only
   const names = data.map(i => i.name)

   res.status(200).json({status: 'success', data: names})
}
