import React, { useEffect } from 'react'
import './Assets/Images/CSS/glimpses.css'

const Glimpses = () => {
    const glimpse = () => {
        const carouselList = document.querySelector('.carousel__list');
        const carouselItems = document.querySelectorAll('.carousel__item');
        const elems = Array.from(carouselItems);

        carouselList.addEventListener('click', function (event) {
            var newActive = event.target;
            var isItem = newActive.closest('.carousel__item');

            if (!isItem || newActive.classList.contains('carousel__item_active')) {
                return;
            };

            update(newActive);
        });

        const update = function (newActive) {
            const newActivePos = newActive.dataset.pos;

            const current = elems.find((elem) => elem.dataset.pos === 0);
            const prev = elems.find((elem) => elem.dataset.pos === -1);
            const next = elems.find((elem) => elem.dataset.pos === 1);
            const first = elems.find((elem) => elem.dataset.pos === -2);
            const last = elems.find((elem) => elem.dataset.pos === 2);

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

    useEffect(()=>{
        glimpse()
    },[])
    return (
        <div><>
            <div className="animate" style={{ opacity: 1 }}>
                <svg
                    height={100}
                    stroke="BLUE"
                    strokeWidth={1}
                    className="text-line"
                    width="100%"
                    classname="gg heading1"
                >
                    <text
                        x="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        y="50%"
                        data-text="LEGACY"
                        classname="heading"
                    >
                        GLIMPSES
                    </text>
                </svg>
            </div>
            <div className="carousel">
                <ul className="carousel__list">
                    <li className="carousel__item" data-pos={-2}>
                        left 2
                    </li>
                    <li className="carousel__item" data-pos={-1}>
                        left 1
                    </li>
                    <li className="carousel__item" data-pos={0}>
                        <div id="counter">{/* counts */}</div>
                        <div id="parasn">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed natus
                            nisi a architecto expedita.
                        </div>
                    </li>
                    <li className="carousel__item" data-pos={1}>
                        right 1
                    </li>
                    <li className="carousel__item" data-pos={2}>
                        right 2
                    </li>
                </ul>
            </div>
        </>
        </div>
    )
}

export default Glimpses