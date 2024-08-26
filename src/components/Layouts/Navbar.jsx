import { useState } from "react";
import "../../styles/main.css";
import "../../styles/navbar.css"

const Navbar = () => {
  const [currentState, setCurrentState] = useState(false)
  const handlingCardDownload = (type) => {
    console.log(type)
    if(type === 'show') {
      setCurrentState(true)
    } else {
      setCurrentState(false)
    }
  }

  return (
    <div className="navbar">
      <div className="row col-md-12">
        <div className="col-md-6 flex">
          <p style={{ marginLeft: '50px' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-phone"
              viewBox="0 0 16 16"
              style={{ marginTop: '-8px' }}
            >
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>
            <a className="navbar-font" onMouseEnter={() => handlingCardDownload('show')} onMouseLeave={() => handlingCardDownload('hide')}>Download Tokopedia App</a>
            <div onMouseEnter={() => handlingCardDownload('show')} onMouseLeave={() => handlingCardDownload('hide')} className={currentState === false ? "d-none" : "p-5 shadow rounded d-flex justify-content-around"} id="download-tokped-app" style={{ backgroundColor: 'white', position: 'absolute', zIndex: 999 }}>
              <div> 
              <img src="/images/navbar/qrcode-tokped.png" alt="qrcode" />
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center" style={{ marginLeft: '10%' }}>
                <p className="text-center" style={{ fontSize: '17px', fontWeight: '600' }}>Scan this QR or download app from:</p>
                <img src="/images/navbar/play-store.png" alt="play-store" style={{ width: '50%' }} className="rounded mb-3"/>
                <img src="/images/navbar/app-store.png" alt="app-store" style={{ width: '50%' }}/>
              </div>
            </div>
          </p>
        </div>
        <div className="col-md-6">
          <ul className="p-0 d-flex list-inline justify-content-around navbar-font">
            <li>
              <a href="">Tentang Tokopedia</a>
            </li>
            <li>
              <a href="">Mitra Tokopedia</a>
            </li>
            <li>
              <a href="">Mulai Berjualan</a>
            </li>
            <li>
              <a href="">Promo</a>
            </li>
            <li>
              <a href="">Tokopedia Care</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
