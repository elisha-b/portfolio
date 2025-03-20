import './App.css'

function App() { 
  return (
    <>
      <div>
        <div class="self-center absolute inset-y-0 left-0 w-1/2 p-30 fixed">
          <h1>&#62; <span class="text-[#33FFCF]">Elisha Balat</span></h1>
          <h2>Aspiring software engineer/developer.</h2>
        </div>
      <div class="absolute inset-y-0 right-0 w-1/2 text-[32px] p-30">
        <p className="summary">As an aspiring software engineer/developer, I am currently studying a Certificate IV in IT (Programming) at TAFE SA having previously studied in Singapore and Australia. In Singapore, I earned awards in yearly national and international robotics competitions as a vice-president and secretary of publicity of my secondary school's robotics club. In Australia, I was appointed as a head prefect and maths prefect, organizing events and designing promotional content in senior high school.</p>
        
        <h2>&#62; Skills</h2>
        <ul>
          <li>HTML5</li>
          <li>TailwindCSS</li>
          <li>Python</li>
          <li>C#</li>
          <li>Java</li>
        </ul>

        <h2>&#62; Education</h2>
        {/* TAFE SA */}
        <div>
          <h3>TAFE SA</h3>
          {/* CERT IV */}
          <div className="education-qualification">
            <h4>Certificate IV in IT (Programming)</h4>
          </div>
          <div className="education-date">
            <p>Expected July 2025</p>
          </div>
          {/* CERT III */}
          <div className="education-qualification">
            <h4>Certificate III in IT</h4>
          </div>
          <div className="education-date">
            <p>Jan 2024 - Jun 2024</p>
          </div>
        </div>
        {/* UNDERDALE HIGH SCHOOL */}
        <div>
          <h3>Underdale High School</h3>
          <div className="education-qualification">
            <h4>South Australian Certificate of Education</h4>
          </div>
          <div className="education-date">
            <p>Jan 2022 - Dec 2023</p>
          </div>
        </div>
        {/* PEI HWA SECONDARY SCHOOL */}
        <div>
          <h3>Pei Hwa Secondary School</h3>
          <div className="education-qualification">
            <h4>Year 7-9</h4>
          </div>
          <div className="education-date">
            <p>Jan 2019 - Dec 2021</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
