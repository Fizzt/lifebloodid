import React from "react";
import "./stokDarah.css"

function stokDarah() {
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
                            <a href="index.html">Beranda</a>
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
            <div className="stok">
                <h5 className="darah">
                    <b>Stok Darah | PMI Kab. Mojokerto</b>
                </h5>
                <div className="small-text">Update | 8 Mei 2024</div>
                <table border="2px solid black">
                    <tbody>
                        <tr align="center">
                            <th>NO</th>
                            <th>PRODUK</th>
                            <th>A+</th>
                            <th>B+</th>
                            <th>O+</th>
                            <th>AB+</th>
                            <th>TOTAL</th>
                        </tr>
                        <tr align="center">
                            <td>1</td>
                            <td>THROMBOCYTE CONCENTRATE (TC)</td>
                            <td>12</td>
                            <td>1</td>
                            <td>36</td>
                            <td>5</td>
                            <td>54</td>
                        </tr>
                        <tr align="center">
                            <td>2</td>
                            <td>PACKED RED CELL (PC)</td>
                            <td>5</td>
                            <td>0</td>
                            <td>22</td>
                            <td>0</td>
                            <td>27</td>
                        </tr>
                        <tr align="center">
                            <td>3</td>
                            <td>PACKED RED CELL LEUKO REDUCE (PCLR)</td>
                            <td>0</td>
                            <td>0</td>
                            <td>25</td>
                            <td>40</td>
                            <td>65</td>
                        </tr>
                        <tr align="center">
                            <td>4</td>
                            <td>FRESH FROZEN PLASMA (FFP)</td>
                            <td>22</td>
                            <td>21</td>
                            <td>30</td>
                            <td>24</td>
                            <td>97</td>
                        </tr>
                        <tr align="center">
                            <td>5</td>
                            <td>ANTI HEMOPHILIC FACTOR (AHF)</td>
                            <td>32</td>
                            <td>0</td>
                            <td>10</td>
                            <td>28</td>
                            <td>70</td>
                        </tr>
                        <tr align="center">
                            <th colSpan={2}>Total</th>
                            <th>71</th>
                            <th>22</th>
                            <th>123</th>
                            <th>97</th>
                            <th>313</th>
                        </tr>
                    </tbody>
                </table>
                <div className="small-text-2">
                    *Jumlah Stok darah dapat berubah sewaktu-waktu, untuk info stok darah
                    terkini silahkan pantau website kami secara berkala atau menghubungi Unit
                    PMI terkait.
                </div>
            </div>
            <div className="footer">
                <footer>
                    <div className="wrap-footer">
                        <img src="img/logo-lifebloodid.png" alt="" />
                        <div className="text-wrapper-footer">Hubungi Kami</div>
                        <div className="text-wrapper-footer-1">
                            Jalan Ratu Langit No. 127, Kota Mojekerto, Jawa Timur
                        </div>
                        <div className="group-wrapper-foot">
                            <div className="text-wrapper-footer-2">+6289604223348</div>
                            <div className="text-wrapper-footer-3">lifebloodid@gmail.or.id</div>
                        </div>
                        <div className="about-foot">
                            <div className="head-about">Tentang LifeBlood</div>
                            <div className="head-about2">Kebijakan &amp; Aplikasi</div>
                            <div className="head-about3">Pusat Bantuan</div>
                        </div>
                        <div className="about-foot1">
                            <div className="head-about4">Ketentuan Pengguna</div>
                            <div className="head-about5">FAQ</div>
                        </div>
                        <div className="link-to">
                            <div className="link1">Event</div>
                            <div className="link2">Stok Darah</div>
                            <div className="link3">Jadwal</div>
                            <div className="link4">Riwayat</div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default stokDarah;