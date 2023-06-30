import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import '../App.scss';
library.add(faAngleLeft)

export default function Image(props:any) {
    const imageProps = useParams();
    const passedValues = useLocation();
    // const iconFamily:any = faIcons;
    // const iconName:any = faAngleLeft;

    const passedValueState = passedValues;
    const miscellaneous = passedValues.state.misc;

    return (
        <>
            <main>
                <nav className="contextual-nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={`/gallery/${imageProps.folder}`}>{passedValueState.state.category}</Link></li>
                        <li>{passedValueState.state.desc}</li>
                    </ul>
                </nav>
                <section className="image">
                    <h2><Link className="image__back-button" to={`/gallery/${imageProps.folder}`}><FontAwesomeIcon icon={faAngleLeft} /></Link>  {passedValueState.state.desc}</h2>
                    <div className="image__container">
                        <picture>
                            <source media="max-width: 599.98px" srcSet={`/images/${imageProps.folder}/${imageProps.imgId}-m.jpg`} />
                            <source media="max-width: 949.98px" srcSet={`/images/${imageProps.folder}/${imageProps.imgId}-t.jpg`} />
                            <source media="min-width: 950px" srcSet={`/images/${imageProps.folder}/${imageProps.imgId}-d.jpg`} />
                            <div className="objFitFix" >
                                <img alt="" src={`/images/${imageProps.folder}/${imageProps.imgId}-d.jpg`} />
                            </div>
                        </picture>
                        <aside>
                            {
                                miscellaneous.map( (item: any, i:any) => {
                                    return(
                                        <p key={`p-${i}`}>{ item.body }</p>
                                    );
                                })
                            }
                        </aside>
                    </div>
                </section>
            </main>
        </>
    )
}