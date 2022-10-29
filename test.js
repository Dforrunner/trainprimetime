const prisma = require('./prisma')

const data = {
   "title": "Title",
   "slug": "post-2",
   "excerpt": "sdfsdf s fsd sdf sdf sdfsdfs",
   "author": "Mo",
   "content": "<h1>Header 1</h1><h2><span style=\"color: rgb(230, 0, 0);\">Header 2</span></h2><p><span style=\"background-color: rgb(0, 138, 0); color: rgb(255, 255, 0);\">highlighted</span></p><ol><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>ordered</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>two</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>three</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>four</li></ol><p><strong><s>dsfd sdf sdf sdfdsfsdf</s> dsfs <u>fsdf sdfsd fsdfsd</u></strong></p>"
}


const test = async () => {
   const saveBlog = await prisma.blogs.create({
      data: data
   })

   console.log(await saveBlog)
}
test()