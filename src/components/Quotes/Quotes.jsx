import React from "react";
import styles from "@/app/page.module.scss";

const Quotes = () => {
  return (
    <div className={styles.quotesPapa}>
      <a href="https://www.instagram.com/sanskritsociety_iitmbs/"><h2>View More {webLink}</h2></a>
      <div className={styles.QuotesBox}>
      
      {quotesList.map((item) => {
        return (
          <div key={item.link}>
            <img src={item.link} alt="" />
            <div>
              <p>{item.text1}</p>
              <p>{item.text2}</p>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

const quotesList = [
  {
    link: "https://github.com/DEVABHASHA-SANSKRIT-SOCIETY/insta-posts/blob/main/17.png?raw=true",
    text1: "प्राता रत्नं प्रातरित्वा दधाति ।",
    text2: "An early riser earns good health.",
  },
  {
    link: "https://github.com/DEVABHASHA-SANSKRIT-SOCIETY/insta-posts/blob/main/20.png?raw=true",
    text1: "उपायेन हि यच्छक्यं न तच्छक्यं पराक्रमैः ॥",
    text2: "The work that is done by means is not known by might.",
  },
  {
    link: "https://github.com/DEVABHASHA-SANSKRIT-SOCIETY/insta-posts/blob/main/21.png?raw=true",
    text1: "न ह्राविज्ञातशीलस्य प्रदातव्यः प्रतिश्रयः ॥",
    text2:
      "A person of unknown or antagonistic nature should not be given shelter.",
  },
  {
    link: "https://github.com/DEVABHASHA-SANSKRIT-SOCIETY/insta-posts/blob/main/25.png?raw=true",
    text1: "विनयस्य मूलं विनयः। ",
    text2:
      "The sense of humility is awakened only by the service of the elderly.",
  },
  {
    link: "https://github.com/DEVABHASHA-SANSKRIT-SOCIETY/insta-posts/blob/main/18.png?raw=true",
    text1: "अस्मासु प्रत्येकः तस्य नियतेः अधिपतिः",
    text2: "Each of us is master of one's destiny.",
  },
  {
    link: "https://github.com/DEVABHASHA-SANSKRIT-SOCIETY/insta-posts/blob/main/5.png?raw=true",
    text1: "अतिरोषणश्चक्षुष्मानन्ध एव जनः।",
    text2: "An exceedingly angry person is blind even when possessing eyes.",
  },
];

const webLink = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-external-link"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);
export default Quotes;
