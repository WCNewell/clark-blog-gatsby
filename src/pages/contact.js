import React from 'react';
import Seo from '../components/seo';

const ContactPage = () => (
  <>
    <Seo title="Contact" />
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label>
          <h4>Email</h4>
          <input type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          <h4>Name</h4>
          <input type="text" name="name" />
        </label>
      </div>
      <div>
        <label>
          <h4>Message</h4>
          <textarea type="text" name="message" cols="30" rows="10"/>
        </label>
        <div> 
        <button>
          <h4>Send</h4>
        </button>
        </div>
      </div>
    </form>
  </>
);

export default ContactPage;










