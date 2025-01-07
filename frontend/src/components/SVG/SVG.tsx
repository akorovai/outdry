import {FC} from "react";

interface LogoProps {
    color: string;
}

const Logo = ({color}: LogoProps) => {
    return (<svg width="45" height="35" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="la:cloud-rain" clipPath="url(#clip0_13641_6100)">
            <path id="Vector"
                  d="M22.5 0.624991C17.962 0.624991 14.0245 3.8003 12.9642 8.13999C11.1994 8.82925 9.7778 10.1871 9.00844 11.9186C4.09219 11.5558 0 15.468 0 20.3125C0 24.9658 3.78422 28.75 8.4375 28.75H11.25L12.6563 25.9375H8.4375C5.33391 25.9375 2.8125 23.4161 2.8125 20.3125C2.81268 19.4692 3.00233 18.6367 3.36744 17.8766C3.73254 17.1164 4.26377 16.448 4.92188 15.9207C5.57999 15.3934 6.34816 15.0207 7.16964 14.8301C7.99112 14.6395 8.84492 14.636 9.66797 14.8197L11.0742 15.1276L11.3386 13.7636C11.6845 12.2097 12.9473 10.9736 14.5027 10.5995L15.4252 10.3816L15.5573 9.45765C16.0608 6.03624 19.0448 3.43749 22.5 3.43749C23.8034 3.43455 25.0818 3.79483 26.1919 4.47791C27.3019 5.16098 28.1997 6.13984 28.7845 7.30468L29.3119 8.40296L30.4973 8.0078C31.1583 7.77718 31.7559 7.65624 32.3438 7.65624C35.4473 7.65624 37.9688 10.1776 37.9688 13.2812C37.9688 13.3375 37.9744 13.4078 37.9688 13.457C37.9575 13.5498 37.9364 13.6216 37.9252 13.7214L37.8366 14.7311L38.7605 15.1262C39.9555 15.6333 40.9385 16.5378 41.5431 17.6865C42.1477 18.8353 42.3367 20.1577 42.0781 21.4298C41.8194 22.7019 41.1291 23.8455 40.124 24.667C39.1188 25.4885 37.8606 25.9373 36.5625 25.9375H33.75L35.1563 28.75H36.5625C41.2158 28.75 45 24.9658 45 20.3125C45.0014 18.8327 44.612 17.3787 43.8713 16.0976C43.1305 14.8166 42.0645 13.7538 40.7813 13.0169C40.6336 8.49296 36.9028 4.84374 32.3438 4.84374C31.7953 4.84374 31.2286 4.89999 30.6731 5.01952C29.7826 3.66622 28.5691 2.55589 27.1423 1.7887C25.7154 1.0215 24.12 0.621576 22.5 0.624991ZM25.3125 14.6875C25.3125 14.6875 22.5 18.7586 22.5 20.3125C22.5 21.8664 23.7586 23.125 25.3125 23.125C26.8664 23.125 28.125 21.8664 28.125 20.3125C28.125 18.7586 25.3125 14.6875 25.3125 14.6875ZM18.2813 21.7187C18.2813 21.7187 15.4688 25.7898 15.4688 27.3437C15.4688 28.8976 16.7273 30.1562 18.2813 30.1562C19.8352 30.1562 21.0938 28.8976 21.0938 27.3437C21.0938 25.7898 18.2813 21.7187 18.2813 21.7187ZM29.5313 25.9375C29.5313 25.9375 26.7188 30.0086 26.7188 31.5625C26.7188 33.1164 27.9773 34.375 29.5313 34.375C31.0852 34.375 32.3438 33.1164 32.3438 31.5625C32.3438 30.0086 29.5313 25.9375 29.5313 25.9375Z"
                  fill={color}/>
        </g>
        <defs>
            <clipPath id="clip0_13641_6100">
                <rect width="45" height="35" fill="white"/>
            </clipPath>
        </defs>
    </svg>);
};

const Vector = ({color}: LogoProps) => {

    return (<svg xmlns="http://www.w3.org/2000/svg" width="241" height="38" viewBox="0 0 241 38" fill="none">
        <path
            d="M4 25.2834C4 25.2834 112.917 40.8536 135.899 31.04C153.024 18.5378 77.3707 8.70843 92.6456 5.51952C118.197 0.185263 217.507 6.25218 236.854 18.107"
            stroke={color} strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round"/>
    </svg>);
};

