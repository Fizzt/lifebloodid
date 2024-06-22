import React from "react";
import "./riwayat.css"

function Riwayat() {
    return (
        <>
            <nav>
                <div className="navbar">
                    <div className="logo">
                        <a href="#">
                            <img src="img/logo.png" width="100px" height="100px" alt="" />
                        </a>
                    </div>
                    <ul className="menu">
                        <li>
                            <a href="#Home">Beranda</a>
                        </li>
                        <li>
                            <a href="#About">Event</a>
                        </li>
                        <li>
                            <a href="#Category">Stok Darah</a>
                        </li>
                        <li>
                            <a href="#Contact">Jadwal</a>
                        </li>
                        <li>
                            <a href="#riwayat">Riwayat</a>
                        </li>
                        <li>
                            <a href="coba.html">Reward</a>
                        </li>
                    </ul>
                    <div className="profil">
                        <a href="#">
                            <img src="img/profil.png" alt="" />
                        </a>
                    </div>
                </div>
            </nav>
            <section id="control">
                <h5 className="control">Riwayat Anda</h5>
                <div className="grp-search">
                    <div className="list-search">
                        <img className="img-search" src="img/mingcute_search-line.svg" alt="" />
                        <div className="search">Temukan Riwayat</div>
                    </div>
                    <div className="list">Perbulan ▼</div>
                </div>
                <div className="content">
                    <div className="frame">
                        <img src="img/donor.png" alt="" />
                        <div className="text-wrapper">
                            <div className="date-text">31 Mei 2024</div>
                            <h3 className="header-text">Ayo Donor Darah</h3>
                            <p>
                                Donor darah dilakukan di rumah sakit suka cita jam 12 hingga jam 7
                                sore. anda menyumbangkan 500ml darah
                            </p>
                            <a href="coba.html">
                                <div className="detail">Cek Detail</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="frame">
                        <img src="img/donor.png" alt="" />
                        <div className="text-wrapper">
                            <div className="date-text">31 Mei 2024</div>
                            <h3 className="header-text">Ayo Donor Darah</h3>
                            <p>
                                Donor darah dilakukan di rumah sakit suka cita jam 12 hingga jam 7
                                sore. anda menyumbangkan 500ml darah
                            </p>
                            <a href="coba.html">
                                <div className="detail">Cek Detail</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="frame">
                        <img src="img/donor.png" alt="" />
                        <div className="text-wrapper">
                            <div className="date-text">31 Mei 2024</div>
                            <h3 className="header-text">Ayo Donor Darah</h3>
                            <p>
                                Donor darah dilakukan di rumah sakit suka cita jam 12 hingga jam 7
                                sore. anda menyumbangkan 500ml darah
                            </p>
                            <a href="coba.html">
                                <div className="detail">Cek Detail</div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer">
                <div className="footer-wrapper">
                    <div className="div-wrapper">
                        <div className="overlap">
                            <div className="group">
                                <div className="div-wrapper">
                                    <div className="div">
                                        <img
                                            className="logo-lifebloodid"
                                            src="img/logo-lifebloodid.png"
                                        />
                                        <div className="group-2">
                                            <div className="text-wrapper">Hubungi Kami</div>
                                            <p className="p">
                                                Jalan Ratu Langit No. 127, Kota Mojekerto, Jawa Timur
                                            </p>
                                            <div className="text-wrapper-2">+6289604223348</div>
                                            <div className="text-wrapper-3">lifebloodid@gmail.or.id</div>
                                            <div className="overlap-group">
                                                <img className="call-calling" src="img/call-calling.svg" />
                                            </div>
                                            <div className="directbox-default-wrapper">
                                                <img
                                                    className="directbox-default"
                                                    src="img/directbox-default-2.svg"
                                                />
                                            </div>
                                        </div>
                                        <div className="group-3">
                                            <div className="text-wrapper-4">Tentang LifeBloodID</div>
                                            <div className="text-wrapper-5">Ketentuan Pengguna</div>
                                            <div className="text-wrapper-6">Pusat Bantuan</div>
                                            <div className="kebijakan-aplikasi">
                                                Kebijakan &amp; Aplikasi
                                            </div>
                                            <div className="text-wrapper-7">FAQ</div>
                                        </div>
                                        <div className="group-wrapper">
                                            <div className="group-4">
                                                <div className="group-5">
                                                    <div className="group-6">
                                                        <div className="group-7">
                                                            <div className="text-wrapper-4">Jadwal</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img className="event-note" src="img/event-note.svg" />
                                                <div className="text-wrapper-8">Riwayat</div>
                                                <img
                                                    className="spatial-tracking"
                                                    src="img/spatial-tracking.svg"
                                                />
                                                <div className="text-wrapper-9">Event</div>
                                                <div className="text-wrapper-10">Stok Darah</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group-8">
                                <div className="group-9">
                                    <div className="group-10" />
                                    <img className="event" src="img/event.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Riwayat;