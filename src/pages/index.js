import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Resume from '../assets/images/resume.pdf'

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Abby Krishnan"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">
                    <section id="one">
                        <header className="major">
                            <h2>About Me</h2>
                        </header>
                        <p> My name is Abby Krishnan! I study Computer Science (dabbling in Government) at UT Austin.
                        <br></br>
                            <ul>
                                <li> I'm avidly passionate about food, politics, and books. </li>
                                <li> This past summer I was a Software Engineering Intern at Facebook, working on civic integrity, spefically with coordinated inauthentic behavior. </li>
                                <li> I love registering voters and working with students through TX Votes, UT's premier nonpartisan civic engagement organization. </li>
                                <li> I started an organization at UT called the <a href="https://txctp.org"> Texas Civic Tech Project</a>, for students in tech looking to impact civic society in a positive way. We work on projects, volunteer, and recently wrote a magazine! </li>
                                <li> Looking to eat? I help manage a <a href="https://bit.ly/FoodSheet"> food spreadsheet</a> reviewing Austin restaurants. </li>
                            </ul>
                        </p>
                        <ul className="icons">
                            <li><a href="https://twitter.com/theamazingabby" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="https://github.com/abbykrish" className="icon fa-github"><span className="label">Github</span></a></li>
                            <li><a href="abbykrishnan@utexas.edu" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                            <li><a href="https://www.goodreads.com/user/show/68621097-abby-krishnan" className="icon fa-book"><span className="label">Reading</span></a></li>
                            <li><a href={Resume} className="icon fa-file"><span className="label">Resume</span></a></li>
                        </ul>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex

// <section id="two">
//     <h2>Get In Touch</h2>
//     <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
//     <div className="row">
//         <div className="8u 12u$(small)">
//             <form method="post" action="#">
//                 <div className="row uniform 50%">
//                     <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
//                     <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
//                     <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
//                 </div>
//             </form>
//             <ul className="actions">
//                 <li><input type="submit" value="Send Message" /></li>
//             </ul>
//         </div>
//         <div className="4u 12u$(small)">
//             <ul className="labeled-icons">

//                 <li>
//                     <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
//                     000-000-0000
//                 </li>
//                 <li>
//                     <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
//                     <a href="#">hello@untitled.tld</a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </section>