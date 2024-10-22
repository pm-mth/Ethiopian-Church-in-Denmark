import React from 'react';
import ServiceHero from '../Components/ServiceHero/ServiceHero';
import SundayWorship from '../Components/SundayWorship/SundayWorship';
import BibleStudy from '../Components/BibleStudy/BibleStudy';
import Prayer from '../Components/Prayer/Prayer';


const Services: React.FC = () => {
    return (
        <div className="services">
            <ServiceHero />
            <SundayWorship />
            <BibleStudy />
            <Prayer />
        </div>
    );
};

export default Services;
