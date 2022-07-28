import React, { useEffect } from 'react'
// import Video from './Assets/Videos/startv.mp4'
import './Assets/Images/CSS/Home.css'
import MatrixRain from './MatrixRain'
import Sponser from './Sponser'
import Glimpses from './Glimpses'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Home = () => {
    const glimpsee = () => {
        const carouselList = document.querySelector('.carousel__list');
        const carouselItems = document.querySelectorAll('.carousel__item');
        const elems = Array.from(carouselItems);
        carouselList.addEventListener('click', function (event) {
            console.log("You clicked")
            var newActive = event.target;
            var isItem = newActive.closest('.carousel__item');

            if (!isItem || newActive.classList.contains('carousel__item_active')) {
                return;
            };

            update(newActive);
        });

        const update = async function (newActive) {
            const newActivePos = newActive.dataset.pos;
            const current = elems.find(elem => elem.dataset.pos === "0");
            const prev = elems.find(elem => elem.dataset.pos === "-1");
            const next = elems.find(elem => elem.dataset.pos === "1");
            const first = elems.find(elem => elem.dataset.pos === "-2");
            const last = elems.find(elem => elem.dataset.pos === "2");
            current.classList.remove('carousel__item_active');

            [current, prev, next, first, last].forEach(item => {
                var itemPos = item.dataset.pos;

                item.dataset.pos = getPos(itemPos, newActivePos)
            });
        };

        const getPos = function (current, active) {
            const diff = current - active;

            if (Math.abs(current - active) > 2) {
                return -current
            }

            return diff;
        }
    }

    const count_iteration = () => {
        let counts = setInterval(updated);
        let upto = 0;
        function updated() {
            var count = document.getElementById("counter");
            count.innerHTML = (upto = upto + 12) + " +";
            if (upto >= 6000) {
                clearInterval(counts);
            }
        }
    }

    useEffect(() => {
        Aos.init({ duration: 2000 });
        glimpsee()
        count_iteration()
    }, [])
    // const [reveal, setReveal] = useState(false)
    // // const [screen, setScreen] = useState({ width: 0, height: 0 })

    // const sleep = (ms) => {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }

    // useEffect(() => {
    //     setReveal(true)
    //     // setScreen({ width: window.innerWidth, height: window.innerHeight })
    //     document.getElementById('HideOnload').style.display = 'none'

    //     setReveal(false);
    //     sleep(8500).then(() => {
    //         document.getElementById('HideOnload').style.display = 'flex';
    //         // document.getElementById('myAnimate').style.fill = 'black';
    //     })

    // }, [])

    // const loader = () => {
    //     setReveal(true)
    // }



    return (
        <section id='Home'>
            {/* <button onClick={loader} className='btn bg-white'>play</button> */}
            <div className="animationFrame">
                <div className='whole-hero'>
                    <MatrixRain />
                    <svg id="myAnimate" className='heartbeat' version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet">
                        <g id="svgG" transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M1932 2328 c-83 -84 -204 -207 -269 -273 -68 -69 -127 -121 -140
        -123 -13 -2 -23 0 -23 5 0 5 -19 29 -43 53 -23 25 -71 79 -106 120 -76 89
        -152 167 -125 128 11 -14 82 -99 159 -187 l140 -160 44 47 c25 26 119 124 210
        217 91 94 199 205 240 248 42 42 73 77 70 77 -4 0 -74 -69 -157 -152z" className="svg-elem-1"></path>
                            <path d="M1947 2273 c-80 -93 -214 -247 -298 -343 -84 -96 -156 -175 -159
        -175 -4 0 -27 23 -51 51 -24 28 -89 102 -145 165 -55 63 -109 124 -120 137
        -18 22 -21 22 -280 22 l-262 0 -42 56 c-23 30 -44 53 -47 50 -3 -2 7 -20 21
        -39 14 -19 26 -38 26 -43 0 -5 13 -17 29 -27 25 -15 61 -17 284 -17 l255 0 38
        -50 c21 -27 42 -50 46 -50 4 0 8 -5 8 -10 0 -6 15 -25 33 -43 48 -50 107 -117
        107 -124 0 -3 21 -25 46 -49 44 -43 69 -54 76 -34 2 5 26 33 55 63 28 29 71
        78 95 109 24 31 76 93 117 139 41 46 93 107 117 134 23 28 72 86 110 130 37
        44 74 88 82 98 8 9 13 17 10 17 -3 0 -71 -75 -151 -167z" className="svg-elem-2"></path>
                            <path d="M553 2258 c-7 -12 622 -8 639 4 7 5 -129 8 -310 6 -178 -1 -325 -6
        -329 -10z" className="svg-elem-3"></path>
                            <path d="M2358 2263 c18 -2 45 -2 60 0 15 2 0 4 -33 4 -33 0 -45 -2 -27 -4z" className="svg-elem-4"></path>
                            <path d="M2272 2235 c-12 -14 -22 -30 -22 -35 0 -6 -4 -10 -8 -10 -5 0 -23
        -19 -40 -42 -17 -24 -58 -72 -91 -108 -33 -36 -61 -69 -61 -74 0 -5 -15 -25
        -32 -46 -18 -20 -49 -56 -69 -81 -130 -158 -163 -197 -188 -224 -15 -16 -40
        -49 -55 -72 -30 -45 -28 -60 13 -97 12 -11 21 -24 21 -30 0 -6 10 -20 23 -31
        23 -21 54 -57 97 -115 14 -19 36 -46 50 -60 14 -14 36 -41 50 -60 14 -18 31
        -39 38 -46 6 -7 12 -15 12 -19 0 -6 28 -39 69 -81 21 -21 33 -24 92 -24 38 0
        71 5 75 11 4 8 -16 10 -67 8 l-73 -4 -209 254 c-186 226 -207 255 -194 269 18
        22 406 496 472 577 28 34 68 83 89 108 40 49 47 77 8 32z" className="svg-elem-5"></path>
                            <path d="M2375 2144 c-81 -100 -239 -291 -401 -487 -63 -75 -114 -139 -114
        -142 0 -3 68 -92 152 -198 228 -289 251 -317 256 -312 6 5 -24 53 -47 76 -19
        20 -32 36 -91 114 -25 33 -47 62 -50 65 -10 9 -166 204 -183 229 -15 23 -15
        26 1 53 9 15 19 28 23 28 4 0 17 15 28 33 11 17 32 46 47 62 14 17 38 46 53
        65 14 19 29 37 32 40 3 3 30 34 60 70 29 36 55 67 59 70 3 3 18 23 35 45 25
        34 106 132 165 202 22 26 54 73 49 73 -2 0 -35 -39 -74 -86z" className="svg-elem-6"></path>
                            <path d="M754 2009 c-5 -8 13 -10 65 -6 l71 5 209 -255 209 -255 -100 -122
        c-55 -66 -195 -237 -311 -378 l-211 -258 -78 0 -78 0 297 363 c163 199 300
        367 305 374 10 13 -389 520 -400 508 -4 -4 -1 -10 6 -12 6 -3 12 -11 12 -18 0
        -7 13 -27 29 -44 16 -17 26 -31 23 -31 -4 0 4 -7 16 -16 12 -8 22 -20 22 -25
        0 -6 16 -26 35 -46 19 -19 33 -38 32 -42 -2 -7 27 -44 62 -78 13 -13 21 -23
        18 -23 -3 0 12 -19 33 -41 22 -23 37 -45 35 -50 -3 -4 5 -15 17 -23 33 -24 30
        -81 -6 -112 -15 -13 -25 -24 -22 -24 3 0 -15 -21 -39 -47 -24 -25 -41 -51 -38
        -56 3 -6 1 -7 -5 -3 -6 3 -15 -1 -21 -11 -5 -10 -32 -43 -60 -73 -28 -30 -51
        -57 -51 -60 0 -4 -13 -22 -30 -40 -16 -18 -30 -40 -30 -47 0 -7 -3 -12 -7 -10
        -5 1 -9 -1 -11 -5 -2 -4 -19 -23 -38 -42 -20 -20 -33 -40 -29 -46 3 -5 0 -10
        -7 -10 -15 0 -68 -63 -68 -81 0 -7 -3 -9 -6 -6 -9 9 -71 -72 -77 -100 -6 -30
        12 -43 65 -47 74 -4 114 12 163 66 25 27 42 55 39 60 -4 7 -2 8 4 4 7 -4 17 3
        24 18 6 14 14 26 18 26 11 0 115 141 112 152 -1 5 2 7 6 4 5 -3 17 3 27 14 10
        11 14 20 10 20 -4 0 2 8 13 19 12 10 22 24 22 31 0 7 3 11 6 7 7 -7 54 46 54
        61 0 6 8 16 18 21 9 6 13 11 7 11 -5 0 1 7 13 16 12 8 22 21 22 27 0 7 9 19
        20 27 11 8 20 20 20 27 0 7 5 12 12 11 7 -2 12 2 13 7 0 10 12 26 47 65 9 10
        14 21 10 24 -3 3 -1 6 5 6 6 0 18 12 28 26 20 31 9 68 -33 107 -32 29 -64 67
        -56 67 3 0 -6 11 -20 24 -15 13 -26 28 -26 35 0 6 -4 11 -8 11 -5 0 -15 11
        -22 25 -7 14 -15 23 -18 21 -2 -3 -25 23 -51 57 -25 34 -55 72 -66 83 -11 12
        -40 45 -64 73 l-44 51 -68 0 c-39 0 -71 -5 -75 -11z" className="svg-elem-7"></path>
                            <path d="M1087 2013 l72 -4 147 -177 c81 -97 176 -212 212 -255 35 -43 69 -74
        74 -70 7 3 8 1 4 -6 -5 -7 69 -103 188 -246 108 -129 199 -235 202 -235 7 0
        -42 69 -60 85 -27 24 -116 141 -116 153 0 7 -4 11 -9 8 -5 -3 -12 5 -15 19 -4
        14 -13 25 -22 25 -8 0 -12 5 -9 10 3 6 1 10 -5 10 -6 0 -8 5 -4 12 4 6 3 8 -3
        5 -6 -4 -13 2 -16 13 -3 11 -12 20 -21 20 -9 0 -16 7 -16 15 0 8 -9 20 -20 27
        -11 7 -20 16 -20 20 0 8 -23 39 -55 72 -11 12 -19 24 -17 29 1 4 -5 7 -14 7
        -8 0 -12 5 -9 10 3 6 -1 13 -9 16 -9 3 -36 32 -60 65 -24 32 -46 55 -50 52 -3
        -4 -6 -1 -6 5 0 13 -13 30 -72 96 -21 22 -38 45 -38 49 0 4 -17 25 -37 46 -21
        21 -55 59 -76 84 l-39 47 -76 -2 -77 -2 72 -3z" className="svg-elem-8"></path>
                            <path d="M1015 1959 c11 -13 26 -30 33 -37 7 -8 25 -30 40 -50 15 -20 46 -57
        69 -82 24 -25 43 -48 43 -51 0 -6 11 -19 63 -79 45 -52 153 -179 187 -221 19
        -23 54 -63 77 -88 24 -25 43 -50 43 -54 0 -5 22 -32 50 -59 27 -28 47 -55 44
        -60 -3 -4 2 -8 10 -8 9 0 16 -7 16 -15 0 -8 4 -15 9 -15 4 0 21 -20 37 -45 15
        -25 32 -45 37 -45 4 0 20 -13 34 -30 24 -29 28 -30 96 -28 l72 2 -67 3 -68 4
        -267 317 c-455 539 -556 657 -567 661 -6 2 -2 -7 9 -20z" className="svg-elem-9"></path>
                            <path d="M1412 1202 c-111 -118 -162 -177 -162 -189 0 -7 -5 -12 -12 -10 -6 1
        -18 -10 -25 -25 -8 -16 -18 -28 -23 -28 -5 0 -12 -9 -15 -20 -4 -11 -10 -18
        -15 -15 -4 3 -13 -2 -20 -10 -7 -8 -9 -15 -5 -15 4 0 -4 -9 -19 -21 -14 -11
        -26 -26 -26 -34 0 -7 -7 -16 -16 -19 -8 -3 -12 -10 -9 -16 3 -5 0 -10 -8 -10
        -16 0 -127 -131 -127 -149 0 -6 -6 -11 -14 -11 -15 0 -52 -49 -48 -63 1 -5 -2
        -6 -7 -3 -11 7 -43 -33 -36 -44 3 -4 -4 -10 -15 -13 -11 -3 -26 -19 -33 -36
        -7 -17 -16 -29 -20 -26 -4 3 -5 2 -2 -2 3 -4 -9 -22 -27 -40 -17 -18 -28 -33
        -24 -33 4 0 27 21 49 47 23 26 63 70 88 98 43 47 215 245 518 597 118 137 144
        161 153 139 2 -5 73 -89 159 -188 l156 -178 261 3 260 3 37 -51 c20 -27 41
        -50 47 -50 10 0 -1 19 -32 51 -8 9 -23 26 -32 38 -17 20 -26 21 -235 22 -285
        1 -302 2 -300 14 1 6 -4 9 -10 7 -7 -1 -13 3 -13 9 0 7 -13 24 -29 40 -16 15
        -27 30 -23 33 3 3 -3 6 -13 6 -10 0 -16 3 -12 6 3 3 -6 17 -21 31 -15 14 -26
        30 -24 35 1 5 -2 7 -8 3 -5 -3 -10 -1 -10 5 0 6 -11 22 -25 36 -14 14 -25 29
        -25 34 0 6 -7 10 -17 10 -9 0 -14 2 -11 5 9 9 -80 95 -98 94 -11 0 -47 -30
        -82 -67z" className="svg-elem-10"></path>
                            <path d="M1144 798 c-402 -419 -428 -447 -422 -453 3 -3 21 13 41 35 20 23 39
        40 44 39 4 -1 14 9 20 22 7 13 13 20 13 15 0 -5 9 -1 20 9 11 10 17 22 13 28
        -3 5 -2 7 4 4 5 -4 19 4 31 18 14 16 17 25 9 29 -8 3 -8 5 2 5 18 1 231 212
        231 229 0 7 4 11 9 8 11 -7 43 29 34 38 -5 4 -1 6 7 4 8 -2 14 3 13 9 -2 7 2
        12 9 10 6 -1 16 7 22 18 6 11 55 64 109 117 l97 97 33 -19 c17 -11 28 -20 22
        -20 -5 0 3 -11 18 -24 16 -14 29 -28 30 -33 1 -4 5 -7 10 -5 4 1 7 -3 7 -10 0
        -6 24 -35 53 -63 28 -28 74 -77 101 -109 l49 -58 291 3 c160 2 309 6 331 10
        22 4 -108 7 -290 8 l-330 2 -150 171 c-82 93 -151 174 -153 179 -2 5 -7 9 -11
        9 -4 0 -146 -145 -317 -322z" className="svg-elem-11"></path></g>
                    </svg>
                    <Sponser />
                    <Glimpses />
                </div>
            </div>
            {/* {reveal &&
                <div id="videoCont">
                    <video className='video' autoPlay='autoPlay' muted>
                        <source src={require('./Assets/Videos/Produce_11.mp4')} type="video/mp4" />
                        Your browser does not support the video tag.
                        <source src={Video} type="video/ogg" />Your browser does not support the video tag.
                    </video>
                </div>
            } */}
            {/* <Sponser/> */}
        </section>
    )
}

export default Home