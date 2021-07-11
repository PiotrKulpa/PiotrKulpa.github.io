import React from 'react';

import './Blog.scss';

export const Blog = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Stay update</h3>
            <h4>with our blog</h4>
            <div className="clearfix" />
            {/* POST 1 */}
            <div className="col-md-4 post">
              <div className="post-left">
                <div className="post-date">
                  <span className="day">15</span>
                  <span className="month">MAR</span>
                </div>
                <a className="css3Animate" href="#" title><span aria-hidden="true" data-icon="" /></a>
                <a className="css3Animate" href="#" title><span aria-hidden="true" data-icon="" /></a>
              </div>
              <div className="post-right">
                <div className="post-image">
                  <img src="../../../assets/img/blog/1.jpg" className="img-responsive" alt />
                </div>
                <h5>Lorem ipsum dolor sit amet metus mised.</h5>
                <p className="info-post">NOVEMBER 21, 2013 | <a className="css3Animate" href="#" title="Comments">4 COMMENTS</a></p>
                <p>Suspendisse libero odio, vulputate non pellentesque eu, interdum et purus. Integer sodales magna non nibh porta ultricies...</p>
                <a className="css3Animate read-more" href="#" title="Read more">READ MORE</a>
              </div>
            </div>
            {/* POST 2 */}
            <div className="col-md-4 post">
              <div className="post-left">
                <div className="post-date">
                  <span className="day">15</span>
                  <span className="month">MAR</span>
                </div>
                <a className="css3Animate" href="#" title><span aria-hidden="true" data-icon="" /></a>
                <a className="css3Animate" href="#" title><span aria-hidden="true" data-icon="" /></a>
              </div>
              <div className="post-right">
                <div className="post-image">
                  <iframe width={560} height={250} src="https://www.youtube.com/embed/kn-1D5z3-Cs" allowFullScreen />
                </div>
                <h5>Lorem ipsum dolor sit amet metus mised.</h5>
                <p className="info-post">NOVEMBER 21, 2013 | <a className="css3Animate" href="#" title="Comments">4 COMMENTS</a></p>
                <p>Suspendisse libero odio, vulputate non pellentesque eu, interdum et purus. Integer sodales magna non nibh porta ultricies...</p>
                <a className="css3Animate read-more" href="#" title="Read more">READ MORE</a>
              </div>
            </div>
            {/* POST 3 */}
            <div className="col-md-4 post">
              <div className="post-left">
                <div className="post-date">
                  <span className="day">15</span>
                  <span className="month">MAR</span>
                </div>
                <a className="css3Animate" href="#" title><span aria-hidden="true" data-icon="" /></a>
                <a className="css3Animate" href="#" title><span aria-hidden="true" data-icon="" /></a>
              </div>
              <div className="post-right">
                <div className="post-image">
                  <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                      <li data-target="#carousel-example-generic" data-slide-to={0} className />
                      <li data-target="#carousel-example-generic" data-slide-to={1} className="active" />
                      <li data-target="#carousel-example-generic" data-slide-to={2} className />
                    </ol>
                    {/* Wrapper for slides */}
                    <div className="carousel-inner" role="listbox">
                      <div className="item">
                        <img src="/assets/img/blog/2.jpg" className="img-responsive" alt="Image carousel" />
                      </div>
                      <div className="item active">
                        <img src="/assets/img/blog/3.jpg" className="img-responsive" alt="Image carousel" />
                      </div>
                      <div className="item">
                        <img src="/assets/img/blog/4.jpg" className="img-responsive" alt="Image carousel" />
                      </div>
                    </div>
                  </div>
                </div>
                <h5>Lorem ipsum dolor sit amet metus mised.</h5>
                <p className="info-post">NOVEMBER 21, 2013 | <a className="css3Animate" href="#" title="Comments">4 COMMENTS</a></p>
                <p>Suspendisse libero odio, vulputate non pellentesque eu, interdum et purus. Integer sodales magna non nibh porta ultricies...</p>
                <a className="css3Animate read-more" href="#" title="Read more">READ MORE</a>
              </div>
            </div>
          </div>
          <div className="row">
            {/* POST 4 */}
            <div className="col-md-4 post">
              <div className="post-left">
                <div className="post-date">
                  <span className="day">15</span>
                  <span className="month">MAR</span>
                </div>
                <a className="css3Animate" href="#" title><span aria-hidden="true" data-icon="" /></a>
                <a className="css3Animate" href="#" title><span aria-hidden="true" data-icon="" /></a>
              </div>
              <div className="post-right">
                <div className="post-quote">
                  <h3>In the design process, my gut instinct is my best critic. I just wished I would always listen to it!</h3>
                  <p>- John Smith</p>
                </div>
                <h5>Lorem ipsum dolor sit amet metus mised.</h5>
                <p className="info-post">NOVEMBER 21, 2013 | <a className="css3Animate" href="#" title="Comments">4 COMMENTS</a></p>
                <p>Suspendisse libero odio, vulputate non pellentesque eu, interdum et purus. Integer sodales magna non nibh porta ultricies...</p>
                <a className="css3Animate read-more" href="#" title="Read more">READ MORE</a>
              </div>
            </div>
            {/* POST 5 */}
            <div className="col-md-4 post">
              <div className="post-left">
                <div className="post-date">
                  <span className="day">15</span>
                  <span className="month">MAR</span>
                </div>
                <a className="css3Animate" href="#" title><span aria-hidden="true" data-icon="" /></a>
                <a className="css3Animate" href="#" title><span aria-hidden="true" data-icon="" /></a>
              </div>
              <div className="post-right">
                <div className="post-image">
                  <iframe src="//player.vimeo.com/video/52262947" width={560} height={235} allowFullScreen />
                </div>
                <h5>Lorem ipsum dolor sit amet metus mised.</h5>
                <p className="info-post">NOVEMBER 21, 2013 | <a className="css3Animate" href="#" title="Comments">4 COMMENTS</a></p>
                <p>Suspendisse libero odio, vulputate non pellentesque eu, interdum et purus. Integer sodales magna non nibh porta ultricies...</p>
                <a className="css3Animate read-more" href="#" title="Read more">READ MORE</a>
              </div>
            </div>
            {/* POST 6 */}
            <div className="col-md-4 post">
              <div className="post-left">
                <div className="post-date">
                  <span className="day">15</span>
                  <span className="month">MAR</span>
                </div>
                <a className="css3Animate" href="#" title><span aria-hidden="true" data-icon="" /></a>
                <a className="css3Animate" href="#" title><span aria-hidden="true" data-icon="" /></a>
              </div>
              <div className="post-right">
                <div className="post-image">
                  <img src="/assets/img/blog/5.jpg" className="img-responsive" alt />
                </div>
                <h5>Lorem ipsum dolor sit amet metus mised.</h5>
                <p className="info-post">NOVEMBER 21, 2013 | <a className="css3Animate" href="#" title="Comments">4 COMMENTS</a></p>
                <p>Suspendisse libero odio, vulputate non pellentesque eu, interdum et purus. Integer sodales magna non nibh porta ultricies...</p>
                <a className="css3Animate read-more" href="#" title="Read more">READ MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog;