import 'react-multi-carousel/lib/styles.css';
import rating from "assets/img/rating.svg";
import Carousel from 'react-multi-carousel';
import colorSharp from "assets/img/color-sharp.png"
import "./styles/skills.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here is a summary of the technologies I have the most experience and expertise.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={rating} alt="first" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={rating} alt="second" />
                                <h5>Ruby on Rails</h5>
                            </div>
                            <div className="item">
                                <img src={rating} alt="third" />
                                <h5>GraphQL</h5>
                            </div>
                            <div className="item">
                                <img src={rating} alt="forth" />
                                <h5>AWS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background-skills" />
    </section>
  )
}