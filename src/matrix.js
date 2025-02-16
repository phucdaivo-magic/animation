export default class Matrix {

    constructor({ $element }) {
        this.initState($element);
    }

    initState() {

    }
}

window.all = {}
const $frame = document.querySelector('.matrix-editor');
const drawPoint = (x, y, img) => {
    const imgs = document.createElement('img');
    imgs.src = `https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/fahrer_${img}.png`
    imgs.style.width = '60px';
    const div = document.createElement("div");
    div.className = "point";
    div.style.left = x + "px";
    div.style.top = y + "px";
    div.setAttribute("data-y", y);
    $frame.appendChild(div);
    // div.appendChild(imgs)
};
const { width, height } = document.querySelector('.matrix-editor').getBoundingClientRect()
class Vertor {
    constructor() {
        this.A = null;
        this.B = null;
        this.data = {};
    }

    setPoint(point) {
        if (this.A) {
            this.B = point;
            this.setPosition();
        } else {
            this.A = point;
        }
    }

    setPosition() {
        for (let y = this.A.y; y <= this.B.y; y += 1) {
            this.data[y] = this.getX(y);
            const angle = this.calculateAngleWithOY(this.A.x, this.A.y, this.B.x, this.B.y);
            drawPoint(this.data[y], y, this.getImage(-angle));

            window.all[y] = {
                w: width,
                x: this.data[y],
                y,
                a: -angle,
                img: this.getImage(-angle)
            }
        }
    }

    getImage(angle) {
        let images = {
            '-15_1': 3,
            '-60_-15': 2,
            '-90_-60': 1,
            '-120_-90': 5,
            '-165_-120': 4,
            '-180_-165': 3,
        }

        for (const key in images) {
            const [start, end] = key.split('_');
            if (Number(start) <= angle && angle < Number(end)) {
                return images[key];
            }
        }
    }

    getX(y) {
        const tmp = (this.B.x - this.A.x) / (this.B.y - this.A.y);
        return tmp * y + (this.A.x - tmp * this.A.y);
    }

    calculateAngleWithOY(x1, y1, x2, y2) {
        if (x1 === x2) {
            return 0;
        }

        let slope = (y2 - y1) / (x2 - x1);
        let theta = Math.atan(slope) * (180 / Math.PI);
        let alpha = 90 - theta;

        return Math.abs(alpha);
    }
}
let pointFirst = null;
let pointLast = null;
let listVector = [];
let listPoint = [];

