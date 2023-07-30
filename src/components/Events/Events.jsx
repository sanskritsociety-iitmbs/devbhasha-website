import React from "react";
import styles from "../../app/page.module.scss";

const Events = () => {
  return (
    <>
      <div id="events" className={styles.calendarContainer}>
        <h2>Events 📅</h2>
        <iframe
          className={styles.calendar}
          src="https://calendar.google.com/calendar/u/0/embed?color=%23fbe983&src=sanskrit.society@study.iitm.ac.in"
          frameborder="0"
        ></iframe>
      </div>
      <div className={styles.yt}>
        <iframe
          src="https://www.youtube.com/embed/nj1FeBvieYA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe

          src="https://www.youtube.com/embed/z65tBoUBcTY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe

          src="https://www.youtube.com/embed/7_yVm6sUBqI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default Events;
