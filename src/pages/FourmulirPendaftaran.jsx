// import React from "react";
import { ArrowAltLdown } from "./ArrowAltLdown";
import { Footer } from "./Footer";
import "./formulir_pendaftaran.css";

export const FormulirPendaftaran = () => {
  return (
    <div className="formulir-pendaftaran">
      <div className="div-2">
        <div className="text-wrapper-11">Pernah Mendonor Sebelumnya ?</div>
        <div className="text-wrapper-12">Ya</div>
        <div className="text-wrapper-13">A</div>
        <div className="text-wrapper-14">Tidak</div>
        <div className="text-wrapper-15">B</div>
        <div className="text-wrapper-16">AB</div>
        <div className="text-wrapper-17">O</div>
        <div className="text-wrapper-18">Nama Lengkap</div>
        <div className="text-wrapper-19">Alamat</div>
        <div className="text-wrapper-20">Tanggal Lahir</div>
        <div className="text-wrapper-21">Jenis Kelamin</div>
        <div className="text-wrapper-22">No Telp / HP</div>
        <div className="text-wrapper-23">Email</div>
        <p className="text-wrapper-24">
          Saya Bersedia mendonorkan darah saya apabila sewaktu-waktu ada yang membutuhkan.
        </p>
        <div className="text-wrapper-25">Golongan Darah</div>
        <div className="ellipse" />
        <div className="ellipse-2" />
        <div className="ellipse-3" />
        <div className="ellipse-4" />
        <div className="ellipse-5" />
        <div className="ellipse-6" />
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="rectangle-4" />
        <div className="rectangle-5" />
        <div className="div-wrapper">
          <div className="text-wrapper-26">Kirim Formulir</div>
        </div>
        <div className="rectangle-6" />
        <div className="rectangle-7" />
        <div className="text-wrapper-27">Formulir Pendaftaran Donor Darah</div>
        <div className="overlap-wrapper">
          <div className="overlap-3">
            <ArrowAltLdown className="arrow-alt-ldown" />
            <header className="header">
              <div className="navbar-wrapper">
                <div className="navbar">
                  <div className="text-wrapper-28">Beranda</div>
                  <div className="text-wrapper-29">Event</div>
                  <div className="text-wrapper-30">Stok Darah</div>
                  <div className="text-wrapper-31">Jadwal</div>
                  <div className="text-wrapper-32">Riwayat</div>
                  <div className="text-wrapper-33">Reward</div>
                  <div className="text-wrapper-34">Hasmar</div>
                </div>
              </div>
            </header>
            <img className="logo-lifebloodid-2" alt="Logo lifebloodid" src="logo-lifebloodid.png" />
            <img className="mask-group" alt="Mask group" src="mask-group.png" />
            <img className="arrow" alt="Arrow" src="arrow-2.svg" />
          </div>
        </div>
        <Footer
          className="footer-instance"
          event="image.svg"
          eventNote="event-note-2.svg"
          instagram="instagram-2.png"
          logoLifebloodid="logo-lifebloodid-2.png"
          overlapClassName="design-component-instance-node"
          overlapClassNameOverride="footer-2"
          rh="rh-2.png"
          spatialTracking="spatial-tracking-2.svg"
          twitter="twitter-2.png"
          vector="vector-2.svg"
          youtubeLogo="youtube-logo-2.png"
        />
      </div>
    </div>
  );
};

export default FormulirPendaftaran;
