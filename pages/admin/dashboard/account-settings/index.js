const Page = () => {
   return <div>
      <h1>Account Settings</h1>
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