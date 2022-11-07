import prisma from "../../../prisma";

export default async (req, res) => {
   //Confirm request type
   if (req.method !== 'POST')
      return res.status(405).json({status: 'error', message: 'Method not allowed'})

   const {id, blogData} = JSON.parse(req.body)

   if(!id)
      return res.status(409).json({status: 'error', message: 'Missing `id` property'})

   const update = await prisma.post.update({
      where: { id },
      data: blogData
   })

   res.status(200).json({status: 'success', data: update})
}
