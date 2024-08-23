import "./Contacts.css";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contacts = () => {
  return (
    <section className="pb-8 py-16 px-4 md:px-8 bg-black text-gray-50 flex flex-col items-center gap-16" id="contact">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center dark:text-white sm:text-4xl">Contact</h2>
        <div className="contact-grid mt-10">
          <div className="contact-links">
            <p className="text-lg text-center">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="contact-link">
              <div>If you want email me</div>
              <a href="mailto:digital@restoration.art">
                <i className="fas fa-icon">
                  <EmailIcon />
                </i>
              </a>
            </div>
            <div className="contact-link">
              <div>If you want hear my voice</div>
              <a href="tel:+41794434965">
                <i className="fas fa-icon">
                  <LocalPhoneIcon />
                </i>
              </a>
            </div>
            <div className="contact-link">
              <div>If you want to be influenced</div>
              <a href="https://www.instagram.com/">
                <i className="fab fa-icon">
                  <InstagramIcon />
                </i>
              </a>
            </div>
          </div>
          <form action="#" className="contact-form">
            <input id="first-name" type="text" placeholder="First Name" className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white" />
            <input id="second-name" type="text" placeholder="Last Name" className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white" />
            <input id="email" type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white" />
            <input id="telephone" type="tel" placeholder="Phone" className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white" />

            <select id="service" className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white">
              <option>Select category</option>
              <option value="digitalization">Digitalization</option>
              <option value="enhancing">Enhancing</option>
              <option value="restoration">Restoration / Alteration</option>
            </select>
            <textarea id="message" placeholder="Type your message here..." className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white"></textarea>
            <button
              id="submit"
              type="submit"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
