export default function MainContent() {
    return (
        <div className="card-main-content">
            <div className="info-wrapper">
                <h2>Laura Smith</h2>
                <p>Frontend Developer</p>
                <a href="#">laurasmith.website</a>
            </div>
            <div className="links-wrapper">
                <a href="mailto:#" id="email"><i className="fa-solid fa-envelope"></i>Email</a>
                <a href="#" id="linkedin"><i className="fa-brands fa-linkedin inverse"></i>Linkedin</a>
            </div>
            <div className="about-wrapper">
                <h3>About</h3>
                <p>
                    I am a frontend developer with a particular interest
                    in making things simple and automating daily tasks.
                    I try to keep up with security and best practices,
                    and am always looking for new things to learn.
                </p>
                <h3>Interests</h3>
                <p>
                    Food expert. Music scholar. Reader. Internet fanatic.
                    Bacon buff. Entrepreneur. Travel geek. Pop culture ninja.
                    Coffee fanatic.
                </p>
            </div>
        </div>
    )
}