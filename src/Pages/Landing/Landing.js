import React from "react";
import landingIMG from '../../img/Amigos - Planning 1.png';
import './Landing.scss';

const Landing = () => {
    return (
        <div className={'landing'}>
            <div className={'landing--content'}>
                <div className={'landing--content__phrase'}>
                    <h1 className={'landing--content__phrase--1 '}>
                        Organize
                    </h1>
                    <h2 className={'landing--content__phrase--2 '}>
                        your life
                    </h2>
                </div>

                <p className={'landing--content__text'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ex ipsa soluta voluptates. At consequatur dignissimos, dolorem eius et eveniet, ipsa nostrum optio qui quo recusandae rerum sed sit, voluptate!
                </p>

                <button className={'landing--content__button'}>
                    Start organizing
                </button>
            </div>
            <img src={landingIMG} className={'landing--img'} alt={'Girl planning her day'}/>

        </div>
    )
}

export default Landing;