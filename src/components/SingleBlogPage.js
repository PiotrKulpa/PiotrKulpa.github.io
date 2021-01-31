import { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import LoaderContext from './LoaderContext';
import { useRouter } from 'next/router';

const SingleBlogPage = () => {

  const [post, setPost] = useState({});
  const { setLoader } = useContext(LoaderContext);
  const router = useRouter();
  const { query: { id = '1' } } = router;

  const getPost = useCallback(async () => {
    try {
      setLoader({ post: true });
      const response = await axios.get(`/api/blog/${id}`);
      console.log(response.data)
      setPost(response.data);
      setLoader({ post: false });
    } catch (error) {
      console.error(error);
      setLoader({ post: false });
      setPost({ content: '<p>Network error. Try again later.</p>' });
    }
  }, []);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div className="pt-page blog">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="clearfix" />
              {post.error ? <p>{post.message}</p> :
                <div className="col-md-12 post">
                  <div className="post-left">
                    <div className="post-date">
                      <span className="day">{new Date(post.publishDate).getDate()}</span>
                      <span className="month">{new Date(post.publishDate).getMonth() + 1}</span>
                    </div>
                    <a className="css3Animate" href="#"><span aria-hidden="true" data-icon="" /></a>
                    <a className="css3Animate" href="#"><span aria-hidden="true" data-icon="" /></a>
                  </div>
                  <div className="post-right">
                    <div className="">
                      <img className="custom-post-img" src={post?.featuredImages && post?.featuredImages[0].thumbnails.full.url || ''}/>
                    </div>
                    <h5>{post.title}</h5>
                    <p className="info-post">{new Date(post.publishDate).toLocaleDateString()}</p>
                    <p>{post.content}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default SingleBlogPage;
