import React, { useState, useEffect } from 'react';
import * as ImageService from '../service/image-servise';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from '../components/ImageGallery/ImageGallery';
import { ModalGallery } from '../components/Modal/Modal';
import { Spinner } from '../components/Loader/Loader';
import { Button } from './Button/Button.styled';

//=====================================================
export function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [per_page, setPer_page] = useState(12);
  const [isShowButton, setIsShowButton] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [tagsImg, setTagsImg] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //===================================
  useEffect(() => {
    const abortCtrl = new AbortController();
    
    async function getImage() {
      if(query === ''){
        return;
      } 
      if (!query) {
        return;
      }
      try {
        setIsLoading(true);
        const response = await ImageService.getImages(
          query,
          page,
          abortCtrl
        );

        const { hits, totalHits } = response;
        if (!hits.length) {
          setIsEmpty(true);
          return;
        }

        setImages(prevState => [...prevState, ...hits]);
        setIsShowButton(page < Math.ceil(totalHits / per_page));
      } catch (error) {
        // setError(error.message);
        console.log(error.message)
       
      } finally {
        setIsLoading(false);
      }
    }
    getImage();
    return () => {
      abortCtrl.abort();
    };
  }, [query, page, per_page]);

  //------------------------------
  const handleFormSubmit = value => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setPer_page(12);
    setIsShowButton(false);
    setIsEmpty(false);
    setIsLoading(false);
    // setError(null);
  };
  //======================= LOAD MORE =======================
  const handleOnClick = () => {
    setPage(prevState => prevState + 1);
    setPer_page(prevState => prevState + 12);
  };
  //======================= LOAD MORE =======================
  // ======================= MODAL =======================

  const getImgData = (largeImageURL, tagsImg) => {
    setLargeImageURL(largeImageURL);
    setTagsImg(tagsImg);
    openModal();
  };

  // ======================= MODAL =======================

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);
  // ======================= MODAL =======================
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <>
        <ImageGallery images={images} onClick={getImgData} />

        {isModalOpen && (
          <ModalGallery
            isModalOpen={isModalOpen}
            largeImageURL={largeImageURL}
            tagsImg={tagsImg}
            onClose={closeModal}
          />
        )}

        {isShowButton && <Button onClick={handleOnClick}>Load more</Button>}
        {isEmpty && <p>Sorry. There are no images ... 😭</p>}
        {isLoading && <Spinner />}
        {isEmpty &&
          toast.error('Sorry. There are no images ... 😭', {
            position: 'top-center',
            theme: 'light',
          })}
        {/* {isLoading &&
            toast.success('Loading ...', {
              position: 'top-center',
              theme: 'light',
            })} */}
        <ToastContainer autoClose={3000} />
      </>
    </>
  );
}
