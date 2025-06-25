import linkedInLogo from './assets/linkedinlogo.svg'
import gitHubLogo from './assets/githublogo.svg'
import './App.css'

function App() { 
  return (
    <>
      <div className="main">
        {/* Introduction */}
        <div className="intro">
          <div className="intro-fixed">
            <h2 class="text-[36px] mt-40 mb-[-15px] font-semibold">Hi, I'm</h2>
            <h1 class="text-[72px] font-bold">Elisha Balat &#128075;</h1>
            <h2 class="text-[36px] leading-[40px]">Aspiring <span className="highlight">developer.</span> </h2>
            <div class="inline-flex mt-70">
              <a href="https://www.linkedin.com/in/elisha-balat/" target="_blank"><img src={linkedInLogo} className="logo" /></a>
              <a href="https://github.com/elisha-b" target="_blank"><img src={gitHubLogo} className="logo" /></a>
            </div>
          </div>
        </div>
        {/* Information */}
        <div className="info">
          <div>
            <p class="text-justify">As an aspiring developer, I am currently enrolled in a <span className="highlight">Diploma of IT (Advanced Programming)</span>  at TAFE SA having previously studied in Singapore and Australia. In Singapore, I earned awards in yearly national and international robotics competitions as a vice-president and secretary of publicity of my secondary school's robotics club. In Australia, I was appointed as a head prefect and maths prefect, organizing events and designing promotional content in senior high school.</p>
          </div>
          <div>
            <h2 class="text-[36px] mt-10 font-semibold">Skills</h2>
            <ul class="list-disc ml-6">
              <li>HTML5/CSS</li>
              <li>Python</li>
              <li>C#</li>
              <li>PHP</li>
              <li>Java</li>
            </ul>
          </div>
          <div>
            <h2 class="text-[36px] mt-10 font-semibold">Education</h2>
            <div>
              <h3 class="text-[28px] mt-3"><a href="https://www.tafesa.edu.au" target="_blank" class="hover:oklch(0.6 0.118 184.704)">TAFE SA</a></h3>
              <p className="country">Australia</p>
              <h4 class="inline-block w-2/3"><span className="highlight">Diploma of IT (Advanced Programming)</span></h4>
              <h4 class="inline-block w-1/3 text-right italic"><span className="highlight">Expected Jul '26</span></h4>
              <h4 class="inline-block w-2/3">Certificate IV in IT (Programming)</h4>
              <h4 class="inline-block w-1/3 text-right italic">Expected Jul '25</h4>
              <ul class="list-disc ml-6">
                <li>Java, Python, HTML5/CSS, C#, JavaScript, MySQL, XAML, PHP</li>
                <li>Git, Git Bash, TortoiseGit, XAMPP, Power BI, UML, AWS, NUnit</li>
              </ul>
              <h4 class="inline-block w-2/3">Certificate III in IT</h4>
              <h4 class="inline-block w-1/3 text-right italic">Completed Jul '24</h4>
              <ul class="list-disc ml-6">
                <li>Python, HTML5/CSS</li>
              </ul>
            </div>
            <div>
              <h3 class="text-[28px] mt-10">Underdale High School</h3>
              <p className="country">Australia</p>
              <h4 class="inline-block w-2/3">Year 11 - 12 • South Australian Certificate of Education (SACE)</h4>
              <h4 class="inline-block w-1/3 text-right italic">Jan '22 - Dec '23</h4>
              <ul class="list-disc ml-6">
                <li>Head Prefect, Math Learning Area Leader</li>
                <li>Stage 2 Academic Award for English Literary Studies</li>
                <li>Success Through Resilience Award</li>
                <li>Certificate of Distinction - Australian Mathematics Competition</li>
              </ul>
            </div>
            <div>
              <h3 class="text-[28px] mt-10">Pei Hwa Secondary School</h3>
              <p className="country">Singapore</p>
              <h4 class="inline-block w-2/3">Year 7 - 9</h4>
              <h4 class="inline-block w-1/3 text-right italic">Jan '19 - Dec '21</h4>
              <ul class="list-disc ml-6">
                <li>Vice-president of Robotics Club, Secretary of Publicity of Robotics Club</li>
                <li>1st Team Placing RoboCup Singapore Open 2019 - RoboCup Asia-Pacific, CoSpace Rescue U19</li>
              </ul>
            </div>
          </div>
          </div>
        </div>

      {/* <div class="self-center absolute inset-y-0 h-full left-0 w-1/2 p-30 fixed">
        <h2>Hi,  I'm</h2>
        <h1>Elisha Balat &#128075;</h1>
        <h2>Aspiring software engineer/developer.</h2>
      </div>
      <div class="absolute inset-y-0 right-0 w-1/2 h-full text-[32px]">
        <p className="summary">As an aspiring software engineer/developer, I am currently studying a Certificate IV in IT (Programming) at TAFE SA having previously studied in Singapore and Australia. In Singapore, I earned awards in yearly national and international robotics competitions as a vice-president and secretary of publicity of my secondary school's robotics club. In Australia, I was appointed as a head prefect and maths prefect, organizing events and designing promotional content in senior high school.</p>
        <h2>Top Skills</h2>
        <ul>
          <li>HTML5</li>
          <li>TailwindCSS</li>
          <li>Python</li>
          <li>C#</li>
          <li>Java</li>
        </ul>

        <h2>Education</h2>
        
        <div>
          <h3>TAFE SA</h3>
          
          <div className="education-qualification">
            <h4>Certificate IV in IT (Programming)</h4>
          </div>
          <div className="education-date">
            <p>Expected July 2025</p>
          </div>
          <ul>
            <li>Java, Python, HTML5/CSS, C#, JavaScript, MySQL, XAML, PHP</li>
            <li>Git, Git Bash, TortoiseGit, XAMPP, Power BI, UML, Azure</li>
          </ul>
          
          <div className="education-qualification">
            <h4>Certificate III in IT</h4>
          </div>
          <div className="education-date">
            <p>Jan 2024 - Jun 2024</p>
          </div>
          <ul>
            <li>Python, HTML5/CSS</li>
          </ul>
        </div>
        
        <div>
          <h3>Underdale High School</h3>
          <div className="education-qualification">
            <h4>South Australian Certificate of Education</h4>
          </div>
          <div className="education-date">
            <p>Jan 2022 - Dec 2023</p>
          </div>
          <ul>
            <li>Head Prefect, Math Learning Area Leader</li>
            <li>Stage 2 Academic Award for English Literary Studies</li>
            <li>Success Through Resilience Award</li>
            <li>Certificate of Distinction - Australian Mathematics Competition</li>
          </ul>
        </div>
         
        <div>
          <h3>Pei Hwa Secondary School</h3>
          <div className="education-qualification">
            <h4>Year 7-9</h4>
          </div>
          <div className="education-date">
            <p>Jan 2019 - Dec 2021</p>
          </div>
          <ul>
            <li>Vice-president of Robotics Club, Secretary of Publicity of Robotics Club</li>
            <li>1st Team Placing RoboCup Singapore Open 2019 - RoboCup Asia-Pacific, CoSpace Rescue U19</li>
          </ul>
        </div>
      </div>
      */}
    </>
  )
}

export default App
