import profilePic from './assets/profile-pic.png'

export default function ProfilePicture() {
    return (
        <div className="info">
            <img src={profilePic} alt="Profile picture" className="profile-pic"></img>
            <div className="info-wrapper">
                <h2>Laura Smith</h2>
                <p>Frontend Developer</p>
                <a href="#">laurasmith.website</a>
            </div>
            <div className="links-wrapper">
                <a href="mailto:#" id="email"><i className="fa-solid fa-envelope"></i>Email</a>
                <a href="#" id="linkedin"><i className="fa-brands fa-linkedin inverse"></i>Linkedin</a>
            </div>
        </div>
    )

}