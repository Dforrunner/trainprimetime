
const Dashboard = () => {
   return <div>
      Dashboard
   </div>
}

export default Dashboard;

export const getServerSideProps = async (ctx) => {
   return {
      props: {
         typeLayout : 'dashboard',
      },
   };
};