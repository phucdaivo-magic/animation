export default class Character {
    constructor({ $frame }) {
        this.initState({ $frame });
        this.registerEvent();
    }

    initState({ $frame }) {
        this.$frame = $frame;
    }

    registerEvent() {
        document.addEventListener("scroll", (e) => {
            let { width , top: __top, height } = this.$frame.getBoundingClientRect();
            const character = document.querySelector(".character");
            console.log('height', height);
            const postion = window.innerHeight - 100;
            __top =  Number(__top - postion).toFixed();
            let top = document.documentElement.scrollTop || document.body.scrollTop || 0;
            let _top = Number(top - window.innerHeight + window.innerHeight + 100 + __top).toFixed(0);

            console.log(-__top, window.all[-__top]);
            const _state = window.all[-__top];

            if (_state) {
                character.style.left = _state.x + "px";
                character.style.top = _state.y + "px";
                character.querySelector('img').src = `https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/fahrer_${_state.img}.png`
            }
        });
    }
}