import React from 'react';

const Homepage = () => {

  return (
    <div className= "light-background">
      <main className="homepage-outer-container">
        <div className="homepage-pic">
          <div className="pic-text-container">
            <span className="homepage-head-main">People can be interesting</span>
            <span className="homepage-head-subtext">...But you don’t discover that when you’re staring at a screen.</span>
          </div>
        </div>
        <section className="colored centered">
          <div>
            <div className="homepage-subhead">
              <div>
                <div className="box">
                  <span className="medium-text">Show up for some cake</span>
                  <span className="small-text">You and a few others join the host.</span>
                </div>
              </div>
              <div>
                <div className="box" id="middle">
                  <span className="medium-text">Have a real conversation</span>
                  <span className="small-text middle-small">You talk about anything you want.</span>
                </div>
              </div>
              <div>
                <div className="box">
                  <span className="medium-text">See what happens</span>
                  <span className="small-text">Thats it. No strings attached.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <h4 className="top-text-homepage capitalize">Why are so many people doing this</h4>
        <section className="centered">
          <div className="deep">
            <div className="homepage-inner-container">
              <div>
                <div className="image-text">
                  <img src="http://res.cloudinary.com/dzixj0ktk/image/upload/v1481574836/first-part-image_kytvok.png" />
                  <div>
                    <div className="centered-column first-text">
                      <span className="medium-text">It's definitely not normal</span>
                      <p className="small-text">Everyone getting cake is stepping out of their comfort zone. This makes it so much easier for the unexpected to happen. Because open-mindedness is a prerequisite here.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="image-text middle">
                  <div>
                    <div className="centered-column middle-text">
                      <span className="medium-text">Probably won't meet otherwise</span>
                      <p className="small-text">It's very likely our paths wouldn't cross otherwise. So often, we only meet people through work, school, or mutual friends. So basically, we hook you up.</p>
                    </div>
                  </div>
                  <img src="http://res.cloudinary.com/dzixj0ktk/image/upload/v1481574836/second-part-image_gtqcnf.png" />
                </div>
              </div>
              <div>
                <div className="image-text">
                    <img src="http://res.cloudinary.com/dzixj0ktk/image/upload/v1481574836/third-part-image_cwipaq.png" />
                  <div>
                    <div className="centered-column last-text">
                      <span className="medium-text">It's time to actually meet people</span>
                      <p className="small-text">Meeting people in person is so much better than their tweets, facebook statuses, and Instagram pictures. #nofilter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="special-colored centered">
          <div className="button-centered">
            <div className="centered">
              <span>Actually meet people.</span>
            </div>
            <div className="button-container">
              <button className="homepage-button capitalize">Lets get cake</button>
            </div>
          </div>
        </section>
        <section className="centered lower">
          <div className="deep">
            <div className="homepage-inner-container">
              <div>
                <div className="reviews">
                  <blockquote>
                    ”I met people who I continue to be in touch with years later, and people who I shared delightful conversations with that day but no more. Both are their own kind of fun.”
                    <span>Monnor, NYC</span>
                  </blockquote>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <blockquote>
                    ”I’m not the type of person who talks to strangers. This doesn’t mean I don’t want to. Lets Get Cake just makes it easier because you know everyone there wants it too.”
                    <span>Gabriel, SF</span>
                  </blockquote>
                </div>
              </div>
              <br />
              <div>
                <div className="centered">
                  <img src="http://res.cloudinary.com/dzixj0ktk/image/upload/v1481660292/fourth-pic_e8eiuf.png" />
                </div>
                <br />
                <br />
                <h4 className="top-text-homepage capitalize">There is no such thing as a stranger</h4>
                <div className="image-text">
                  <img src="http://res.cloudinary.com/dzixj0ktk/image/upload/v1481660292/fifth-pic_wdkpnh.png" />
                  <div>
                    <div className="centered-column-end">
                      <p className="small-text">
                        You'd never think of yourself as a stranger. But everyone else does. You know your story. Your embarrassments. Your joy. Your idiocyncrasies — the thing that make you, you. But they don't.
                      </p>
                      <p className="small-text">
                        And everyone has these — whether or not we know what they are. Everyone around you is a person, loaded with stories that you can't even begin to fathom. They're different from yours, but the fact that we all have them is what brings us together.
                      </p>
                      <p className="small-text">
                        In a stranger's story, we might discover parts of our own. And in seeing where a stranger is coming from, we might realize they're actually not so strange. But we don't discover much just by thinking about it. So let's find out.
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </section>
        <section className="special-colored centered end">
          <div className="button-centered">
            <div className="centered">
              <span>Don't miss out</span>
            </div>
            <div className="button-container">
              <button className="homepage-button capitalize">Alright!</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
