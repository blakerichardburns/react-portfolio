export default function AboutMe() {
  return <div class="about-me">
    <div class="bio-head">
        <img
          alt="Blake Burns"
          className="img-fluid"
          src={require(`../assets/me-screenshot.jpeg`)}
        />
        <h1>The Developer</h1>
    </div>
    <div class="bio">
          <p>Blake has been coding for well over five whole months, with hours worth of experienc</p>
          <p>Before pivoting into the Hello World! of web development, he attended Indiana University, barely graduating with a degree in English Literature (for reasons lost to time), with minors in Psychology and Classical Studies.</p>
          <p>Blake taught English in Madrid, Spain for four years, before returning to the United States of America to work in the fulfillment of biopharma marketing materials.</p>
          <p>In his free time, he listens to rock and metal music, watches pretentious films and television shows, occaional golfs poorly, and follows some sports, especially college football.</p>
    </div>
  </div>;
}