const Bucket = ({color}: LogoProps) => {

    return (<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path
            d="M1.5 8.26675L7 1.66675H29L34.5 8.26675M1.5 8.26675V31.3667C1.5 32.242 1.88631 33.0813 2.57394 33.7002C3.26158 34.3191 4.19421 34.6667 5.16667 34.6667H30.8333C31.8058 34.6667 32.7384 34.3191 33.4261 33.7002C34.1137 33.0813 34.5 32.242 34.5 31.3667V8.26675M1.5 8.26675H34.5M25.3333 14.8667C25.3333 16.6172 24.5607 18.2959 23.1855 19.5337C21.8102 20.7714 19.9449 21.4667 18 21.4667C16.0551 21.4667 14.1898 20.7714 12.8146 19.5337C11.4393 18.2959 10.6667 16.6172 10.6667 14.8667"
            stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};

const Like = ({color}: LogoProps) => {

    return (<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path
            d="M38.2067 8.4516C37.2703 7.51477 36.1585 6.77161 34.9349 6.26458C33.7112 5.75755 32.3996 5.49658 31.0751 5.49658C29.7505 5.49658 28.4389 5.75755 27.2152 6.26458C25.9916 6.77161 24.8798 7.51477 23.9434 8.4516L22.0001 10.3949L20.0567 8.4516C18.1653 6.56016 15.5999 5.49756 12.9251 5.49756C10.2502 5.49756 7.68482 6.56016 5.79339 8.4516C3.90195 10.343 2.83936 12.9084 2.83936 15.5833C2.83936 18.2582 3.90195 20.8235 5.79339 22.7149L7.73672 24.6583L22.0001 38.9216L36.2634 24.6583L38.2067 22.7149C39.1435 21.7785 39.8867 20.6668 40.3937 19.4431C40.9008 18.2194 41.1617 16.9078 41.1617 15.5833C41.1617 14.2587 40.9008 12.9471 40.3937 11.7234C39.8867 10.4998 39.1435 9.38798 38.2067 8.4516V8.4516Z"
            stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};

const User = ({color}: LogoProps) => {

    return (<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M12.5264 37.4431L8.5569 33.4736C6.75967 31.6764 5.75 29.2388 5.75 26.6971V19.3048C5.75 16.7632 6.75967 14.3256 8.5569 12.5284L12.5283 8.55692C14.3256 6.75968 16.7631 5.75 19.3048 5.75H26.6952C29.2369 5.75 31.6744 6.75967 33.4717 8.5569L37.4431 12.5283C39.2403 14.3256 40.25 16.7632 40.25 19.3048V26.6974C40.25 29.2386 39.2407 31.6757 37.4442 33.4728L33.4762 37.4421C31.6789 39.2399 29.2409 40.25 26.6987 40.25H19.3029C16.7612 40.25 14.3237 39.2403 12.5264 37.4431V37.4431Z"
              stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path
            d="M14.375 30.6667C15.1357 28.9214 16.8582 27.7926 18.7621 27.7917H27.2379C29.1418 27.7926 30.8643 28.9214 31.625 30.6667"
            stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="23" cy="18.2084" r="4.79167" stroke={color} strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"/>
    </svg>);
};
const Search = ({color}: LogoProps) => {

    return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
            d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};
const Cross = ({color}: LogoProps) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M19 19L1 1M19 1L1 19" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>)
}

const Arrow = ({color}: LogoProps) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12.5 15L7.5 10L12.5 5" stroke={color} strokeWidth="1.67" strokeLinecap="round"
              strokeLinejoin="round"/>
    </svg>)
}

const Settings: React.FC<LogoProps> = ({color}) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
            d="M33.3389 30.915H23.3347"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M18.3327 30.915H6.66113"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M33.3389 20.0002H20"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M14.9979 20.0002H6.66113"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M33.3389 9.08539H26.6694"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M21.6674 9.08539H6.66113"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M23.3347 35.0066V26.8228"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M14.9977 24.0921V15.9082"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M26.6694 13.1773V4.99341"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>);
};

const Arrows: FC<LogoProps> = ({color}) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
        <path d="M22.916 18.3333L16.041 11.4583L9.16602 18.3333" stroke={color} strokeWidth="3" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M16.0404 43.5416V11.4583" stroke={color} strokeWidth="3" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M32.082 36.6666L38.957 43.5416L45.832 36.6666" stroke={color} strokeWidth="3" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M38.9583 11.4583V43.5416" stroke={color} strokeWidth="3" strokeLinecap="round"
              strokeLinejoin="round"/>
    </svg>)
}

const Trash: FC<LogoProps> = ({color}) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
        <path
            d="M4.5 8.00008H7.16667M7.16667 8.00008H28.5M7.16667 8.00008V26.6667C7.16667 27.374 7.44762 28.0523 7.94772 28.5524C8.44781 29.0525 9.12609 29.3334 9.83333 29.3334H23.1667C23.8739 29.3334 24.5522 29.0525 25.0523 28.5524C25.5524 28.0523 25.8333 27.374 25.8333 26.6667V8.00008H7.16667ZM11.1667 8.00008V5.33341C11.1667 4.62617 11.4476 3.94789 11.9477 3.4478C12.4478 2.9477 13.1261 2.66675 13.8333 2.66675H19.1667C19.8739 2.66675 20.5522 2.9477 21.0523 3.4478C21.5524 3.94789 21.8333 4.62617 21.8333 5.33341V8.00008M13.8333 14.6667V22.6667M19.1667 14.6667V22.6667"
            stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>)

}

const Minus: FC<LogoProps> = ({color}) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3.75 9H14.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>)
}
const Plus: FC<LogoProps> = ({color}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10.0003 4.16675V15.8334M4.16699 10.0001H15.8337" stroke={color} strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const Star: FC<LogoProps> = ({color}) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
        <path
            d="M9.99935 2.16666L12.5743 7.38333L18.3327 8.225L14.166 12.2833L15.1493 18.0167L9.99935 15.3083L4.84935 18.0167L5.83268 12.2833L1.66602 8.225L7.42435 7.38333L9.99935 2.16666Z"
            stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>)
}
const SVG = {
    Logo, Vector, Bucket, Like, User, Search, Cross, Arrow, Settings, Arrows, Trash, Minus, Plus, Star
};

export default SVG;