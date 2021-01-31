import { useState } from 'react';
import { useForm } from "react-hook-form";

const Contact = () => {

  const [successMsg, setSuccessMsg] = useState('');
  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'onChange',
  });
  const { isValid } = formState;

  return (
    <>
      <div className="pt-page contact">
        <section className="contact-form">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3>Say hello and leave</h3>
                <h4>your message</h4>
                <div className="clearfix" />
                <form  
                  id="contactform" 
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  action="contact-success"
                >
                  <div className="col-md-6">
                    <input type="hidden" name="form-name" value="contact" />
                    <input 
                      type="text" 
                      name="firstname" 
                      className="form-control" 
                      placeholder="NAME"
                      ref={register}
                      />
                  </div>
                  <div className="col-md-6">
                    <input 
                      type="email" 
                      name="email" 
                      className="form-control" 
                      placeholder="EMAIL"
                      ref={
                        register({
                          required: 'E-mail is required',
                          pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: 'Invalid e-mail'
                          }
                        })
                      }
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea 
                      name="message" 
                      rows={5} 
                      className="form-control" 
                      placeholder="MESSAGE" 
                      defaultValue={""}
                      ref={
                        register({
                          required: 'Text is required' // JS only: <p>error message</p> TS only support string
                        })
                      }
                    />
                  </div>
                  <div className="col-md-12 send-div">
                    <button
                      // style={{display: successMsg && 'none'}}
                      className="btn btn-default css3Animate contact-form-btn" 
                      disabled={!isValid}
                      type="submit" 
                      value="Send">SEND
                    </button>
                  </div>
                </form>
                <div className="clearfix" />
                <div className="success-message">{successMsg}</div>
                <div className="error-message">
                  <p>{errors.email?.message}</p>
                  <p>{errors.message?.message}</p>
                  </div>
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
      </div>

    </>
  )
}

export default Contact; 


