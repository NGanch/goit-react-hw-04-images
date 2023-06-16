import React from 'react';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Section, GalleryList } from '../ImageGallery/ImageGallery.styled.jsx';

export function ImageGallery({ images, onClick }) {
  return (
    <Section>
      <GalleryList>
        {images.map(image => {
          return (
            <ImageGalleryItem
              onImgClick={onClick}
              key={image.id}
              image={image}
            />

          );
        })}
      </GalleryList>
    </Section>
  );
}