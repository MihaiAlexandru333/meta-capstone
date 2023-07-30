import ratings from "../assets/rating.png";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

export default function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>

        <div className="review-container">
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={p1} alt="Customer Pic" />
            <h2>Suzzy W.</h2>
            <p>"Love the style of the place"</p>
          </div>
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={p2} alt="Customer Pic" />
            <h2>James M.</h2>
            <p>"They have great meat options"</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={p3} alt="Customer Pic" />
            <h2>Jenny F.</h2>
            <p>"Amazing Sea Bass"</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={p4} alt="Customer Pic" />
            <h2>Helena H.</h2>
            <p>"Awesome place, peaceful atmosphere with delicious food"</p>
          </div>
        </div>
      </div>
    </>
  );
}

