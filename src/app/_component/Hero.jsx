"use client"
import Image from "next/image"
import { useState } from "react"

// importing images from the public folder

const images = [
    { src: '/image-product-1.jpg', alt: 'Image 1' },
  { src: '/image-product-2.jpg', alt: 'Image 2' },
  { src: '/image-product-3.jpg', alt: 'Image 3' },
  { src: '/image-product-4.jpg', alt: 'Image 4' },
]

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const handleNext = () => {
        setFade(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          setFade(false);
        }, 300); // Match the duration with the transition duration
      };
    
      const handlePrev = () => {
        setFade(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
          setFade(false);
        }, 300); // Match the duration with the transition duration
      };


  return (
    // the main div holding everybody together
    <div className="flex flex-col md:flex-row">
        {/* for the mobile view */}
        <div className="flex md:hidden w-full m-auto relative">
    <div className="w-full h-full bg-center bg-cover ">
        <div className={`image-wrapper ${fade ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
          <Image
           src={images[currentIndex].src} 
          alt={images[currentIndex].alt}  
          width={500} 
          height={200} />
        </div>

        {/* for the arrows */}
        {/* left arrow */}
        <div onClick={handlePrev} className="absolute top-[50%] -translate-x-0 translate-y-[100%] left-5 rounded-full font-bold text-2xl p-3 bg-white cursor-pointer">
        <Image src="/icon-previous.svg" width={12} height={12} />
        </div>
        {/* right arrow */}
        <div onClick={handleNext} className="absolute top-[50%] -translate-x-0 translate-y-[100%] right-5 rounded-full font-bold text-2xl p-3 bg-white cursor-pointer">
        <Image src="/icon-next.svg" width={12} height={12} />
        </div>
    </div>
    </div> 
    {/* for the desktop view */}
    <div className="hidden md:flex w-[50%]">
        <h1>Lets go</h1>
    </div>
    {/* for the second part of the write up */}
    <div className="flex flex-col gap-3 w-full md:w-[50%] px-3 py-4">
        <p className="text-sm font-semibold text-dark-grayish-blue tracking-widest">SNEAKER COMPANY</p>
        <p className=" text-black font-extrabold tracking-wider text-3xl">Fall Limited Edition Sneakers</p>
        <p className="text-dark-grayish-blue text-justify tracking-wide">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand anything the weather can offer.</p>
    </div>
    </div>
    
  )
}

export default Hero