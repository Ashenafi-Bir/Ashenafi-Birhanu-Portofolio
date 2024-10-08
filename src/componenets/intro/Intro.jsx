import './intro.css'
import Typewriter from 'typewriter-effect';
export default function Intro() {
 

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> <div className='hi'>Hi There,</div> I'm</h2>
          <h1>Ashenafi Birhanu</h1>
          <h3>
            Freelance <span ><Typewriter
              options={{
                strings: ['Developer', 'Web Designer','Content Creator','Graphics Designer'],
                  autoStart: true,
                  loop: true,
               }}/>
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
