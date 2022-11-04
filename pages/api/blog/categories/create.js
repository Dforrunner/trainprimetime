import prisma, {ErrorHandler} from "../../../../prisma";

export default async (req, res) => {
   //Confirm request type
   if (req.method !== 'POST')
      return res.status(405).json({status: 'error', message: 'Method not allowed'})

   const {categoryName} = JSON.parse(req.body)

   if(!categoryName)
      return res.status(400).json({status: 'error', message: 'Missing `category` data'})

   try {
      //Insert the date into the DB
      const saveCategory = await prisma.category.create({
         data: {
            name: categoryName
         }
      })

      //Return response to client
      res.status(200).json({status: 'success', data: saveCategory})
   } catch (e) {
      ErrorHandler(e, res)
   }
}