const initData = () => {
    const _all = JSON.parse(localStorage.getItem('SKILING')) || [];
    const a = JSON.parse(`[{"pointFirst":{"x":662,"y":785},"pointLast":{"x":597,"y":896},"width":1600.833251953125},{"pointFirst":{"x":597,"y":896},"pointLast":{"x":614,"y":963},"width":1600.833251953125},{"pointFirst":{"x":614,"y":963},"pointLast":{"x":718,"y":1048},"width":1600.833251953125},{"pointFirst":{"x":718,"y":1048},"pointLast":{"x":817,"y":1086},"width":1600.833251953125},{"pointFirst":{"x":817,"y":1086},"pointLast":{"x":1225,"y":1231},"width":1600.833251953125},{"pointFirst":{"x":1225,"y":1231},"pointLast":{"x":1336,"y":1297},"width":1600.833251953125},{"pointFirst":{"x":1336,"y":1297},"pointLast":{"x":1362,"y":1396},"width":1600.833251953125},{"pointFirst":{"x":1362,"y":1396},"pointLast":{"x":1303,"y":1492},"width":1600.833251953125},{"pointFirst":{"x":1303,"y":1492},"pointLast":{"x":828,"y":1685},"width":1600.833251953125},{"pointFirst":{"x":828,"y":1685},"pointLast":{"x":709,"y":1773},"width":1600.833251953125},{"pointFirst":{"x":709,"y":1773},"pointLast":{"x":743,"y":1916},"width":1600.833251953125},{"pointFirst":{"x":743,"y":1916},"pointLast":{"x":918,"y":1995},"width":1600.833251953125},{"pointFirst":{"x":918,"y":1995},"pointLast":{"x":1365,"y":2186},"width":1600.833251953125},{"pointFirst":{"x":1365,"y":2186},"pointLast":{"x":1417,"y":2320},"width":1600.833251953125},{"pointFirst":{"x":1417,"y":2320},"pointLast":{"x":1423,"y":2496},"width":1600.833251953125},{"pointFirst":{"x":1423,"y":2496},"pointLast":{"x":1290,"y":2648},"width":1600.833251953125},{"pointFirst":{"x":1290,"y":2648},"pointLast":{"x":907,"y":2815},"width":1600.833251953125},{"pointFirst":{"x":907,"y":2815},"pointLast":{"x":384,"y":2958},"width":1600.833251953125},{"pointFirst":{"x":384,"y":2958},"pointLast":{"x":306,"y":3136},"width":1600.833251953125},{"pointFirst":{"x":306,"y":3136},"pointLast":{"x":343,"y":3307},"width":1600.833251953125},{"pointFirst":{"x":343,"y":3307},"pointLast":{"x":561,"y":3426},"width":1600.833251953125},{"pointFirst":{"x":561,"y":3426},"pointLast":{"x":933,"y":3522},"width":1600.833251953125},{"pointFirst":{"x":933,"y":3522},"pointLast":{"x":1140,"y":3665},"width":1600.833251953125},{"pointFirst":{"x":1140,"y":3665},"pointLast":{"x":1086,"y":3859},"width":1600.833251953125},{"pointFirst":{"x":1086,"y":3859},"pointLast":{"x":920,"y":3970},"width":1600.833251953125},{"pointFirst":{"x":920,"y":3970},"pointLast":{"x":588,"y":4062},"width":1600.833251953125},{"pointFirst":{"x":588,"y":4062},"pointLast":{"x":346,"y":4210},"width":1600.833251953125},{"pointFirst":{"x":346,"y":4210},"pointLast":{"x":260,"y":4378},"width":1600.833251953125},{"pointFirst":{"x":260,"y":4378},"pointLast":{"x":262,"y":4607},"width":1600.833251953125},{"pointFirst":{"x":262,"y":4607},"pointLast":{"x":317,"y":4731},"width":1600.833251953125},{"pointFirst":{"x":317,"y":4731},"pointLast":{"x":450,"y":4868},"width":1600.833251953125},{"pointFirst":{"x":450,"y":4868},"pointLast":{"x":594,"y":4943},"width":1600.833251953125},{"pointFirst":{"x":594,"y":4943},"pointLast":{"x":875,"y":5037},"width":1600.833251953125},{"pointFirst":{"x":875,"y":5037},"pointLast":{"x":1042,"y":5131},"width":1600.833251953125},{"pointFirst":{"x":1042,"y":5131},"pointLast":{"x":1209,"y":5313},"width":1600.833251953125},{"pointFirst":{"x":1209,"y":5313},"pointLast":{"x":1209,"y":5580},"width":1600.833251953125},{"pointFirst":{"x":1209,"y":5580},"pointLast":{"x":1083,"y":5699},"width":1600.833251953125},{"pointFirst":{"x":1083,"y":5699},"pointLast":{"x":837,"y":5877},"width":1600.833251953125},{"pointFirst":{"x":837,"y":5877},"pointLast":{"x":648,"y":5981},"width":1600.833251953125},{"pointFirst":{"x":648,"y":5981},"pointLast":{"x":486,"y":6140},"width":1600.833251953125},{"pointFirst":{"x":486,"y":6140},"pointLast":{"x":492,"y":6252},"width":1600.833251953125},{"pointFirst":{"x":492,"y":6252},"pointLast":{"x":593,"y":6351},"width":1600.833251953125},{"pointFirst":{"x":593,"y":6351},"pointLast":{"x":798,"y":6413},"width":1600.833251953125},{"pointFirst":{"x":798,"y":6413},"pointLast":{"x":1121,"y":6527},"width":1600.833251953125},{"pointFirst":{"x":1121,"y":6527},"pointLast":{"x":1192,"y":6608},"width":1600.833251953125},{"pointFirst":{"x":1192,"y":6608},"pointLast":{"x":1168,"y":6697},"width":1600.833251953125},{"pointFirst":{"x":1168,"y":6697},"pointLast":{"x":793,"y":6826},"width":1600.833251953125},{"pointFirst":{"x":793,"y":6826},"pointLast":{"x":551,"y":6920},"width":1600.833251953125},{"pointFirst":{"x":551,"y":6920},"pointLast":{"x":499,"y":7062},"width":1600.833251953125},{"pointFirst":{"x":499,"y":7062},"pointLast":{"x":548,"y":7142},"width":1600.833251953125},{"pointFirst":{"x":548,"y":7142},"pointLast":{"x":879,"y":7239},"width":1600.833251953125},{"pointFirst":{"x":879,"y":7239},"pointLast":{"x":1141,"y":7342},"width":1600.833251953125},{"pointFirst":{"x":1141,"y":7342},"pointLast":{"x":1185,"y":7427},"width":1600.833251953125},{"pointFirst":{"x":1185,"y":7427},"pointLast":{"x":1188,"y":7517},"width":1600.833251953125},{"pointFirst":{"x":1188,"y":7517},"pointLast":{"x":858,"y":7630},"width":1600.833251953125},{"pointFirst":{"x":858,"y":7630},"pointLast":{"x":595,"y":7740},"width":1600.833251953125},{"pointFirst":{"x":595,"y":7740},"pointLast":{"x":544,"y":7798},"width":1600.833251953125},{"pointFirst":{"x":544,"y":7798},"pointLast":{"x":543,"y":7950},"width":1600.833251953125},{"pointFirst":{"x":543,"y":7950},"pointLast":{"x":674,"y":8057},"width":1600.833251953125},{"pointFirst":{"x":674,"y":8057},"pointLast":{"x":818,"y":8215},"width":1600.833251953125},{"pointFirst":{"x":818,"y":8215},"pointLast":{"x":898,"y":8521},"width":1600.833251953125},{"pointFirst":{"x":898,"y":8521},"pointLast":{"x":894,"y":8938},"width":1600.833251953125}]`);
    const $frame = document.querySelector('.matrix-editor');
    const {  width: widthFrame, left, top } = $frame.getBoundingClientRect();
    const $contentScroll = document.querySelector('html');
    const { scrollTop, scrollLeft } = $contentScroll;
 
    for (const { pointFirst, pointLast, width } of _all) {
        const vertor = new Vertor();
        console.log(widthFrame);
        const k = widthFrame / width;
        console.log('K', left);

        const getNumber = (a) => Number((a * k).toFixed())

        pointFirst.x = pointFirst.x * k ;
        pointFirst.y = getNumber(pointFirst.y);

        pointLast.x = pointLast.x * k ;
        pointLast.y = getNumber(pointLast.y) ;
        console.log(pointFirst, pointLast);

        vertor.setPoint(pointFirst);
        vertor.setPoint(pointLast);
    }
}

