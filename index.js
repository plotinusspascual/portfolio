<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Keefe Custodio</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="/assets/favicon.ico" type="image/x-icon">
  <script src="https://kit.fontawesome.com/c8e4d183c2.js" crossorigin="anonymous"></script>
  <script src="index.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
  <script type="text/javascript">
  (function() {
  emailjs.init("user_H3bBgStPFjJ8X5kPW5QgU");
  })();
  </script>
</head>

<body>
  <section id="landing-page" onmousemove="moveBackground(event)">
    <nav>
      <figure>
        <img id="personal-logo" src="./assets/logo.svg" alt="">
      </figure>
      <ul class="nav__link--list">
        <li class="nav__link" onclick="toggleModal()">
          <a href="#" class="
            nav__link--anchor
            link__hover-effect
            link__hover-effect--black
          ">About</a>
        </li>
        <li class="nav__link">
          <a href="#projects" class="
            nav__link--anchor
            link__hover-effect
            link__hover-effect--black
          ">Projects</a>
        </li>
        <li class="nav__link" onclick="toggleModal()">
          <a href="#" class="
            nav__link--anchor
            link__hover-effect
            link__hover-effect--black
          ">Contact</a>
        </li>
        <li class="nav__link click" onclick="toggleContrast()">
          <a href="#" class="
            nav__link--anchor
            link__hover-effect
            link__hover-effect--black
          "><i class="fas fa-adjust"></i></a>
        </li>
      </ul>
    </nav>
    <header class="header">
      <div class="header__content">
        <h1 class="title">Hey</h1>
        <h1 class="title blue">I'm Keefe.</h1>
        <p class="header__para">
          I'm a <b class="blue">Frontend Software Engineer</b> with a strong passion for building web applications
          with great user
          experiences.
          <br>
          Here's a bit more <b class="blue click" onclick="toggleModal()">about me</b>.
        </p>
        <div class="social__list">
          <a href="https://www.linkedin.com/in/keefecustodio/" target="_blank" class="social__link click">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/keefecustodio" target="_blank" class="social__link click">
            <i class="fab fa-github"></i>
          </a>
          <a href="./assets/Keefe Custodio Resume.pdf" target="_blank" class="social__link click">
            <i class="fas fa-file-pdf"></i>
          </a>
        </div>
      </div>
    </header>
    <a href="#">
      <button class="mail__btn click" onclick="toggleModal()">
        <i class="fas fa-envelope"></i>
      </button>
    </a>
    <a href="#projects" class="scroll">
      <div class="scroll__icon click"></div>
    </a>
    <div class="modal">
      <div class="modal__half modal__about">
        <h3 class="modal__title modal__title--about">Here's a bit about me.</h3>
        <h4 class="modal__sub-title modal__sub-title--about">Frontend Software Engineer.</h4>
        <p class="modal__para">
          I'm a 20 year-old Filipino-American <b class="blue">frontend software engineer</b> with experience developing
          websites for tech companies like <b class="blue">LeNgineer</b> and <b class="blue">OutTheDoor</b>.
          <br>
          I currently solve extremely difficult engineering
          problems every day with <b class="blue">React </b>in OutTheDoor's front-end team.
        </p>
        <div class="modal__languages">
          <figure class="modal__language">
            <img class="modal__language--img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
              alt="">
            <span class="language__name">HTML</span>
          </figure>
          <figure class="modal__language">
            <img class="modal__language--img" src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
              alt="">
            <span class="language__name">CSS</span>
          </figure>
          <figure class="modal__language">
            <img class="modal__language--img" src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
              alt="">
            <span class="language__name">JavaScript</span>
          </figure>
          <figure class="modal__language">
            <img class="modal__language--img" src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
              alt="">
            <span class="language__name">React</span>
          </figure>
          <figure class="modal__language">
            <img class="modal__language--img" src="https://cdn.iconscout.com/icon/free/png-256/jquery-10-1175155.png"
              alt="">
            <span class="language__name">jQuery</span>
          </figure>
          <figure class="modal__language">
            <img class="modal__language--img" src="https://cdn.iconscout.com/icon/free/png-256/node-js-3-1174937.png"
              alt="">
            <span class="language__name">Node.js</span>
          </figure>
        </div>
      </div>
      <div class="modal__half modal__contact">
        <i class="fas fa-times modal__exit click" onclick="toggleModal()"></i>
        <h3 class="modal__title modal__title--contact">
          Let's have a chat!
        </h3>
        <h3 class="modal__sub-title modal__sub-title--contact">
          I'm currently open to new opportunities.
        </h3>
        <form id="contact__form" onsubmit="contact(event)">
          <div class="form__item">
            <label class="form__item--label">Name</label>
            <input class="input" name="user_name" type="text" required></input>
          </div>
          <div class="form__item">
            <label class="form__item--label">Email</label>
            <input class="input" name="user_email" type="email" required></input>
          </div>
          <div class="form__item">
            <label class="form__item--label">Message</label>
            <textarea class="input" name="message" type="text" required></textarea>
          </div>
          <button id="contact__submit" class="form__submit">
            Send it my way
          </button>
        </form>
        <div class="modal__overlay modal__overlay--loading">
          <i class="fas fa-spinner"></i>
        </div>
        <div class="modal__overlay modal__overlay--success">
          Thanks for the message! Looking forward to speaking to you soon.
        </div>
      </div>
    </div>
    <img src="./assets/semi circle.svg" class="shape shape--0">
    <img src="./assets/circle.svg" class="shape shape--1">
    <img src="./assets/squiggly.svg" class="shape shape--2">
    <img src="./assets/circle.svg" class="shape shape--3">
    <img src="./assets/triangle.svg" class="shape shape--4">
    <img src="./assets/circle.svg" class="shape shape--5">
    <img src="./assets/squiggly.svg" class="shape shape--6">
    <img src="./assets/circle.svg" class="shape shape--7">
    <img src="./assets/semi circle.svg" class="shape shape--8">
  </section>
  <section id="projects">
    <div class="container">
      <div class="row">
        <h1 class="section__title">
          Here are some of my <span class="blue">projects</span>
        </h1>
        <ul class="project__list">
          <li class="project">
            <div class="project__wrapper">
              <img src="./assets/pokedex.PNG" class="project__img" alt="">
              <div class="project__wrapper--bg"></div>
              <div class="project__description">
                <h3 class="project__description--title">
                  Pokedex
                </h3>
                <h4 class="project__description--sub-title">
                  HTML, CSS, JavaScript
                </h4>
                <p class="project__description--para">
                  Pokemon website that pulls data from the Poke API to display all Pokemon sorted by Pokedex ID number.
                </p>
                <div class="project__description--links">
                  <a href="./projects/pokedex/index.html" target="_blank" class="project__description--link">
                    <i class="fas fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="project">
            <div class="project__wrapper">
              <img src="./assets/catch_the_insect.PNG" class="project__img" alt="">
              <div class="project__wrapper--bg"></div>
              <div class="project__description">
                <h3 class="project__description--title">
                  Catch the Insect
                </h3>
                <h4 class="project__description--sub-title">
                  HTML, CSS, JavaScript
                </h4>
                <p class="project__description--para">
                  Catch the Insect is a fun little game I made to put my JavaScript skills to the test.
                  In this game, you choose one of four insects to catch, and you try to catch as many as you can
                  with an unlimited amount of time.
                </p>
                <div class="project__description--links">
                  <a href="./projects/insect-catch-game/index.html" target="_blank" class="project__description--link">
                    <i class="fas fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="project">
            <div class="project__wrapper">
              <img src="./assets/markdown_previewer.PNG" class="project__img" alt="">
              <div class="project__wrapper--bg"></div>
              <div class="project__description">
                <h3 class="project__description--title">
                  Markdown Previewer
                </h3>
                <h4 class="project__description--sub-title">
                  HTML, CSS, jQuery
                </h4>
                <p class="project__description--para">
                  Markdown previewer project that allows for you to add simple formatting like headers, bold, bulleted lists, and so on to a plain text.
                  This project uses marked.js to convert the plain text into HTML.
                </p>
                <div class="project__description--links">
                  <a href="https://codepen.io/keefecustodio/full/bGBKpod" target="_blank" class="project__description--link">
                    <i class="fas fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <footer>
    <div class="container">
      <div class="row footer__row">
        <a href="#" class="footer__anchor">
          <figure class="footer__logo">
            <img src="./assets/logo.svg" class="footer__logo--img" alt="">
          </figure>
          <span class="footer__logo--popper">
            Top
            <i class="fas fa-arrow-up"></i>
          </span>
        </a>
        <div class="footer__social--list">
          <a href="https://github.com/keefecustodio" class="
          footer__social--link
          link__hover-effect
          link__hover-effect--white
        ">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/keefecustodio/" target="_blank" class="
          footer__social--link
          link__hover-effect
          link__hover-effect--white
        ">
            LinkedIn
          </a>
          <a href="#" onclick="toggleModal()" class="
          footer__social--link
          link__hover-effect
          link__hover-effect--white
        ">
            Contact
          </a>
          <a href="./assets/Keefe Custodio Resume.pdf" target="_blank" class="
          footer__social--link
          link__hover-effect
          link__hover-effect--white
        ">
            Resume
          </a>
        </div>
        <div class="footer__copyright">Copyright &copy; 2021 Keefe Custodio</div>
      </div>
    </div>
  </footer>
</body>

</html>