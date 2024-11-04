// import React from 'react'
import "./Home.css";
import { LearnMoreButton } from "../../components/LearnMoreButton";

export const Home = () => {
  return (
    <>
      {/* Hero */}
      {/* Ticket #1: Add interactive swiper */}
      {/* Ticket #2: Add interactive navigation for links across the page */}
      <section className="hero">
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-content">
              <div className="hero-left-content-wrapper">
                <div className="hero-left-content">
                  <div className="hero-left-content-text-wrapper">
                    <div className="hero-left-content-text">
                      <h1>
                        Lessons and insights
                        <br />
                        <span>
                          <p>from 8 years</p>
                        </span>
                      </h1>
                      <p>
                        Where to grow your business as a photographer: site or
                        social media?
                      </p>
                    </div>
                  </div>
                  <div className="hero-left-content-btn-wrapper">
                    <div className="hero-left-content-btn">
                      <div className="register-btn-wrapper">
                        <div className="register-btn">
                          <button>Register</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-right-content-wrapper">
                <div className="hero-right-content">
                  <div className="hero-right-content-banner-wrapper">
                    <div className="hero-right-content-banner">
                      <img
                        src="/images/home/Illustration.png"
                        alt="Hero Illustration"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-content-swiper-icons-wrapper">
            <div className="hero-content-swiper-icons">
              <img src="/images/home/Dot.png" alt="Swiper Icons" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="our-clients">
        <div className="container">
          <div className="our-clients-content-wrapper">
            <div className="our-clients-content">
              <div className="our-clients-content-text-wrapper">
                <div className="our-clients-content-text">
                  <h2>Our Clients</h2>
                  <p>We have been working with some Fortune 500&#43; clients</p>
                </div>
              </div>
              <div className="our-clients-content-icons-wrapper">
                <div className="our-clients-content-icons">
                  <img src="/images/home/Logo.png" alt="Company Logo" />
                  <img src="/images/home/Logo-1.png" alt="Company Logo" />
                  <img src="/images/home/Logo-2.png" alt="Company Logo" />
                  <img src="/images/home/Logo-3.png" alt="Company Logo" />
                  <img src="/images/home/Logo-4.png" alt="Company Logo" />
                  <img src="/images/home/Logo-5.png" alt="Company Logo" />
                  <img src="/images/home/Logo-6.png" alt="Company Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manage */}
      <section className="manage">
        <div className="container">
          <div className="manage-content-wrapper">
            <div className="manage-content">
              <div className="manage-content-text-wrapper">
                <div className="manage-content-text">
                  <h2>
                    Manage your entire community
                    <br />
                    in a single system
                  </h2>
                  <p>Who is Nextcent suitable for?</p>
                </div>
              </div>
              <div className="manage-content-cards-wrapper">
                <div className="manage-content-cards">
                  {/* Card */}
                  <div className="manage-content-card-wrapper">
                    <div className="manage-content-card">
                      <div className="manage-content-card-logo-wrapper">
                        <div className="manage-content-card-logo">
                          <img src="/images/home/Icon7.png" alt="Users" />
                        </div>
                      </div>
                      <div className="manage-content-card-text-wrapper">
                        <div className="manage-content-card-text">
                          <h3>
                            Membership
                            <br />
                            Organisations
                          </h3>
                          <p>
                            Our membership management
                            <br />
                            software provides full automation of
                            <br />
                            membership renewals and payments
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="manage-content-card-wrapper">
                    <div className="manage-content-card">
                      <div className="manage-content-card-logo-wrapper">
                        <div className="manage-content-card-logo">
                          <img src="/images/home/Icon-8.png" alt="Building" />
                        </div>
                      </div>
                      <div className="manage-content-card-text-wrapper">
                        <div className="manage-content-card-text">
                          <h3>
                            National
                            <br />
                            Associations
                          </h3>
                          <p>
                            Our membership management
                            <br />
                            software provides full automation of
                            <br />
                            membership renewals and payments
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="manage-content-card-wrapper">
                    <div className="manage-content-card">
                      <div className="manage-content-card-logo-wrapper">
                        <div className="manage-content-card-logo">
                          <img src="/images/home/Icon-9.png" alt="Hands" />
                        </div>
                      </div>
                      <div className="manage-content-card-text-wrapper">
                        <div className="manage-content-card-text">
                          <h3>
                            Clubs And
                            <br />
                            Groups
                          </h3>
                          <p>
                            Our membership management
                            <br />
                            software provides full automation of
                            <br />
                            membership renewals and payments
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More */}
      <section className="learn-more">
        <div className="container">
          <div className="learn-more-content-wrapper">
            <div className="learn-more-content">
              <div className="learn-more-left-content-wrapper">
                <div className="learn-more-left-content">
                  <div className="learn-more-left-content-banner-wrapper">
                    <div className="learn-more-left-content-banner">
                      <img src="/images/home/rafiki.png" alt="Illustration" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="learn-more-right-content-wrapper">
                <div className="learn-more-right-content">
                  <div className="learn-more-right-content-text-wrapper">
                    <div className="learn-more-right-content-text">
                      <h2>
                        The unseen of spending three
                        <br />
                        years at Pixelgrade
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sit amet justo ipsum. Sed
                        <br />
                        accumsan quam vitae est varius fringilla. Pellentesque
                        placerat vestibulum lorem sed
                        <br />
                        porta. Nullam mattis tristique iaculis. Nullam pulvinar
                        sit amet risus pretium auctor. Etiam
                        <br />
                        quis massa pulvinar, aliquam quam vitae, tempus sem.
                        Donec elementum pulvinar odio.
                      </p>
                    </div>
                  </div>
                  <LearnMoreButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reinvent */}
      <section className="reinvent">
        <div className="container">
          <div className="reinvent-content-wrapper">
            <div className="reinvent-content">
              <div className="reinvent-left-content-wrapper">
                <div className="reinvent-left-content">
                  <div className="reinvent-left-content-text-wrapper">
                    <div className="reinvent-left-content-text">
                      <h2>
                        Helping a local
                        <br />
                        <span>business reinvent itself</span>
                      </h2>
                      <p>We reached here with our hard work and dedication</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reinvent-right-content-wrapper">
                <div className="reinvent-right-content">
                  {/* Upper Wrapper */}
                  <div className="reinvent-right-upper-content-wrapper">
                    <div className="reinvent-right-upper-content">
                      <div className="reinvent-right-upper-content-members-wrapper">
                        <div className="reinvent-right-upper-content-members">
                          <div className="reinvent-right-upper-content-members-left-content-wrapper">
                            <div className="reinvent-right-upper-content-members-left-content">
                              <img src="/images/home/Icon-10.png" alt="Users" />
                            </div>
                          </div>
                          <div className="reinvent-right-upper-content-members-right-content-wrapper">
                            <div className="reinvent-right-upper-content-members-right-content">
                              <div className="reinvent-right-upper-content-members-right-content-text-wrapper">
                                <div className="reinvent-right-upper-content-members-right-content-text">
                                  <h3>2,245,341</h3>
                                  <p>Members</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="reinvent-right-upper-content-clubs-wrapper">
                        <div className="reinvent-right-upper-content-clubs">
                          <div className="reinvent-right-upper-content-clubs-left-content-wrapper">
                            <div className="reinvent-right-upper-content-clubs-left-content">
                              <img src="/images/home/Icon-11.png" alt="Hands" />
                            </div>
                          </div>
                          <div className="reinvent-right-upper-content-clubs-right-content-wrapper">
                            <div className="reinvent-right-upper-content-clubs-right-content">
                              <div className="reinvent-right-upper-content-clubs-right-content-text-wrapper">
                                <div className="reinvent-right-upper-content-clubs-right-content-text">
                                  <h3>46,328</h3>
                                  <p>Clubs</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lower Wrapper */}
                  <div className="reinvent-right-lower-content-wrapper">
                    <div className="reinvent-right-lower-content">
                      <div className="reinvent-right-lower-content-event-bookings-wrapper">
                        <div className="reinvent-right-lower-content-event-bookings">
                          <div className="reinvent-right-lower-content-event-bookings-left-content-wrapper">
                            <div className="reinvent-right-lower-content-event-bookings-left-content">
                              <img src="/images/home/Icon-12.png" alt="Hand" />
                            </div>
                          </div>
                          <div className="reinvent-right-lower-content-event-bookings-right-content-wrapper">
                            <div className="reinvent-right-lower-content-event-bookings-right-content">
                              <div className="reinvent-right-lower-content-event-bookings-right-content-text-wrapper">
                                <div className="reinvent-right-lower-content-event-bookings-right-content-text">
                                  <h3>828,867</h3>
                                  <p>Event Bookings</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="reinvent-right-lower-content-payments-wrapper">
                        <div className="reinvent-right-lower-content-payments">
                          <div className="reinvent-right-lower-content-payments-left-content-wrapper">
                            <div className="reinvent-right-lower-content-payments-left-content">
                              <img src="/images/home/Icon-13.png" alt="Card" />
                            </div>
                          </div>
                          <div className="reinvent-right-lower-content-payments-right-content-wrapper">
                            <div className="reinvent-right-lower-content-payments-right-content">
                              <div className="reinvent-right-lower-content-payments-right-content-text-wrapper">
                                <div className="reinvent-right-lower-content-payments-right-content-text">
                                  <h3>1,926,436</h3>
                                  <p>Payments</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Helping a local business */}
      <section className="helping-a-local-business">
        <div className="container">
          <div className="helping-a-local-business-content-wrapper">
            <div className="helping-a-local-business-content">
              {/* Left Wrapper */}
              <div className="helping-a-local-business-left-content-wrapper">
                <div className="helping-a-local-business-left-content">
                  <div className="helping-a-local-business-left-content-banner-wrapper">
                    <div className="helping-a-local-business-left-content-banner">
                      <img src="/images/home/pana.png" alt="Illustration" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Wrapper */}
              <div className="helping-a-local-business-right-content-wrapper">
                <div className="helping-a-local-business-right-content">
                  <div className="helping-a-local-business-right-content-text-wrapper">
                    <div className="helping-a-local-business-right-content-text">
                      <h2>
                        How to design your footer like
                        <br />
                        we did
                      </h2>
                      <p>
                        Donec a eros justo. Fusce egestas tristique ultrices.
                        Nam tempor, augue nec tincidunt
                        <br />
                        molestie, massa nunc varius arcu, at scelerisque elit
                        erat a magna. Donec quis erat at
                        <br />
                        libero ultrices mollis. In hac habitasse platea
                        dictumst. Vivamus vehicula leo dui, at porta
                        <br />
                        nisi facilisis finibus. In euismod augue vitae nisi
                        ultricies, non aliquet urna tincidunt. Integer
                        <br />
                        in nisi eget nulla commodo faucibus efficitur quis
                        massa. Praesent felis est, finibus et nisi
                        <br />
                        ac, hendrerit venenatis libero. Donec consectetur
                        faucibus ipsum id gravida.
                      </p>
                    </div>
                  </div>
                  <LearnMoreButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="customers">
        <div className="container">
          <div className="customers-content-wrapper">
            <div className="customers-content">
              <div className="customers-content-text-wrapper">
                <div className="customers-content-text">
                  <p>
                    Maecenas dignissim justo eget nulla rutrum molestie.
                    Maecenas lobortis sem dui, vel rutrum risus
                    <br />
                    tincidunt ullamcorper. Proin eu enim metus. Vivamus sed
                    libero ornare, tristique quam in, gravida
                    <br />
                    enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                    laoreet elit at ligula molestie, nec molestie
                    <br />
                    mi blandit. Suspendisse cursus tellus sed augue ultrices,
                    quis tristique nulla sodales. Suspendisse
                    <br />
                    eget lorem eu turpis vestibulum pretium. Suspendisse
                    potenti. Quisque malesuada enim sapien,
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
              </div>
              <div className="customers-content-logos-and-link-wrapper">
                <div className="customers-content-logos-and-link">
                  <img src="/images/home/Logo-7.png" alt="Company Logo" />
                  <img src="/images/home/Logo-1.png" alt="Company Logo" />
                  <img src="/images/home/Logo-2.png" alt="Company Logo" />
                  <img src="/images/home/Logo-3.png" alt="Company Logo" />
                  <img src="/images/home/Logo-4.png" alt="Company Logo" />
                  <img src="/images/home/Logo-5.png" alt="Company Logo" />
                  <div className="customers-content-link-wrapper">
                    <div className="customers-content-link">
                      <p>
                        <a href="">Meet all customers</a>
                        <img src="/images/home/Right.png" alt="Right Arrow" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing */}
      <section className="marketing">
        <div className="container">
          <div className="marketing-content-wrapper">
            <div className="marketing-content">
              <div className="marketing-content-text-wrapper">
                <div className="marketing-content-text">
                  <h2>Caring is the new marketing</h2>
                  <p>
                    The Nexcent blog is the best place to read about the latest
                    membership insights,
                    <br />
                    trends and more. See who&#39;s joining the community, read
                    about how our community
                    <br />
                    are increasing their membership income and lots more.
                  </p>
                </div>
              </div>
              <div className="marketing-content-cards-wrapper">
                <div className="marketing-content-cards">
                  {/* Card */}
                  <div className="marketing-content-card-wrapper">
                    <div className="marketing-content-card">
                      <div className="marketing-content-card-text-wrapper">
                        <div className="marketing-content-card-text">
                          <p>
                            Creating Streamlined
                            <br />
                            Safeguarding Processes with
                            <br />
                            OneRen
                          </p>
                        </div>
                      </div>
                      <div className="marketing-content-card-link-wrapper">
                        <div className="marketing-content-card-link">
                          <p>
                            <a href="">Read More</a>
                            <img
                              src="/images/home/Right.png"
                              alt="Right Arrow"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="marketing-content-card-wrapper">
                    <div className="marketing-content-card">
                      <div className="marketing-content-card-text-wrapper">
                        <div className="marketing-content-card-text">
                          <p>
                            What are your safeguarding
                            <br />
                            responsibilities and how can
                            <br />
                            you manage them?
                          </p>
                        </div>
                      </div>
                      <div className="marketing-content-card-link-wrapper">
                        <div className="marketing-content-card-link">
                          <p>
                            <a href="">Read More</a>
                            <img
                              src="/images/home/Right.png"
                              alt="Right Arrow"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="marketing-content-card-wrapper">
                    <div className="marketing-content-card">
                      <div className="marketing-content-card-text-wrapper">
                        <div className="marketing-content-card-text">
                          <p>
                            Revamping the Membership
                            <br />
                            Model with Triathlon
                            <br />
                            Australia
                          </p>
                        </div>
                      </div>
                      <div className="marketing-content-card-link-wrapper">
                        <div className="marketing-content-card-link">
                          <p>
                            <a href="">Read More</a>
                            <img
                              src="/images/home/Right.png"
                              alt="Right Arrow"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="demo">
        <div className="container">
          <div className="demo-content-wrapper">
            <div className="demo-content">
              <div className="demo-content-text-wrapper">
                <div className="demo-content-text">
                  <h2>
                    Pellentesque suscipit<br/>
                    fringilla libero eu.
                  </h2>
                </div>
              </div>
              <div className="demo-content-btn-wrapper">
                <div className="demo-content-btn">
                  <button>Get a demo <img src="/images/home/Right-white.png" alt="Right Arrow" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
