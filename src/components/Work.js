import React, { useState, useCallback, useEffect } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import useAirtableData from '../utils/useAirtableData';
import { useSelector } from 'react-redux';

const Work = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [images, setImages] = useState([]);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const workData = useSelector(({ airtableReducer }) => airtableReducer.Work);


  useEffect(() => {
    const parsedData = workData.map((el) => {
      const { url = '', thumbnails: { large: { height, width } = {} } = {} } = el?.fields?.images[0] || {};
      return {
        src: url,
        width,
        height,
        title: 'Lorem ipsum'
      }
    });
    setImages(parsedData);
  }, [workData]);

  useAirtableData('Work', 'FETCH_WORK', workData);

  return (
    <section className="work">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Check out and enjoy</h3>
            <h4>my great work</h4>
            <div className="clearfix" />
            <div>
            <Gallery photos={images} onClick={openLightbox} />
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={images.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work;