setTimeout(() => {
    initData();
}, 1000)
 

document.addEventListener("mouseups", (e) => {
    let x = (e.offsetX / $frame.getBoundingClientRect().width * 100);
    let y = (e.offsetY / $frame.getBoundingClientRect().height * 100);

    x = (e.offsetX);
    y = (e.offsetY);

    console.log(width);
    drawPoint(x, y);
    

    if (pointFirst) {
        pointLast = { x, y };
        const vertor = new Vertor();
        vertor.setPoint(pointFirst);
        vertor.setPoint(pointLast);
        listVector.push(vertor);
        listPoint.push({
            pointFirst,
            pointLast,
            width
        });
        // reset
        pointFirst = pointLast;
        pointLast = null;
        localStorage.setItem('SKILING', JSON.stringify(listPoint));
    } else {
        pointFirst = { x, y };
    }
});
let i = 0;
document.addEventListener("scroll", (e) => {
    const character = document.querySelector(".character");
    let top = document.documentElement.scrollTop || document.body.scrollTop || 0;
    i = i-0.5;
    let _top = Number(top - window.innerHeight + window.innerHeight - i).toFixed(0);
     
    console.log(_top, window.all[_top]);
    const _state = window.all[_top];

    if (_state) {
        character.style.left = _state.x / width * 100 + "vw";
        character.style.top = (_top / width) * 100 + "vw";
        character.querySelector('img').src = `https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/fahrer_${_state.img}.png`
    }
    // const cur = document.querySelector('[data-y="' + top + '"]');
    // if (cur) {
    //     document.querySelectorAll("[data-y]").forEach((item) => {
    //         item.classList.remove("active");
    //     });
    //     document.querySelector('[data-y="' + top + '"]').classList.add("active");
    // }
});