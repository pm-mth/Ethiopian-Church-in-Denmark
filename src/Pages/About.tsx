import React from 'react';
import AboutHero from '../Components/AboutHero/AboutHero';
import OurStory from '../Components/OurStory/OurStory';
import MissionVision from '../Components/MissionVision/MissionVision';
import OurBeliefs from '../Components/OurBeliefs/OurBeliefs';
import LeadershipTeam from '../Components/LeadershipTeam/LeadershipTeam';

const About: React.FC = () => {
    return (
        <div className="about">
            <AboutHero />
            <OurStory />
            < MissionVision />
            < OurBeliefs />
            <LeadershipTeam />
            
        </div>
    );
};

export default About;
