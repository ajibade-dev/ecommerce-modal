"use client"
import Image from "next/image"
import { useState } from "react"
import Cart from "./Cart"

// importing images from the public folder

const images = [
    { src: '/image-product-1.jpg', alt: 'Image 1' },
  { src: '/image-product-2.jpg', alt: 'Image 2' },
  { src: '/image-product-3.jpg', alt: 'Image 3' },
  { src: '/image-product-4.jpg', alt: 'Image 4' },
]

const Hero = ({addToCart}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const [black, setBlack] = useState(false)
    const [quantity, setQuantity] = useState(0);
    

    // for the button to show next image
    const handleNext = () => {
        setFade(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          setFade(false);
        }, 300); // Match the duration with the transition duration
      };
    
      // for the button to show previous image
      const handlePrev = () => {
        setFade(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
          setFade(false);
        }, 300); // Match the duration with the transition duration
      };
      
      // this is to navigate through the pictures using the small pictures below
     const goToSlide = (imageIndex) => {
      setCurrentIndex(imageIndex)
     }

    //  for the opacity screen that comes up when you click the big image
     const handleBlack = () => {
      setBlack(!black)
    }

    // this is for the increment button and to add to cart
    const incrementQuantity = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };
  
    const decrementQuantity = () => {
      setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
  
    // for the add to cart functionality
    const handleAddToCart = () => {
      const item = {
          id: 1, // unique ID for the item
          name: 'Fall Limited Edition Sneakers',
          price: 125.00,
          quantity: quantity
      };
      addToCart(quantity, item);
      setQuantity(0);
  };

  return (
    // the main div holding everybody together
    <div className="flex flex-col md:flex-row md:mt-10">
        {/* for the mobile view */}
        <div className="flex md:hidden w-full m-auto relative">
    <div className="w-full h-full bg-center bg-cover ">
        <div className={`image-wrapper ${fade ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200 w-full`}>
          <Image
           src={images[currentIndex].src} 
          alt={images[currentIndex].alt}  
          width={500} 
          height={200} 
          className="w-full"
          />
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
    <div className="hidden md:flex w-[50%] md:px-10 justify-center">

        {/* for the pictures */}
        <div className="flex flex-col items-center justify-center gap-4">
            {/* for the big picture above */}
            <div>
            <div className={`image-wrapper ${fade ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
          <Image
           src={images[currentIndex].src} 
          alt={images[currentIndex].alt}  
          width={400} 
          height={300}
          className="rounded-lg"
          onClick={handleBlack}
          />
          
        </div>
            </div>
          {/* for the small pictures below */}
          <div className="flex flex-row w-full justify-between">
            {images.map((image, imageIndex) =>(
              <Image key={imageIndex} onClick={() => goToSlide(imageIndex)} src={image.src} alt={image.alt} width={70} height={70} className="border-2 border-orange rounded-lg  cursor-pointer hover:opacity-75"/>
            ))}
          </div>
        </div>
    </div>
    {/* for the second part of the write up */}
    <div className="flex flex-col gap-5 w-full md:w-[50%] justify-center px-4 md:px-0 md:py-0 py-4">
      <div className="md:w-3/4 w-full">
      <p className="text-sm font-semibold text-dark-grayish-blue tracking-widest">SNEAKER COMPANY</p>
        <p className=" text-black font-bold tracking-wider text-3xl md:w-3/4 md:mt-5 mt-3">Fall Limited Edition Sneakers</p>
        <p className="text-dark-grayish-blue tracking-wide mt-7">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand anything the weather can offer.</p>

        {/* for the number that shows */}
       
       <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-normal mt-6 gap-2">
          {/* for the first number */}
          <div className="flex flex-row gap-3 items-center">
            <h2 className="text-2xl text-black font-bold">$125.00</h2>
            <div className="px-2 py-1 bg-black rounded-md text-white text-xs text-center my-2">
              <p>50%</p>
            </div>
          </div>
          {/* for the second number */}
          <p className="text-sm text-dark-grayish-blue font-semibold">250%</p>
       </div>
       

       {/* for the counter and button underneath */}
       <div className="flex flex-col md:flex-row gap-4 mt-6">
        {/* for the counter */}
        <div className="flex flex-row w-full md:w-1/4 items-center justify-between px-1 py-2 rounded-md bg-light-grayish-blue">
          <Image src="/icon-minus.svg" width={10} height={10} onClick={decrementQuantity} />
            <p className="font-extrabold">{quantity}</p>
            <Image src="/icon-plus.svg" width={10} height={10} onClick={incrementQuantity} /> 
        </div>
              {/* the add to cart button */}
            <div className="flex flex-row w-full md:w-2/4 items-center justify-center gap-4 py-2 bg-orange rounded-md cursor-pointer" onClick={handleAddToCart}>
                <Image src="/icon-cart.svg" width={15} height={15} className="text-black"/>
                <p className="font-bold text-md text-black">Add to cart</p>
                
            </div>
       </div>
      </div>
      
     
    </div>
     {/* Overlay */}
   <div className={`${black ? 'fixed inset-0 bg-black opacity-100' : 'hidden'}`}>

   
    <div className="flex items-center justify-center min-h-screen z-10">

       {/* for the close button on the menu */}
  <div onClick={handleBlack}  className="flex z-10 bg-white right-[30%] top-10 fixed">
  {black ? <Image src="/icon-close.svg" width={10} height={10} className='m-2 bg-white' />: 'fixed  ease-out duration-500'}
  </div>
              {/* for the pictures */}
        <div className="flex flex-col items-center justify-center gap-4 mx-auto">
            {/* for the big picture above */}
            <div>
            <div className={`image-wrapper ${fade ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200 cursor-pointer`}>
          <Image
           src={images[currentIndex].src} 
          alt={images[currentIndex].alt}  
          width={400} 
          height={300}
          className="rounded-lg "
          onClick={handleBlack}
          />

           {/* for the arrows */}
        {/* left arrow */}
        <div onClick={handlePrev} className="absolute top-[40%] -translate-x-0 translate-y-[100%] left-[400px] rounded-full font-bold text-2xl p-3 bg-white cursor-pointer">
        <Image src="/icon-previous.svg" width={12} height={12} />
        </div>
        {/* right arrow */}
        <div onClick={handleNext} className="absolute top-[40%] -translate-x-0 translate-y-[100%] right-[400px] rounded-full font-bold text-2xl p-3 bg-white cursor-pointer">
        <Image src="/icon-next.svg" width={12} height={12} />
        </div>
          
        </div>
            </div>
          {/* for the small pictures below */}
          <div className="flex flex-row w-full justify-between">
            {images.map((image, imageIndex) =>(
              <Image key={imageIndex} onClick={() => goToSlide(imageIndex)} src={image.src} alt={image.alt} width={70} height={70} className="border-2 border-orange rounded-lg  cursor-pointer hover:opacity-75"/>
            ))}
          </div>
        </div>
    </div>
   </div>
    </div>
    
  )
}

export default Hero