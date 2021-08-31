import React from 'react';

const ContactPage = () => (
  <>
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
            <input type="text" name="message" />
          </label>
        </div>
    </form>
  </>
);

export default ContactPage;










