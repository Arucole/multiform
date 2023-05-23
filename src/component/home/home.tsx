import React, { FC } from 'react';
import './home.css'

const Home: FC = () => {

  return (
    <React.Fragment>
      <div className="general">
        <div className="container">
          <div className="step">
            <div className="one">1</div>
            <div className="one">2</div>
            <div className="one">3</div>
            <div className="one">4</div>
          </div>

          <div className="personal exams">
            <div className="person">
              <h1 className='schoolwork'>Personal info</h1>
              <p id="beg">Please provide your name, email address, and phone number.</p>
            </div>
            <form action="">
              <label htmlFor="form-name" className="design">Name</label>
              <input type="text" id="form-name" placeholder="e.g. Stephen King" />
              
              <label htmlFor="form-email" className="design">Email Address</label>
              <input type="email" id="form-email" placeholder="e.g. stephenking@lorem.com" />

              <label htmlFor="form-phone" className="design">Phone Number</label>
              <input type="tel" id="form-phone" placeholder="e.g. +1 234 567 890" />

              <div className="bottomm">
                <input type="submit"  value="Next step" className="nextstep" />
              </div>
            </form>
          </div>

          <div className="submit"></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home

// function Home() {
//   return (
//     <div className="general">
//       <div className="container">
//         <div className="step">
//           <div className="one">1</div>
//           <div className="one">2</div>
//           <div className="one">3</div>
//           <div className="one">4</div>
//         </div>

//         <div className="personal exams">
//           <div className="person">
//             <h1 className='schoolwork'>Personal info</h1>
//             <p id="beg">Please provide your name, email address, and phone number.</p>
//           </div>
//           <form action="">
//             <label htmlFor="form-name" className="design">Name</label>
//             <input type="text" id="form-name" placeholder="e.g. Stephen King" />
            
//             <label htmlFor="form-email" className="design">Email Address</label>
//             <input type="email" id="form-email" placeholder="e.g. stephenking@lorem.com" />

//             <label htmlFor="form-phone" className="design">Phone Number</label>
//             <input type="tel" id="form-phone" placeholder="e.g. +1 234 567 890" />

//             <div className="bottomm">
//               <input type="submit"  value="Next step" className="nextstep" />
//             </div>
//           </form>
//         </div>

//         <div className="submit"></div>
//       </div>
//     </div>
//   )
// }

// export default Home