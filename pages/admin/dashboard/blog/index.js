import {BlogPost} from "../../../../components/core/Blog";

const Page = () => {

   return <div>
      <h1>Blog</h1>
      <BlogPost />
   </div>
}

export default Page;


export const getServerSideProps = async (ctx) => {
   return {
      props: {
         typeLayout: 'dashboard',
      },
   };
};