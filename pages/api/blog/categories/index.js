import prisma from "../../../../prisma";

export default async (req, res) => {
   //Confirm request type
   if (req.method !== 'GET')
      return res.status(405).json({status: 'error', message: 'Method not allowed'})

   const data = await prisma.category.findMany()

   res.status(200).json({status: 'success', data})
}
