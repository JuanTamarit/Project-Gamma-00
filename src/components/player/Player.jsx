// import "../../scss/global.scss";
import "src/components/player/player.scss";

function Player(props) {
  return (
    <>
      <div class="audio-player-wrap">
        <div class="visual">
          <img src="https://source.unsplash.com/1600x900/?radio" />
        </div>
        <audio
          src="https://assets.codepen.io/122136/sample-radio-commercial.mp3"
          class="audio-player"
          crossorigin="anonymous"
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <div class="audio-controls">
          <div class="audio-controls__play-toggle">
            <div class="visualizer-bar"></div>
            <div class="play-icon"></div>
            <div class="pause-icon"></div>
          </div>
          <div class="audio-controls__progress">
            <div class="audio-controls__current-progress"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Player;
