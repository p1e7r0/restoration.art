import "./contacts.css";

const Contacts = () => {
  return (
    <section className="black">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form action="#" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={4} required></textarea>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
