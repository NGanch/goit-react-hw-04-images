import {
    GalleryItem,
    Image,
  } from '../ImageGalleryItem/ImageGalleryItem.styled';
  
  export function ImageGalleryItem({image, onImgClick }) {
    return (
      <GalleryItem>
        <Image onClick={()=>{
          onImgClick(image.largeImageURL, image.tags);
        }}
        src={image.webformatURL}
         alt={image.tags} />
      </GalleryItem>
    );
  }