import React from 'react';

import './Contact.scss';

const Contact = () => {
  return (
    <>
    <section className="contact-form">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Say hello and leave</h3>
            <h4>your message</h4>
            <div className="clearfix" />
            <form action="#" id="contactform">
              <div className="col-md-6">
                <input type="text" name="name" className="form-control" placeholder="NAME" />
              </div>
              <div className="col-md-6">
                <input type="text" name="email" className="form-control" placeholder="EMAIL" />
              </div>
              <div className="col-md-12">
                <textarea name="message" rows={5} className="form-control" placeholder="MESSAGE" defaultValue={""} />
              </div>
              <div className="col-md-12 send-div">
                <button className="btn btn-default css3Animate" type="submit" value="Send">SEND</button>
              </div>
            </form>
            <div className="clearfix" />
            <div className="success-message" style={{ display: 'none' }} />
            <div className="error-message" style={{ display: 'none' }} />
          </div>
        </div>
      </div>
    </section>
    <div id="map">
          <iframe
            width="100%"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=lublin%20opalowa%203&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0">
          </iframe>
        </div>
    </>
  )
}

export default Contact; 
