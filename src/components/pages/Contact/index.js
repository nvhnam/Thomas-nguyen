import React from "react";
import { Button } from "../../ButtonElement";
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  ContactCol1,
  ContactForm,
  FormHeading,
  FormField,
  FormLabel,
  FormInput,
  FormTextInput,
  FormButton,
} from "./ContactElement";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <ContactRow>
            <ContactCol1>
              <FormHeading>Contact Us</FormHeading>
              <ContactForm
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <FormField>
                  <input type="hidden" name="contact" value="contact" />
                  <FormLabel>Name</FormLabel>
                  <FormInput
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    // name="name"
                    required
                  ></FormInput>
                </FormField>
                <FormField>
                  <FormLabel>Email</FormLabel>
                  <FormInput
                    id="name"
                    type="email"
                    placeholder="Enter your email"
                    // name="email"
                    required
                  ></FormInput>
                </FormField>
                <FormField>
                  <FormLabel>Phone Number</FormLabel>
                  <FormInput
                    id="phone"
                    type="number"
                    placeholder="Enter your phone number"
                    required
                    // name="number"
                  ></FormInput>
                </FormField>
                <FormField>
                  <FormLabel>Message</FormLabel>
                  <FormTextInput
                    id="message"
                    type="text"
                    placeholder="..."
                    // name="message"
                    required
                  ></FormTextInput>
                </FormField>
                <FormButton>
                  <a href="/">
                    <Button
                      primary={false}
                      big={false}
                      fontBig={false}
                      type="submit"
                    >
                      Send
                    </Button>
                  </a>
                </FormButton>
              </ContactForm>
            </ContactCol1>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
