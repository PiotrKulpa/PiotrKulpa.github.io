import React, { useState, useCallback, useEffect } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import useAirtableData from '../utils/useAirtableData';
import { useSelector } from 'react-redux';
import FsLightbox from 'fslightbox-react';
import Masonry from 'react-masonry-component';


const Work = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [images2, setImages2] = useState([]);
  const [toggler, setToggler] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const modalIsOpen = false

  const workData = useSelector(({ airtableReducer }) => airtableReducer.Work);


  useEffect(() => {
    const parsedData = workData.map((el) => {
      const { url = '', thumbnails: { large: { height, width } = {} } = {} } = el?.fields?.images[0] || {};
      return {
        src: url,
        width,
        height
      }

    });
    const carouselImages = parsedData.map(({src = ''}) => {
      return {source: src, caption: ''}
    })
    setImages(parsedData);
    setImages2(carouselImages);

  }, [workData]);

  console.log(images2);


  // const result = aboutMeData[0]?.fields?.content || '';
  useAirtableData('Work', 'FETCH_WORK', workData);

  const images3 = [{ source: 'path/to/image-1.jpg' }, { source: 'path/to/image-2.jpg' }]
  return (
    <section className="work">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Check out and enjoy</h3>
            <h4>my great work</h4>
            <div className="clearfix" />
            <div>
            {images.length > 0 && <Carousel views={images} />}
            <Gallery photos={images} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work;
