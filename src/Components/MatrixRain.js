import React, { useEffect } from 'react'
import './Assets/Images/CSS/MAtrixRain.css'


const MatrixRain = () => {

    const Rain = () => {
        var body = document.body,
            html = document.documentElement;
        var page_height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
        const canvas = document.getElementById("canvas1")
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = page_height;

        let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, 'red')
        gradient.addColorStop(0.2, 'yellow')
        gradient.addColorStop(0.4, 'green')
        gradient.addColorStop(0.6, 'magenta')
        gradient.addColorStop(0.8, 'cyan')
        gradient.addColorStop(1, 'pink')

        class Symbol {  //Create and draw indiviual rain effect
            constructor(x, y, fontSize, canvasHeight) {
                this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                this.x = x;
                this.y = y;
                this.fontSize = fontSize;
                this.text = '';
                this.canvasHeight = canvasHeight;
            }
            draw(context) {
                this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
                context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
                if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.99) {
                    this.y = 0;
                }
                else {
                    this.y += 1;
                }
            }
        }

        class Effect {  //Main Wrapper For The Entire Rain Effect
            constructor(canvasWidth, canvasHeight) {
                this.canvasWidth = canvasWidth;
                this.canvasHeight = canvasHeight;
                this.fontSize = 25;
                this.columns = this.canvasWidth / this.fontSize;
                this.symbols = [];
                this.#initialize();
                console.log(this.symbols)
            }
            #initialize() {
                for (let i = 0; i < this.columns; i++) {
                    this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
                }
            }
            resize(width, height) {
                this.canvasWidth = width;
                this.canvasHeight = height
                this.columns = this.canvasWidth / this.fontSize;
                this.symbols = [];
                this.#initialize();
            }
        }

        const effect = new Effect(canvas.width, canvas.height);
        let lastTime = 0;
        const fps = 15;
        const nextFrame = 1000 / fps;
        let timer = 0;

        function animate(timeStamp) {
            const deltaTime = timeStamp - lastTime;
            lastTime = timeStamp;
            if (timer > nextFrame) {
                ctx.fillStyle = 'rgba(0,0,0,0.1)';
                ctx.textAlign = 'center';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#0aff0a';
                ctx.font = effect.fontSize + 'px monospace';
                effect.symbols.forEach(symbol => symbol.draw(ctx));
                timer = 0;
            }
            else {
                timer += deltaTime;
            }
            requestAnimationFrame(animate);
        }
        animate(0);

        window.addEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            effect.resize(canvas.width, canvas.height);
        })
    }

    useEffect(() => {
        Rain()

        // eslint-disable-next-line
    }, [])



    return (
        <div>
            <canvas id="canvas1"></canvas>
        </div>
    )
}

export default MatrixRain
