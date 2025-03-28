// import React from 'react'
import "./Home.css";
import { LearnMoreButton } from "../../components/LearnMoreButton";
import { ManageCards } from "../../components/Manage/ManageCards";
import { Hero } from "../../components/Hero";
import { MarketingCards } from "../../components/MarketingCards";
import OurClients from "../../components/Clients/OurClients";
import Manage from "../../components/Manage/Manage";

export const Home = () => {
  return (
    <>
      <Hero />
      <OurClients />
      <Manage />

      {/* Learn More */}
      <section className="learn-more" id="learnMore">
        <div className="container">
          <div className="learn-more-content">
            <img src="/images/home/rafiki.png" alt="Illustration" />
            <div className="right-wrapper">
              <div className="text">
                <h2>
                  The unseen of spending three
                  <br />
                  years at Pixelgrade
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet justo ipsum. Sed
                  <br />
                  accumsan quam vitae est varius fringilla. Pellentesque
                  placerat vestibulum lorem sed
                  <br />
                  porta. Nullam mattis tristique iaculis. Nullam pulvinar sit
                  amet risus pretium auctor. Etiam
                  <br />
                  quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
                  elementum pulvinar odio.
                </p>
              </div>
              <LearnMoreButton />
            </div>
          </div>
        </div>
      </section>

      {/* Reinvent */}
      <section className="reinvent" id="reinvent">
        <div className="container">
          <div className="reinvent-content">
            <div className="text">
              <h2>
                Helping a local
                <br />
                <span>business reinvent itself</span>
              </h2>
              <p>We reached here with our hard work and dedication</p>
            </div>
            <div className="right-wrapper">
              <div className="content-wrapper">
                <div className="upper-wrapper">
                  <div className="card">
                    <img src="/images/home/Icon-10.png" alt="Users" />
                    <div className="text">
                      <h3>2,245,341</h3>
                      <p>Members</p>
                    </div>
                  </div>
                  <div className="card">
                    <img src="/images/home/Icon-11.png" alt="Hands" />
                    <div className="text">
                      <h3>46,328</h3>
                      <p>Clubs</p>
                    </div>
                  </div>
                </div>

                <div className="lower-wrapper">
                  <div className="card">
                    <img src="/images/home/Icon-12.png" alt="Hand" />
                    <div className="text">
                      <h3>828,867</h3>
                      <p>Event Bookings</p>
                    </div>
                  </div>
                  <div className="card">
                    <img src="/images/home/Icon-13.png" alt="Card" />
                    <div className="text">
                      <h3>1,926,436</h3>
                      <p>Payments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local business */}
      <section className="local-business" id="localBusiness">
        <div className="container">
          <div className="local-business-content">
            <img src="/images/home/pana.png" alt="Illustration" />
            <div className="right-wrapper">
              <div className="text">
                <h2>
                  How to design your footer like
                  <br />
                  we did
                </h2>
                <p>
                  Donec a eros justo. Fusce egestas tristique ultrices. Nam
                  tempor, augue nec tincidunt
                  <br />
                  molestie, massa nunc varius arcu, at scelerisque elit erat a
                  magna. Donec quis erat at
                  <br />
                  libero ultrices mollis. In hac habitasse platea dictumst.
                  Vivamus vehicula leo dui, at porta
                  <br />
                  nisi facilisis finibus. In euismod augue vitae nisi ultricies,
                  non aliquet urna tincidunt. Integer
                  <br />
                  in nisi eget nulla commodo faucibus efficitur quis massa.
                  Praesent felis est, finibus et nisi
                  <br />
                  ac, hendrerit venenatis libero. Donec consectetur faucibus
                  ipsum id gravida.
                </p>
              </div>
              <LearnMoreButton />
            </div>
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="customers" id="customers">
        <div className="container">
          <div className="customers-content-wrapper">
            <div className="customers-content">
              <div className="text">
                <p>
                  Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                  lobortis sem dui, vel rutrum risus
                  <br />
                  tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero
                  ornare, tristique quam in, gravida
                  <br />
                  enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                  laoreet elit at ligula molestie, nec molestie
                  <br />
                  mi blandit. Suspendisse cursus tellus sed augue ultrices, quis
                  tristique nulla sodales. Suspendisse
                  <br />
                  eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
                  Quisque malesuada enim sapien,
                  <br />
                  vitae placerat ante feugiat eget. Quisque vulputate odio
                  neque, eget efficitur libero condimentum
                  <br />
                  id. Curabitur id nibh id sem dignissim finibus ac sit amet
                  magna.
                </p>
                <h4>Tim Smith</h4>
                <p>
                  <span>British Dragon Boat Racing Association</span>
                </p>
              </div>
              <div className="logos-and-link">
                <img src="/images/home/Logo-7.png" alt="Company Logo" />
                <img src="/images/home/Logo-1.png" alt="Company Logo" />
                <img src="/images/home/Logo-2.png" alt="Company Logo" />
                <img src="/images/home/Logo-3.png" alt="Company Logo" />
                <img src="/images/home/Logo-4.png" alt="Company Logo" />
                <img src="/images/home/Logo-5.png" alt="Company Logo" />
                <p>
                  <a href="">Meet all customers</a>
                  <img src="/images/home/Right.png" alt="Right Arrow" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing */}
      <section className="marketing" id="marketing">
        <div className="container">
          <div className="marketing-content">
            <div className="text">
              <h2>Caring is the new marketing</h2>
              <p>
                The Nexcent blog is the best place to read about the latest
                membership insights,
                <br />
                trends and more. See who&#39;s joining the community, read about
                how our community
                <br />
                are increasing their membership income and lots more.
              </p>
            </div>
            <MarketingCards />
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="demo" id="demo">
        <div className="container">
          <div className="demo-content">
            <h2>
              Pellentesque suscipit
              <br />
              fringilla libero eu.
            </h2>
            <button>
              Get a demo{" "}
              <img src="/images/home/Right-white.png" alt="Right Arrow" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
