import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faDeviantart, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import footerLinks from '../json/footerLinks.json';

library.add(faLinkedinIn, faDeviantart, faInstagram, faTwitter, faGithub, faEnvelope)

/* Let's create the footer template */
const Footer = () => {
    return(
        <>
            <footer>
                <nav className="footer__social">
                    <ul>
                        {
                            footerLinks.map((value, index) => {
                                const iconFamily:any = value.iconFamily; 
                                const iconName:any = value.iconName;
                                return <li key={`fkey-${index}`}><a href={value.href}><FontAwesomeIcon icon={[iconFamily, iconName]} /></a></li>
                            })
                        }
                    </ul>
                </nav>
                <div>
                    <p>Copyright &copy; {`${new Date().getFullYear()}`}</p>
                    <p>But here is an artist. He desires to paint you the dreamiest, shadiest, quietest, most enchanting bit of romantic landscape in all the valley of the Saco. What is the chief element he employs? There stand his trees, each with a hollow trunk, as if a hermit and a crucifix were within; and here sleeps his meadow, and there sleep his cattle; and up from yonder cottage goes a sleepy smoke.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;