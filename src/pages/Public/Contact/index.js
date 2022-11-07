import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const ContactForm = () => (
  <form className="w-full max-w-screen-lg grid lg:grid-cols-2 mx-auto">
    <img
      src="https://static.wixstatic.com/media/d4abae_b448c3d2a27f48da8a56636fa32d8a61~mv2.jpg/v1/crop/x_197,y_0,w_917,h_720/fill/w_431,h_340,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Diapositiva3_edited.jpg"
      alt="contact form"
      className="w-full aspect-video lg:aspect-square"
    />
    <div className="grid grid-cols-2 auto-rows-max gap-1 bg-tc">
      <div className="p-2">
        <label className="block text-sm text-white">Nombre</label>
        <input type="text" className="w-full p-1 bg-transparent text-white border-[1px] border-white focus:border-[rgb(208,180,143)] outline-none"/>
      </div>
      <div className="p-2">
        <label className="block text-sm text-white">Apellido</label>
        <input type="text" className="w-full p-1 bg-transparent text-white border-[1px] border-white focus:border-[rgb(208,180,143)] outline-none"/>
      </div>
      <div className="col-span-2 p-2">
        <label className="block text-sm text-white">Email *</label>
        <input type="email" className="w-full p-1 bg-transparent text-white border-[1px] border-white focus:border-[rgb(208,180,143)] outline-none"/>
      </div>
      <div className="col-span-2 p-2">
         <label className="text-white text-sm ">Mensaje</label>
         <textarea name="" id="" cols="30" rows="10" className="w-full resize-none p-1 text-white border-[1px] border-white  bg-transparent focus:border-[rgb(208,180,143)] outline-none"></textarea>
      </div>
      <div className="p-2 col-start-2">
      <button className="bg-[rgb(208,180,143)] p-2 w-full">Enviar</button>
      </div>
     
    </div>
  </form>
);

const Contact = () => {
  return (
    <div className="bg-bc w-full grid auto-rows-auto gap-6 pt-6 p-2">
      <h2 className="text-5xl font-light text-center">Get in Touch</h2>

      <ContactForm />
      <div className="grid md:grid-cols-[max-content_auto] items-center max-w-screen-lg mx-auto w-full text-tc">
         <h2 className="text-3xl w-max px-8 mx-auto" >Contacto:</h2>
         <div className="grid grid-cols-2 text-center">
            <div>
               <p className="font-light text-lg">Domicilio</p>
               <p className="font-light">Guadalajara, Jalisco <br/> Mexico </p>
            </div>
            <div>
               <p className="font-light text-lg">Telefono</p>
               <p className="font-light">+52 33 19862244</p>
            </div>
            <div>
               <p className="font-light text-lg">Email</p>
               <a className="font-light" href="mailto:ventas@itap.store">ventas@itap.store</a>
            </div>
            <div>
               <p className="font-light text-lg">Social Media</p>
               <p className="font-light flex gap-2 w-max m-auto">
                  <a href="https://www.facebook.com/wix" target="_blank" rel="noopener noreferrer"><BsFacebook/></a><a href="https://www.facebook.com/wix" target="_blank" rel="noopener noreferrer"><BsTwitter/></a><a href="https://www.facebook.com/wix" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a><a href="https://www.facebook.com/wix" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
               </p>
            </div>
         </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7463.684307880634!2d-103.38588517588836!3d20.716633389085324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428afb798860bad%3A0x4dba7b21490de7cf!2sEl%20Capullo%2C%20Zapopan%2C%20Jal.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2sve!4v1667803950782!5m2!1ses-419!2sve" className="border-0 w-full aspect-video max-w-screen-lg mx-auto" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map direction"/>
    </div>
  );
};

export default Contact;
