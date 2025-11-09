const ProfileOverlay = ({ onMouseEnter, onMouseLeave, top = 96, right = 20 }) => {
    return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="position-fixed"
      style={{ top, right, zIndex: 1050 }}
    >
      <div className="card me-3" style={{ width: "25rem" }}>
        <div className="card-body">
          <div className="d-flex flex-column">
            {/* header user */}
            <div className="d-flex w-100 ps-3 py-2 gap-3 justify-content-start shadow-sm rounded-2">
              <img
                src="/images/users/default-profile.jpg"
                alt="user-profile"
                style={{ width: 35, height: 35, borderRadius: "50%" }}
              />
              <span className="align-self-center">Ardiyan Agus</span>
            </div>

            {/* isi kanan-kiri */}
            <div className="row mt-2">
              {/* kiri */}
              <div className="col-md-7">
                <div className="row mt-3 profile-info border-profile-info">
                  <div className="d-flex justify-content-between profile-info">
                    <img
                      src="/images/users/member-plus.image"
                      alt="member"
                      style={{ width: 55, height: 20 }}
                    />
                    <a href="#" className="text-link-primary">Langganan</a>
                  </div>
                  <span className="fw-bold" style={{ fontSize: 12 }}>
                    Nikmati Gratis Ongkir Tanpa Batas
                  </span>
                  <p className="mb-0" style={{ fontSize: 10 }}>
                    Min. belanja Rp0, bebas biaya aplikasi
                  </p>
                </div>

                {[
                  { img: "/images/users/gopay.image", label: "Gopay", action: "Aktifkan" },
                  { img: "/images/users/tokped-card.png", label: "Tokopedia Card", action: "Daftar" },
                  { img: "/images/users/saldo.svg", label: "Saldo", action: "Rp. 0", isText: true },
                ].map((item, i) => (
                  <div key={i} className="row profile-info border-profile-info py-2">
                    <div className="d-flex justify-content-between">
                      <div>
                        <img src={item.img} alt={item.label} className="image-payment" />
                        <span className="ms-1 align-self-center">{item.label}</span>
                      </div>
                      {item.isText ? (
                        <span className="align-self-center">{item.action}</span>
                      ) : (
                        <a href="#" className="text-link-primary align-self-center">
                          {item.action}
                        </a>
                      )}
                    </div>
                  </div>
                ))}

                <div className="border-profile-promo row pb-3">
                  {[
                    ["Tokopedia Seru", "Lihat"],
                    ["Misi Seru", "0"],
                    ["Kupon Saya", "Cek"],
                  ].map(([l, r], idx) => (
                    <div key={idx} className="d-flex justify-content-between mt-3">
                      <span>{l}</span><span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* kanan */}
              <div className="col-md-4 d-flex">
                <div className="d-flex mt-3 flex-column justify-content-between">
                  <div>
                    <p className="mb-2">Pembelian</p>
                    <p className="mb-2">Whislist</p>
                    <p className="mb-2">Toko Favorit</p>
                    <p className="mb-0">Pengaturan</p>
                  </div>
                  <button className="btn btn-link d-flex gap-2 align-self-start pb-3">
                    <span>Keluar</span>
                    <img
                      className="mt-1"
                      src="/images/general/logout.svg"
                      alt="logout"
                      style={{ width: 20, height: 20 }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default ProfileOverlay;