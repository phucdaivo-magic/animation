const { width, height } = document.querySelector('.frame-size').getBoundingClientRect()
export default class Banner {
    constructor({
        left,
        top,
        plugin,
        id = new Date().getTime(),
        widthSetting = 0,
    }) {
        this.plugin = plugin;
        this.initState(left, top, id, widthSetting);
        this.initDOM();
        this.registerEvent();
    }

    initState(left, top, id, widthSetting) {
        this.pageX = left;
        this.pageY = top;
        this.activeMove = false;
        this.activeResize = false;
        this.widthFrame = width;
        this.widthSetting = widthSetting;
        this.id = id;
    }

    initDOM() {
        console.log(this.widthFrame, this.widthSetting);

        this.$element = document.createElement('div');
        this.$element.appendChild(this.plugin.getTempate());
        this.$element.appendChild(this.getResize());
        this.$element.className = 'banner-tor';
        const k = this.widthFrame/ this.widthSetting;
        this.$element.style.left = `${this.pageX * k}px`;
        this.$element.style.top = `${this.pageY * k}px`;
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
                this.$element.style.width = `${_width / width * 100}vw`;
            }
        });

        return this.$resize;
    }

    registerEvent() {
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
            if (!this.activeResize) {
                this.$element.style.left = `${this.left / width * 100}vw`;
                this.$element.style.top = `${this.top / width * 100}vw`;
                window._banner = window._banner || {};
                window._banner[this.id] = {
                    left: this.left,
                    top: this.top,
                    width: this.widthFrame,
                    setting: {
                        plugin: this.plugin.constructor.name,
                        widthSetting: this.width
                    }
                };

                localStorage.setItem('_banner', JSON.stringify(window._banner));
            }
            this.activeMove = false;
            this.activeResize = false;
        });
    }
}