import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className='co1'>
                <div className='co4'>
                    Contact us at:<br />
                    LinkedIn: <a href='https://www.linkedin.com/in/vaishnavi-chilakamarthi/'>/in/vaishnavi-chilakamarthi/</a><br />
                    Github: <a href='https://github.com/vaishu98'>/vaishu98</a><br />
                    Leetcode: <a href='https://leetcode.com/vaishu98/'>leetcode.com/vaishu98/</a> <br />
                    Mail: <a href='mailto:vchilakamarthi@ufl.edu'>vchilakamarthi@ufl.edu</a><br />
                    Ph: <a href='tel:3526650657'>+1 (352)-664-5367</a>
                </div>
                <div className='co3'>
                </div>
                <div className='co2'><img style={{ height: "100%", width: "100%" }} src={require("./co.jpeg")} alt="About Us" /></div>

            </div>
        </div >
    )
}
