const { PrismaClient, Prisma } = require('@prisma/client');
const dayjs = require('dayjs');

const prisma =  new PrismaClient();

/**
 * Middleware
 *
 * used to convert Date objects into formatted date strings
 */
prisma.$use(async (params, next) => {
   // Manipulate params here
   const result = await next(params)

   const convertDateObj = (obj) =>
      Object.keys(obj).map(key => {
         if(obj[key] instanceof Date && !isNaN(obj[key])){
            obj[key] = dayjs(obj[key]).format('MMMM, DD YYYY')
         }
      })

   if(Array.isArray(result))
      result.map(convertDateObj)
   else
      convertDateObj(result);

   // See results here
   return result
})

export default prisma;


export const ErrorHandler = (err, res) => {
   if (err instanceof Prisma.PrismaClientKnownRequestError)
      if(err.code === 'P2002')
         res.status(409).json({status: 'error', message: 'Value already exists. They must be unique'})
}