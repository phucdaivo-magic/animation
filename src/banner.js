 
const clientRect = document.querySelector('.frame-size').getBoundingClientRect()
export default class Banner {
    constructor({
        left,
        top,
        width,
        plugin,
        id,
        widthOfPosition,
    }) {
 
        this.plugin = plugin;
        this.initState(left, top, id || new Date().getTime(), widthOfPosition || clientRect.width, width);
        this.initDOM();
        this.registerEvent();
    }

    initState(left, top, id, widthOfPosition, width) {
        this.pageX = left;
        this.pageY = top;
        this.activeMove = false;
        this.activeResize = false;
        this.widthOfFrame = clientRect.width;
        this.widthOfPosition = widthOfPosition;
        this.width = width;
        this.id = id;
    }

    initDOM() {
        this.$element = document.createElement('div');
        this.$element.appendChild(this.plugin.getTempate());
        this.$element.appendChild(this.getResize());
        this.$element.className = 'banner-tor';
        const k = this.widthOfFrame / this.widthOfPosition;
        this.$element.style.left = `${this.pageX * k / this.widthOfFrame * 100}vw`;
        this.$element.style.top = `${this.pageY * k / this.widthOfFrame * 100}vw`;
        this.$element.style.width = `${this.width * k / this.widthOfFrame * 100 }vw`;
        this.$element.dataset.id = this.id;
        document.body.appendChild(this.$element);
    }

    getResize() {
        this.$resize = document.createElement('div');
        this.$resize.className = 'banner-resize';

        this.$resize.addEventListener('mousedown', () => {
            this.activeMove = false;
            this.activeResize = true;
        });

        document.addEventListener('mousemove', (event) => {
            if (this.activeResize) {
                const { clientX } = event;
                const width = clientX - this.$element.offsetLeft;
                this.$element.style.width = `${width}px`;
            }
        });

        document.addEventListener("mouseup", (event) => {
            
            if (this.activeResize) {
                const { clientX } = event;
                const _width = clientX - this.$element.offsetLeft;
                this.$element.style.width = `${_width / this.widthOfFrame * 100}vw`;
                this.width = _width

                // Save
                window._banner = window._banner || {};
                window._banner[this.id] = {
                    left: this.$element.offsetLeft,
                    top: this.$element.offsetTop,
                    width: this.$element.offsetWidth,
                    widthOfPosition: this.widthOfPosition,
                    setting: {
                        plugin: this.plugin.constructor.name,
                    }
                };

                localStorage.setItem('_banner', JSON.stringify(window._banner));
            }
        });

        return this.$resize;
    }

    registerEvent() {
        this.$element.addEventListener('click', (event) => {
            window._banner_remove = this.id;
        });

        document.addEventListener('keyup', ({code}) => {
            if (code === 'Backspace' && window._banner_remove) {
                document.querySelector(`[data-id="${window._banner_remove}"]`).remove();
                window._banner = window._banner || {};
                delete window._banner[window._banner_remove];
                // Save
                localStorage.setItem('_banner', JSON.stringify(window._banner));
                window._banner_remove = null;
            }
             
        });

        this.$element.addEventListener('mousedown', (event) => {
            this.activeMove = true;
            this.pageX = event.clientX - this.$element.offsetLeft;
            this.pageY = event.clientY - this.$element.offsetTop;
        });

        document.addEventListener('mousemove', (event) => {
            if (this.activeMove && !this.activeResize) {
                const { clientX, clientY } = event;
                this.left = clientX - this.pageX;
                this.top = clientY - this.pageY;
                this.$element.style.left = `${clientX - this.pageX}px`;
                this.$element.style.top = `${clientY - this.pageY}px`;
            }
        });
        document.addEventListener("mouseup", () => {
            if (!this.activeResize && this.activeMove) {
                this.$element.style.left = `${this.left / this.widthOfFrame * 100}vw`;
                this.$element.style.top = `${this.top / this.widthOfFrame * 100}vw`;
                // Save
                window._banner = window._banner || {};
                window._banner[this.id] = {
                    left: this.$element.offsetLeft,
                    top: this.$element.offsetTop,
                    width: this.$element.offsetWidth,
                    widthOfPosition: this.widthOfFrame,
                    setting: {
                        plugin: this.plugin.constructor.name,
                    }
                };

                localStorage.setItem('_banner', JSON.stringify(window._banner));
            }
            this.activeMove = false;
            this.activeResize = false;
        });
    }
}