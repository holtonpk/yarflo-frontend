import React from "react";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
const About = () => {
  return (
    <>
      <Nav />
      <div className="about-container py-12">
        <div className="flex justify-center items-center mb-12">
          {/* <img
          src={require("./logo.png")}
          alt="Yardflo logo"
          className="w-32 h-32 mr-4"
        /> */}
          <h1 className=" font-medium text-c1 text-4xl">About Us</h1>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <p className="text-lg mb-4 text-center">
            Welcome to Yardflo, your one-stop shop for all things home and
            outdoor living. Our extensive collection of furniture, decor,
            lighting, and rugs will help you create the perfect look and feel
            for your home, inside and out.
          </p>
          <p className="text-lg mb-4 text-center">
            We believe that shopping for your home should be fun and easy.
            That's why we offer a wide variety of products and styles, as well
            as a team of experts who are always happy to help. Whether you're
            looking for a new sofa or a statement piece of decor, we've got you
            covered.
          </p>
          <p className="text-lg mb-4 text-center">
            Our wide variety of furniture options includes everything from cozy
            sofas and armchairs to dining tables and bedroom sets. Our outdoor
            living selection includes stylish and durable patio furniture,
            perfect for entertaining guests or relaxing on a warm summer
            evening.
          </p>
          <p className="text-lg mb-4 text-center">
            We also offer an extensive selection of decor items to add the
            finishing touches to any room, including wall art, mirrors, and
            vases. And with our wide range of lighting options, you can create
            the perfect ambiance for any occasion.
          </p>
          <p className="text-lg mb-4 text-center">
            Our selection of rugs is second to none, with a wide range of styles
            and sizes to choose from. Whether you're looking for a classic
            Persian rug or a modern geometric pattern, we've got you covered.
          </p>
          <p className="text-lg mb-4 text-center">
            At Yardflo, we understand that shopping for your home can be
            overwhelming. That's why our team of experts is here to help you
            every step of the way. From choosing the right pieces to creating a
            cohesive look, we're here to help you make your house a home.
          </p>
          <p className="text-lg mb-4 text-center">
            Shop with us today and discover why Yardflo is your go-to
            destination for all your home and outdoor living needs.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
