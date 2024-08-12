import "./Contacts.css";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contacts = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <div className="contact-grid">
        <div className="contact-links">
          <p>
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
          <input id="first-name" type="text" placeholder="First Name" />
          <input id="second-name" type="text" placeholder="Last Name" />
          <input id="email" type="email" placeholder="Email" />
          <input id="telephone" type="tel" placeholder="Phone" />
          <select id="service">
            <option value="empty"></option>
            <option value="digitalization">Digitalization</option>
            <option value="enhancing">Enhancing</option>
            <option value="restoration">Restoration / Alteration</option>
          </select>
          <textarea id="message" placeholder="Type your message here..."></textarea>

          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
