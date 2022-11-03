import prisma from "../../prisma";

const BlogPost = ({blog}) => {
   console.log(blog)
   return <div className='min-h-[600px]'>
      {JSON.stringify(blog)}
   </div>
}

export default BlogPost;

export async function getServerSideProps({ params }) {
   const slug = params.slug;

   const blog = await prisma.blogs.findFirst({
      where: {
         slug: slug
      }
   });

   return {
      notFound: !blog,
      // Passed to the page component as props
      props: {blog}
   }
}