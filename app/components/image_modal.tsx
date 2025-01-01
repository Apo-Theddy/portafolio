import React from 'react';
import { Modal } from 'flowbite-react';
import Image from 'next/image';

interface IImageModal {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt?: string;
}

const ImageModal = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt = "Image preview"
}: IImageModal) => {
  return (
    <Modal
      dismissible
      show={isOpen}
      onClose={onClose}
      size="7xl"
      className="!bg-transparent"
      theme={{
        content: {
          base: "relative h-full w-full p-4 md:h-auto",
          inner: "relative rounded-lg bg-transparent shadow flex flex-col max-h-[90vh]"
        }
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 z-50 rounded-lg p-1.5 text-gray-200 bg-gray-800/50 hover:bg-gray-800/80 transition-all"
          aria-label="Close modal"
        >
          {/* <X size={24} /> */}
        </button>

        <div className="relative w-full max-w-4xl mx-auto">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-contain max-h-[80vh]"
            width={800}
            height={800}
            priority
          />
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
