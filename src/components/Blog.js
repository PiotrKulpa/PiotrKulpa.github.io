import { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import LoaderContext from './LoaderContext';
import Link from 'next/link';

const Blog = () => {

  const [blogData, setBlogData] = useState([]);
  const { setLoader } = useContext(LoaderContext);

  const getBlog = useCallback(async() => {
    try {
        setLoader({blog: true});
        const response = await axios.get('/api/blog');
        setBlogData(response.data);
        setLoader({blog: false});
    } catch (error) {
      console.error(error);
      setLoader({blog: false});
      setAboutMeData({content: '<p>Network error. Try again later.</p>'});
    }
  }, []);

  useEffect(() => {
    getBlog();
  }, [getBlog]);

  return (
    <div className="pt-page blog">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Stay update</h3>
              <h4>with my blog</h4>
              <div className="clearfix" />
              {/* POST 1 */}
              {blogData && blogData.map(({
                id = '',
                title = '',
                publishDate = '',
                published = false,
                shortContent = '',
                featuredImages = [],
              }) => {
                console.log(publishDate);
                return published && <div className="col-md-4 post">
                  <div className="post-left">
                    <div className="post-date">
                      <span className="day">{new Date(publishDate).getDate()}</span>
                      <span className="month">{new Date(publishDate).getMonth() + 1}</span>
                    </div>
                    <a className="css3Animate" href="#" title><span aria-hidden="true" data-icon="" /></a>
                    <a className="css3Animate" href="#" title><span aria-hidden="true" data-icon="" /></a>
                  </div>
                  <div className="post-right">
                    <div className="post-image">
                      <img src={featuredImages[0].thumbnails.large.url} className="img-responsive" alt />
                    </div>
                    <h5>{title}</h5>
                    <p className="info-post">{new Date(publishDate).toLocaleDateString()}</p>
                    <p>{shortContent}</p>
                    <Link href={`/blog/${id}`} ><a className="css3Animate read-more" title="Read more">READ MORE</a></Link>
                  </div>
              </div>
              })}
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Blog;
