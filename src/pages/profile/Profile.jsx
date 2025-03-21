import React from 'react'
import "./profile.css"
import { NavLink } from 'react-router-dom'

const Profile = () => {
  return (
    <>
    <div className='Profile-Body'>
      <main className="Header">
        <NavLink to={"/"}>
          
      <button className='BackBtn'>Back</button>
        </NavLink>
      </main>
      <div className="Profile-BodySmall">
        <div className="ProfileNav1">
          <img className='Img' src="https://scontent.flos1-3.fna.fbcdn.net/v/t39.30808-6/356626815_1302693210640588_9144552044462742636_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHZOsHHodt7UjX6HeYNjIJz6pQiWA0jCNTqlCJYDSMI1AAUIVeonPXYCsqOx2OSP2seQknG2jfMH2y3YRZM3efg&_nc_ohc=cRSIlfsRxkkQ7kNvgGJ1Luy&_nc_oc=AdhRXZnkR0Nxf1KCjlF3X9BuuVGgV6_wJb_50Fce1Nit7a8JZtWYPoQN0yrPkXfxsKk&_nc_zt=23&_nc_ht=scontent.flos1-3.fna&_nc_gid=AlJSpbLtfxYxz_wo1RQS2ua&oh=00_AYHzXH9Lg9O2_mCTCiwzgTASHCYUOrpcDO5S88gfun6_1Q&oe=67D8C2C9" alt="" />
        </div>
        <div className="ProfileNav2">
          <div className="ProfileNav2Small">
          <div className="ProfileNav2SmallLine">
          <h2>Name:</h2>
          <h3>Taofik Ahmed</h3>
          </div>


          <div className="ProfileNav2SmallLine">
          <h2>Email:</h2>
          <h3>tafikahmed007@gmail.com</h3>
          </div>


          <div className="ProfileNav2SmallLine">
          <h2>Phone:</h2>
          <h3>09014555140</h3>
          </div>


          <div className="ProfileNav2SmallLine">
          <h2>Location:</h2>
          <h3>Lagos, Nigeria.</h3>
          </div>

          <div className="ProfileNav2SmallBtnBox">
              <button className='Btn'>Edit Profile</button>
              <button className='Btn2'>Log Out</button>
          </div>

          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Profile