import React, { useState, useEffect, useRef } from "react";
import "./contact.scss";
import emailjs from '@emailjs/browser';
import WOW from "wow.js";
import { IconLocation, IconMail, IconPhoneCalling } from "@tabler/icons-react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function ContactUs() {
  const [status, setStatus] = useState({});

  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   phone: "",
  //   email: "",
  //   message: "",
  //   dropdown: "Yes",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmits = (e) => {
  //   e.preventDefault();

  //   // Replace these values with your own
  //   const serviceId = 'service_jgfsuqn';
  //   const templateId = 'template_n2jqcc6';
  //   const userId = 'yG7XtxVoGKsFafIuG';

  //   emailjs
  //     .send(serviceId, templateId, {
  //       from_name: formData.firstName + ' ' + formData.lastName,
  //       from_email: formData.email,
  //       phone: formData.phone,
  //       message: formData.message,
  //     }, userId)
  //     .then(() => {
  //       setStatus({ message: 'Email sent successfully!' });
  //       setFormData({
  //         firstName: '',
  //         lastName: '',
  //         email: '',
  //         phone: '',
  //         message: '',
  //       });
  //     })
  //     .catch((error) => {
  //       setStatus({ message: 'Error sending email.' });
  //       console.error('Error sending email:', error);
  //     });
  // };
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [phone, setPhone] = useState('');

  // const handleSubmits = (e) => {
  //   e.preventDefault();

  //   // Replace these values with your own
  //   const serviceId = 'service_jgfsuqn';
  //   const templateId = 'template_n2jqcc6';
  //   const userId = 'yG7XtxVoGKsFafIuG';

  //   emailjs.send(serviceId, templateId, {
  //     from_name: name,
  //     from_email: email,
  //     phone:phone,
  //     message: message,

  //   }, userId)
  //     .then(() => {
  //       console.log('Email sent successfully!');
  //       // Reset form fields
  //       setName('');
  //       setEmail('');
  //       setPhone('');
  //       setMessage('');
  //     })
  //     .catch((error) => {
  //       console.error('Error sending email:', error);
  //     });
  // };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sly09r6",
        "template_n2jqcc6",
        form.current,
        "yG7XtxVoGKsFafIuG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus({ success: true, message: "Email sent successfully!" });
        },
        (error) => {
          console.log(error.text);
          setStatus({ success: false, message: "Failed to send email." });
        }
      );
  };

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   const form = event.target;
  //   const data = new FormData(form);

  //   axios
  //     .post("http://localhost/contactus/contact.php", data)
  //     .then((response) => {
  //       console.log(response.data); // Handle success response
  //       window.alert("Success: " + response.data); // Display success alert with response data
  //       form.reset(); // Reset form fields
  //     })
  //     .catch((error) => {
  //       console.error(error); // Handle error
  //     });
  // }

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>

    <Navbar/>
      <section className="contact space">
  
          <div className=" lg:p-3px sm:p-10 p-10">
          <div className="  text-4xl text-black mb-4 font-bold wow fadeInUp ">
                    Book an Appoitment
                  </div>
                  <div className="text-lg font-medium m:mb-5 mb-5">We welcome collaborations, inquiries, and opportunities to bring your architectural visions to life. Reach out to our team to embark on an inspiring journey of design and innovation.</div>
            <div className="flex flex-col justify-center items-center md:flex-row ">
              <div
                size={12}
                md={6}
                className="md:w-3/5 tracking-wider wow fadeInUp s"
              >
                {/* <img
                  src={contactImg}
                  alt="Contact Us"
                  className="mt-10 pt-10"
                /> */}
                  
              <div className=" mr-10 justify-self-center md:justify-center">
              
              <div className="flex ">
                <div className=" p-2">
                  <IconMail
                    className=""
                    size={40}
           
                  />
                </div>
                <div className="px-3 flex flex-col wow fadeInUp">
                  <div className="text-black font-semibold text-lg ">
                    Email Address
                  </div>
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox"
                    className="text-black font-medium text-lg"
                  >
                   <div className="text-black">info@koyeus.ind.in</div>
                  </a>
                </div>
              </div>
              <div className="flex  mt-3 wow fadeInUp">
                <div className=" p-2">
                  <IconPhoneCalling
                    className=""
                    size={40}
                  
                  />
                </div>
                <div className="px-3 flex flex-col wow fadeInUp">
                  <div className="text-black font-semibold text-lg ">
                    Phone Number
                  </div>
                  <div className="text-black font-medium text-lg">
                  +91 9920617183/88 
                  </div>
                </div>
              </div>
              <div className="flex  mt-3 wow fadeInUp">
                <div className=" p-2">
                  <IconLocation
                    className=""
                    size={40}
                 
                  />
                </div>
                <div className="px-3 flex flex-col mt-3">
                  <div className="text-black font-semibold text-lg ">
                    Location
                  </div>
                  <div className="text-black font-medium text-lg">
                  306 B, Venus Building Lokhandwala 1sr Crossroad, Swami Samartha Nagar,

                  </div>
                  <div className="text-black font-medium text-lg">
                  Lokhandwala Complex, Andheri West,
                  </div>
                  <div className="text-black0 font-medium text-lg">
                  Mumbai, Maharashtra 400053, India
                  </div>
                </div>
              </div>
            </div>
              </div>
              <div size={12} md={6}>
           
                <div className="lg:mt-5 mt-5 mr-10 justify-self-center md:justify-center">
                 
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-wrap -mx-1 ">
                      <div className="w-full sm:w-1/2 px-1 wow fadeInUp">
                        <input
                          type="text"
                          id="firstName"
                          name="firstname"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="w-full sm:w-1/2 px-1 wow fadeInUp">
                        <input
                          type="text"
                          name="lastname"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-1">
                      <div className="w-full sm:w-1/2 px-1 wow fadeInUp">
                        <input
                          id="email"
                          type="email"
                          placeholder="Email"
                          name="user_email"
                          required
                        />
                      </div>
                      <div className="w-full sm:w-1/2 px-1 wow fadeInUp">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Phone No"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-1 wow fadeInUp">
                      <textarea
                        rows="6"
                        id="message"
                        name="message"
                        placeholder="Message"
                        required
                      ></textarea>
                      <button
                        className="bg-black  text-white font-bold py-2 px-14 rounded-full  wow bounceIn cursor-pointer"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
                {status.message && (
                  <div className="mt-3 text-bold text-lg text-green-500">
                    {status.message}
                  </div>
                )}
              </div>
            </div>
          </div>
     
      </section>
      <Footer/>
    </>
  );
}

export default ContactUs;
