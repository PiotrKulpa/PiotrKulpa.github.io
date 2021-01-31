import { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import LoaderContext from './LoaderContext';

export const Work = () => {

  const [workData, setWorkData] = useState([]);
  const { setLoader } = useContext(LoaderContext);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const getWork = useCallback(async () => {
    try {
      setLoader({ work: true });
      const response = await axios.get('/api/work');
      setWorkData(response.data);
      setLoader({ work: false });
    } catch (error) {
      console.error(error);
      setLoader({ work: false });
      setWorkData({ content: '<p>Network error. Try again later.</p>' });
    }
  }, []);

  useEffect(() => {
    getWork();
  }, [getWork]);

  return (
    <section className="work">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Check out and enjoy</h3>
            <h4>my great work</h4>
            <div className="clearfix" />
            {/* FILTER */}
            {/* <div id="filters">
              <button className="css3Animate checked" data-filter="*">ALL</button>
              <button className="css3Animate" data-filter=".design">DESIGN</button>
              <button className="css3Animate" data-filter=".video">VIDEO</button>
              <button className="css3Animate" data-filter=".photo">PHOTOGRAPHY</button>
            </div> */}
            {/* GALLERY */}
            <div>
              <Gallery photos={workData} onClick={openLightbox} />
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={workData.map(x => ({
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