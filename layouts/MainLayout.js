import Footer from "../components/user/Footer";
import Nav from "../components/user/Nav";

const MainLayout = ({children}) => {
   return <>
      <Nav />
      <main>
         {children}
      </main>
      <Footer />
   </>
}

export default MainLayout;