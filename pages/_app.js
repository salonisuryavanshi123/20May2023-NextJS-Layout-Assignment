import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LeftAside from "@/components/LeftAside";
import RightAside from "@/components/RightAside";
import '../app/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Header />
        <main>
          <div className='row h-100'>
            <div className='col-3 s_tbdr'>
              <LeftAside />
            </div>
              <Component {...pageProps} />
          <div className='col-3 s_tbdr'>
              <RightAside />
            </div>
          </div>
        </main>
        <Footer />
    </>
  );
}

export default MyApp;