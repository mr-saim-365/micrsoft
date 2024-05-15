import React from "react";
import { IoEarthSharp } from "react-icons/io5";

const Links = () => {
    return (
        <>
            <div className="links">
                <div className="link-items">
                    <ul>
                        <h3>Microsoft Store</h3>
                        <li><a href="#">Account Profile</a></li>
                        <li><a href="#">Download Center</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Order Tracking</a></li>
                    </ul>

                    <ul>
                        <h3>Education</h3>                               
                        <li><a href="#">Microsoft in education</a></li>
                        <li><a href="#">Devices for education</a></li>
                        <li><a href="#">Microsoft Teams for Education</a></li>
                        <li><a href="#">Microsoft 365 Education</a></li>
                        <li><a href="#">Office Education</a></li>
                        <li><a href="#">Educator training and development</a></li>
                        <li><a href="#">Deals for students and parents</a></li>
                        <li><a href="#">Azure for students</a></li>
                    </ul>

                    <ul>
                        <h3>Business</h3>
                        <li><a href="#">Microsoft Teams</a></li>      
                        <li><a href="#">Microsoft Cloud</a></li>
                        <li><a href="#">Microsoft Security</a></li>
                        <li><a href="#">Azure</a></li>
                        <li><a href="#">Dynamics 365</a></li>
                        <li><a href="#">Microsoft 365</a></li>
                        <li><a href="#">Microsoft Advertising</a></li>
                        <li><a href="#">Copilot for Microsoft 365</a></li>
                    </ul>

                    <ul>
                        <h3>Developer & IT</h3>
                        <li><a href="#">Developer Center</a></li>    
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Microsoft Learn</a></li>
                        <li><a href="#">Microsoft Tech Community</a></li>
                        <li><a href="#">Azure Marketplace</a></li>
                        <li><a href="#">AppSource</a></li>
                        <li><a href="#">Microsoft Power Platform</a></li>
                        <li><a href="#">Visual Studio</a></li>
                    </ul>

                    <ul>
                        <h3>  Company</h3>
                        <li><a href="#">Sustainability</a></li>     
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">About Microsoft</a></li>
                        <li><a href="#">Company news</a></li>
                        <li><a href="#">Privacy at Microsoft</a></li>
                        <li><a href="#">Investors</a></li>
                    </ul>
                </div>

                <div className="footer">
                 <div className="list">
                     <ol>
                        <h4>{<IoEarthSharp/>}</h4>
                        <li><a href="#">English (Pakistan)</a></li>
                        <li><a href="#">Your Privacy Choices</a></li>
                        <li><a href="#">Consumer Health Privacy</a></li>
                    </ol>
                 </div>
                            
                    <ul>
                        <li><a href="#">Contact Microsoft</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms of use</a></li>
                        <li><a href="#">Trademarks</a></li> 
                        <li><a href="#">About our ads</a></li>
                       <li><a href="#">&copy; Microsoft 2024</a></li>               
                    </ul>
               
                </div>
            </div>
        </>
    )

}

export default Links;