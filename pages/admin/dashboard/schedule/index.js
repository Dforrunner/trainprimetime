const Page = () => {
   return <div>
      <h1>Schedule</h1>
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