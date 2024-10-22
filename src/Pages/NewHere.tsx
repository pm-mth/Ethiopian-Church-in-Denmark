import React from 'react';
import WelcomeMessage from '../Components/WelcomeMessage/WelcomeMessage';
import WhatToExpect from '../Components/WhatToExpect/WhatToExpect';
import FAQ from '../Components/FAQ/Faq';
import ContactInformation from '../Components/ContactInformation/ContactInformation';

const NewHere: React.FC = () => {
    return (
        <div className="new-here">
            <WelcomeMessage/>
            <WhatToExpect />
            <FAQ />
            <ContactInformation />
            <h2>New Here?</h2>
            <p>If you're new to our church, welcome! We’re glad to have you here. Feel free to explore and learn more about us.</p>
        </div>
    );
};

export default NewHere;
