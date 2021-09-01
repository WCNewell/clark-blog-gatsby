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
          Email
          <input type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          Name
          <input type="text" name="name" />
        </label>
      </div>
      <div>
        <label>
          Message
          <textarea type="text" name="message" cols="30" rows="10"/>
        </label>
        <div> 
        <button>Send</button>
        </div>
      </div>
    </form>
  </>
);

export default ContactPage;










