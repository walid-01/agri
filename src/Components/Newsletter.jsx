import "../Style/Newsletter.css";

const Newsletter = () => {
  return (
    <div id="newsletter">
      <h1>Join Our Newsletter</h1>
      <p>Get the latest updates and offers.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Email" />
        <input type="button" value="Subscribe" />
      </form>
    </div>
  );
};

export default Newsletter;
