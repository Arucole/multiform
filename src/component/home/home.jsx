import React from 'react'
import './home.css'

function Home() {
  return (
    <div>
      <div className="container">
        <div class="step">
          <div class="one">1</div>
          <div class="one">2</div>
          <div class="one">3</div>
          <div class="one">4</div>
        </div>

        <div className="personal exams">
          <div class="person">
            <h1>Personal info</h1>
            <p id="beg">Please provide your name, email address, and phone number.</p>
          </div>
          <form action="">
            <label htmlFor="form-name" class="design">Name</label>
            <input type="text" id="form-name" placeholder="e.g. Stephen King" />
            
            <label htmlFor="form-email" class="design">Email Address</label>
            <input type="email" id="form-email" placeholder="e.g. stephenking@lorem.com" />

            <label htmlFor="form-phone" class="design">Phone Number</label>
            <input type="tel" id="form-phone" placeholder="e.g. +1 234 567 890" />

            <div class="bottomm">
              <input type="submit"  value="Next step" class="nextstep" />
            </div>
          </form>
        </div>

        <div className="submit"></div>
      </div>
    </div>
  )
}

export default Home