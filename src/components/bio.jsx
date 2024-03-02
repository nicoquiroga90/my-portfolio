import { useLocation } from "react-router-dom";
import "../styles/About.css";

function Bio({ isHomePage }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (isHomePage) {
    return (
      <p className="text-xl">
        Hola! I'm Nicolas, a Full Stack developer in Copenhagen.
        <br /> <br />
        I enjoy creating and delivering quality code for complex web
        applications, using modern tech and practices. Beyond technical
        expertise, I thrive as a team player, valuing open communication and
        feedback.
        <br /> <br />
        Feel free to check out my coding skills on{" "}
        <a
          className="github-link"
          href="https://github.com/nicoquiroga90"
          target="_blank"
          rel="noopener noreferrer"
        >
          my GitHub page
        </a>
        .
      </p>
    );
  } else {
    return (
      <p className="text-xl">
        Hi there! First of all, thank you for visiting my page. <br />
        <br />
        My name is Nicolas, though I often go by Nico. I'm originally from
        Buenos Aires, Argentina, and I'm currently 34 years old. <br /> <br />
        Since 2020, I've been in Denmark, a beautiful country that I now
        consider my home. After many years in Argentina working as a data
        analyst, mass incident reporter, and in the final stage managing
        cartographic data, I made the decision to experience living in another
        country and culture. <br /><br /> Starting over from scratch in Denmark, I set
        myself three goals:
        <ul>
          <li>Improve my English skills</li>
          <li>Learn a new language: Danish</li>
          <li>Learn to code</li>
        </ul>
        Happily and with a lot of work, I'm proud to say that I've made progress
        in each of them. Today, my English is advanced, and I can communicate
        fluently. I'll soon finish my <a className="link" href= "https://danskogproever.dk/borger/danskproever/om-proeve-i-dansk-3-og-krav-til-at-bestaa/">Prøve i Dansk 3</a> (PD3) exam, and thanks to
        the <a className="link" href="https://www.hackyourfuture.dk/">HackYourFuture</a> organization, I've developed my skills so that you're reading this right
        now :) <br /> <br /> I'm passionate about soccer and, like several
        generations in my family, a fan of <span className="boca-juniors">Boca Juniors</span>, a legacy I hope to pass
        on to my son (no pressure, right?). But undoubtedly, my favorite hobby
        is traveling and discovering new places, foods, and cultures,
        accompanied by my wife. <br />
        <br /> I love history, and I read and stay informed about politics and
        economics, topics I discuss and debate amicably with friends. <br />{" "}
        <br /> I hope this gives you a good overview of me. If you want to know
        more, please take a look at how to <a className="link" href="#contact">contact Me</a>.
      </p>
    );
  }
}

export default Bio;
