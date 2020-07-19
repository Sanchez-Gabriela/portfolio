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
    title: 'Todo list',
    desc: 'Simple app, add, ckeck off, delete, clear all',
    full: true,
  },
];
const img_set_2 = [
  {
    src: require('../assets/images/gallery/fulls/ecomm.png'),
    thumbnail: require('../assets/images/gallery/thumbs/ecomm.png'),
    title: 'Landing page',
    desc: 'e-commerce (sinthesizers)',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/catalog.png'),
    thumbnail: require('../assets/images/gallery/thumbs/catalog.png'),
    title: 'List of products',
    desc: 'Briefly review of all products and sound samples 🎹',
  },
  {
    src: require('../assets/images/gallery/fulls/thumbnailEcomm.png'),
    thumbnail: require('../assets/images/gallery/thumbs/thumbnailEcomm.png'),
    title: 'Cart page',
    desc:
      'List of selected products. Users can change quantity or remove items from the list.',
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
            I am a web developer who loves creating applications from scratch
            but it took some time to discover this passion. When I graduatedfrom
            University as an Industrial Engineer, entering the industry as a
            Planning Manager wasn't at all what I had prepared for. While I
            enjoyed the business itself and working with and managing people, I
            dearly missed problem solving and diving into logical challenges. It
            was only when I was introduced to first coding groups and online
            courses that I discovered my true destination. Joining an immersive
            and real-world focused program in Vienna finally provided me with
            the skills to be able to create applications and improve with every
            day and every project.
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
                adding, checking off and deleting tasks. Builded with React.
              </p>
            </header>
            <div className="content">
              <Gallery images={img_set_1} />
              <a href="https://zealous-hypatia-e0e439.netlify.app/">
                Visit this App ⚡
              </a>
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
                <a href="https://zealous-hypatia-e0e439.netlify.app/">
                  Visit this App ⚡
                </a>
              </div>
            </div>
          </section>

          <section>
            <header>
              <h3>Final project | Wolfi</h3>
              <p>
                Wolfi is the first version of an idea. It has been builded
                thinking on those who are spending few days in the city and want
                proper recommendations based on their interests. Save time and
                makes the journey interesting. Builded with Next.js, Emotion and
                PostgreSQL.
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
