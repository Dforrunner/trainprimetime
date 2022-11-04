const dayjs = require('dayjs');

const o =  [{
   id: 12,
   title: 'fsdf',
   slug: 'sdfd',
   date: new Date(),
   excerpt: '',
   author: '',
   content: '',
   userId: null,
   publish: true,
   isScheduled: false,
   publishDate: new Date(),
   imgSrc: null,
   createdOn: new Date()
},
   {
      id: 12,
      title: 'fsdf',
      slug: 'sdfd',
      date: new Date(),
      excerpt: '',
      author: '',
      content: '',
      userId: null,
      publish: true,
      isScheduled: false,
      publishDate: new Date(),
      imgSrc: null,
      createdOn: new Date()
   }]

const convertDateObj = (obj) =>
   Object.keys(obj).map(key => {
      if(obj[key] instanceof Date && !isNaN(obj[key])){
         obj[key] = dayjs(obj[key]).format('MMMM, DD YYYY')
      }
   })

console.log(o)
o.map(convertDateObj)
console.log(o)