import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-20 flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
