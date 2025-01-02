import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
function Main() {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello,Dev</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className='card'>
                        <p>Suggest beautifull places</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>

                    <div className='card'>
                        <p>Suggest beautifull places </p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className='card'>
                        <p>Suggest beautifull places</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className='card'>
                        <p>Suggest beautifull places</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here' />

                        <div>
                            <img src={assets.gallery_icon}  />
                            <img src={assets.mic_icon} />
                            <img src={assets.send_icon}  />
                        </div>
                    </div>
                    <p className="bottom-info">
                            Gemini may display inaccurate info, includes about people, so double-check its answers
                        </p>
                </div>
            </div>

        </div>
    )
}

export default Main