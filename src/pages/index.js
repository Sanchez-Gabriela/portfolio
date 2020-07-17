import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

import heroImage from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/profile.png';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import { Link } from 'gatsby';

const img_set_1 = [
  {
    src: require('../assets/images/gallery/fulls/todo.png'),
    thumbnail: require('../assets/images/gallery/thumbs/todo.png'),
    title: 'Great Sky',
    desc: 'Be one with the Universe',
    full: true,
  },
];
const img_set_2 = [
  {
    src: require('../assets/images/gallery/fulls/ecomm.png'),
    thumbnail: require('../assets/images/gallery/thumbs/ecomm.png'),
    title: 'Any Curiosity',
    desc: 'Be one with the curiosity',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/catalog.png'),
    thumbnail: require('../assets/images/gallery/thumbs/catalog.png'),
    title: 'Any source of enlightenment',
    desc: 'Be one with the soul',
  },
  {
    src: require('../assets/images/gallery/fulls/thumbnailEcomm.png'),
    thumbnail: require('../assets/images/gallery/thumbs/thumbnailEcomm.png'),
    title: 'Be in present',
    desc: 'Be one with the present',
  },
];
const img_set_3 = [
  {
    src: require('../assets/images/gallery/fulls/08.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/08.jpg'),
    title: 'Give away',
    desc: 'Be one with the empathy',
  },
  {
    src: require('../assets/images/gallery/fulls/09.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/09.jpg'),
    title: 'Moment',
    desc: 'Be one with the moment',
  },
  {
    src: require('../assets/images/gallery/fulls/10.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/10.jpg'),
    title: 'Serenity',
    desc: 'Be one with the purity',
    full: true,
  },
];
const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
            <img src={heroImage} alt="" />
          </span>
        </div>
      </section>

      <section id="first">
        <header>
          <h2>About</h2>
        </header>
        <div className="content">
          <p>
            I've been always interested in Web Development. I was a self-taught
            for some years until I joined a great Bootcamp where I was to
            improved my skills.
          </p>
          <span className="image main">
            <img src={pic2} alt="" />
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>Technologies</h2>
        </header>
        <div className="content">
          <ul className="feature-icons">
            <li>CSS </li>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Next.js</li>
            <li>PostgreSQL</li>
            <li>Cypress</li>
          </ul>
        </div>
      </section>

      <section>
        <header>
          <h2>Projects</h2>
        </header>
        <div className="content">
          <p>
            <strong>Some of my projects during the bootcamp</strong>
          </p>

          <section>
            <header>
              <h3>TODO list | chichi</h3>
              <p>
                A pretty minimalist Todo list with the basic features like
                adding, checking off and deleting tasks.
              </p>
            </header>
            <div className="content">
              <Gallery images={img_set_1} />
            </div>
          </section>

          <section>
            <header>
              <h3>e-commerce | Bendfinger</h3>
              <p>
                This project reflects what I like about coding, a combination of
                features and design. Builded from Scratch, implementing
                authentication, database, user experience and testing.
                Technologies: PostgreSQL, Next.js, Emotion, Cypress.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_2} />
              </div>
            </div>
          </section>

          <section>
            <header>
              <h3>Lorem gravida</h3>
              <p>
                Proin aliquam facilisis ante interdum. Sed nulla amet lorem
                feugiat tempus aenean ornare velit lacus, ac varius sed enim
                lorem ullamcorper dolore. ac varius enim lorem ullamcorper
                dolore. Proin aliquam facilisis.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_3} />
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* <li>
              <a href="/#" className="button large">
                Learn More
              </a>
            </li> */}

      <section>
        <ContactForm />
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
