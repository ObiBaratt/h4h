import React from 'react';

import "./about.css";
import header from './header-image.png';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                 <div className='image'>
                    <h1>...</h1>
                    <p> Taglines </p>
                    <img src={header} alt="Happy elders"/>
                </div>

                <div className="story">
                    <h2>Our story</h2>
                    <div className='para'>
                        <p>We all love and miss our grandparents so much, whether they are with us or not-that's what our team members all have in common, despite our background or where we are in our life.
                        We all miss their amazing food and drink, the story they would tell us about "back then", and all the memory we share with them. However, as much as we want to be around them, careers and education have prompted us to move to 
                        away. The same goes with our parents, and our parents' siblings. We all think to ourself: "Dealing with the aging far from their loved ones, they must feel lonely sometimes". 
                        </p>

                        <p>And indeed, a social isolation among seniors is an emerging issue in the post-COVID world. A report from the National Academies of Sciences, Engineering, and Medicine (NASEM) points out that more than one-third of adults aged 45 and older feel lonely, and nearly one-fourth of adults aged 65 and older are considered to be socially isolated.
                        This phenomenon carries in itself many risk factors, such as higher rates of depression, anxiety, sucide, increased risk of death from heart attacks,...</p>

                        <p>That's why we decided to create...</p>
                    </div>
                    
                </div>
                <br/>
                <div className='mission'>
                    <h2>Our mission</h2>
                        <div className='split'>
                            <p>Our team is committed to create a welcome environment for the seniors to make new connection while engaging in meaningful events. We promise to uphold these three core values within any events we help them connect with:</p>
                            <li>
                                <ul>Respect: we understand our users have more life knowledge than most of us, therefore we value and respect their perspective</ul>
                                <ul>Empathy: we empathize with their struggle and loneliness, therefore we hope to improve their life through many engaging activities</ul>
                                <ul>Compassion: we are determined to bring a welcome energy to every events we help our users connect with through our event verification</ul>
                            </li>
                        </div>
                </div>
                    

                <br/>
                <div className="now">
                    <h2>So what's now?</h2>

                    <p>This website serves as our mockup and semi-functional product. 
                        We plan to have 3 main features: 
                        <li>
                            <ul>a "hosting" feature where our users or any volunteers can make a post promoting an event they plan to hold</ul> 
                            <ul>a chatbot that helps refine their search for the events that they might personally be interested in</ul>
                            <ul>a support channel that helps our users with answer any question they have about the website.</ul>
                        </li>
                    We approximate the website would take us an addition of 6 months to set up the infrastructure and complete the backend of our features
                    </p>
                </div>

                <div className='future'>
                    <h2>What's from here?</h2>
                    <p>In the meantime, our business members will reach out to their local organizations for potential partnership, such as churches or clinics or students clubs. 
                    Moreover, we will recruit more volunteers to join our team to help with any necessary processes</p>


                    <p>In the far future, after the launch of our website, we will gauge the interests of our users and implement more features along the way. Some of the features we are thinking of are chatroom and private messages, informal caregivers and guardians service,...</p>
                </div>
                <div className="team">
                <h2>The team</h2>
                    <p>Our team came together through Hacks for Humanities hackathon. We are made up of five members, with two are in Canada while the rest are in USA. We also come from different backgrounds, therefore we bring many skillsets to the table.
                        The website is our great pride and we hope it will inspire you in your daily life
                    </p>
                </div>
                    
                

            </div>
           
        );
    }
}

export default About;