type Props = {};
const Fade = require("react-reveal/Fade");

const Footer = (props: Props) => {
  return (
    <Fade top distance="20px">
      <footer
        className=" text-base-content font-open font-medium bg-base-100 relative p-10 pt-40 sm:p-20 sm:pt-32 overflow-x-hidden"
        style={{ clipPath: `ellipse(75% 100% at 59.75% 100%)` }}
      >
        <div className="footer p-10  mx-auto container">
          <div>
            <span className="footer-title">Services</span>
            <a href="/" className="link link-hover">
              Branding
            </a>
            <a href="/" className="link link-hover">
              Design
            </a>
            <a href="/" className="link link-hover">
              Marketing
            </a>
            <a href="/" className="link link-hover">
              Advertisement
            </a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a href="/" className="link link-hover">
              About us
            </a>
            <a href="/" className="link link-hover">
              Contact
            </a>
            <a href="/" className="link link-hover">
              Jobs
            </a>
            <a href="/" className="link link-hover">
              Press kit
            </a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a href="/" className="link link-hover">
              Terms of use
            </a>
            <a href="/" className="link link-hover">
              Privacy policy
            </a>
            <a href="/" className="link link-hover">
              Cookie policy
            </a>
          </div>
          <div>
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-success absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
