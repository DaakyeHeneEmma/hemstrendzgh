"use client"

import React, { useState } from 'react'


function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (src:any) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <style>
        {`
          .modal {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }
          .modal.show {
            opacity: 1;
          }
        `}
      </style>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pr-2 pl-2">
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/image-4-ht.jpg" alt="" onClick={() => handleImageClick("https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/image-4-ht.jpg")} />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/head1.jpg" alt="" onClick={() => handleImageClick("https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/head1.jpg")} />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/image-6-md.jpg" alt="" onClick={() => handleImageClick("https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/image-6-md.jpg")} />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/image-5-md.jpg" alt="" onClick={() => handleImageClick("https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/image-5-md.jpg")} />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/image-5-ht.jpg" alt="" onClick={() => handleImageClick("https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/image-6-ht.jpg")}/>
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/head7.jpg" alt="" onClick={() => handleImageClick("https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/head7.jpg")}/>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/image-6-ht.jpg" alt="" onClick={() => handleImageClick("https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/image-6-ht.jpg")}/>
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/head6.jpg" alt="" onClick={() => handleImageClick("https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/head6.jpg")}/>
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/image-4-md.jpg" alt="" onClick={() => handleImageClick("https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/image-4-md.jpg")}/>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/image-3-md.jpg" alt="" onClick={() => handleImageClick("https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/image-3-md.jpg")}/>
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/image-7-ht.jpg" alt="" onClick={() => handleImageClick("https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/image-7-ht.jpg")}/>
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/head9.jpg" alt="" onClick={() => handleImageClick("https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/hemstrendzgh/head9.jpg")}/>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 modal ${isOpen ? 'show' : ''}`} onClick={closeModal}>
          <img src={selectedImage} alt="Preview" className="max-w-full max-h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105" />
        </div>
      )}
    </>
  )
}

export default Gallery
