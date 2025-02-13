const clientRect = document
    .querySelector(".frame-size")
    .getBoundingClientRect();
export default class Banner {
    constructor({ left, top, width, plugin, id, widthOfPosition, $frame }) {
        this.plugin = plugin;
        this.$frame = $frame;
        this.initState(
            left,
            top,
            id || new Date().getTime(),
            widthOfPosition || clientRect.width,
            width
        );
        this.initDOM();
        this.registerEvent();
    }

    initState(left, top, id, widthOfPosition, width) {
        this.pageX = left;
        this.pageY = top;
        this.activeMove = false;
        this.activeResize = false;
        this.width = width;
        this.widthOfPosition = widthOfPosition;
        this.id = id;
        const clientRect = this.$frame.getBoundingClientRect();
        this.widthOfFrame =  clientRect.width;
        this.heightOfFrame =  clientRect.height;
    }

    initDOM() {
        this.$element = document.createElement("div");
        this.$element.appendChild(this.plugin.getTempate());
        this.$element.appendChild(this.getResize());
        this.$element.className = "banner-tor";
        const k = this.widthOfFrame / this.widthOfPosition;
        this.$element.style.left = `${this.pageX}%`;
        this.$element.style.top = `${this.pageY}%`;
        this.$element.style.width = `${this.width}%`;

        this.$element.dataset.id = this.id;
        this.$frame.appendChild(this.$element);
        
    }

    getResize() {
        this.$resize = document.createElement("div");
        this.$resize.className = "banner-resize";

        this.$resize.addEventListener("mousedown", (event) => {
            this.activeMove = false;
            this.activeResize = true;
            const { clientX } = event;
            this.clientX = clientX;
            this.clientWidth = this.$element.offsetWidth;
        });

        document.addEventListener("mousemove", (event) => {

            if (this.activeResize) {
                const { clientX } = event;
                console.log(this.clientWidth)
                const width = clientX - this.clientX + this.clientWidth;
                this.$element.style.width = `${width}px`;
            }
        });

        document.addEventListener("mouseup", (event) => {
            if (this.activeResize) {
                const { offsetLeft, offsetTop, offsetWidth } = this.$element;
                console.log(offsetLeft);
                const { width, top, left } = this.getSizeByFrame({ width: offsetWidth, top: offsetTop, left: offsetLeft })
                this.$element.style.width = `${width}%`;
                this.width = width;
                // Save
                window._banner = window._banner || {};
                window._banner[this.id] = {
                    width,
                    top,
                    left,
                    widthOfPosition: this.widthOfPosition,
                    setting: {
                        plugin: this.plugin.constructor.name,
                    },
                };

                localStorage.setItem("_banner", JSON.stringify(window._banner));
            }
        });

        return this.$resize;
    }

    registerEvent() {
        this.$element.addEventListener("click", (event) => {
            window._banner_remove = this.id;
        });

        document.addEventListener("keyup", ({ code }) => {
            if (code === "Backspace" && window._banner_remove) {
                document.querySelector(`[data-id="${window._banner_remove}"]`).remove();
                window._banner = window._banner || {};
                delete window._banner[window._banner_remove];
                // Save
                localStorage.setItem("_banner", JSON.stringify(window._banner));
                window._banner_remove = null;
            }
        });

        this.$element.addEventListener("mousedown", (event) => {
            this.activeMove = true;
            this.pageX = event.clientX - this.$element.offsetLeft;
            this.pageY = event.clientY - this.$element.offsetTop;
        });

        document.addEventListener("mousemove", (event) => {
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
                this.$element.style.left = `${(this.left / this.widthOfFrame) * 100}%`;
                this.$element.style.top = `${(this.top / this.heightOfFrame) * 100}%`;
                // Save
                const { offsetLeft, offsetTop, offsetWidth } = this.$element;
                const { width, top, left } = this.getSizeByFrame({ width: offsetWidth, top: offsetTop, left: offsetLeft });
                window._banner = window._banner || {};
                window._banner[this.id] = {
                    left,
                    top,
                    width,
                    widthOfPosition: this.widthOfFrame,
                    setting: {
                        plugin: this.plugin.constructor.name,
                    },
                };

                localStorage.setItem("_banner", JSON.stringify(window._banner));
            }
            this.activeMove = false;
            this.activeResize = false;
        });
    }

    getSizeByFrame({ width, top, left }) {
        return {
            width: (width / this.widthOfFrame) * 100,
            top: (top / this.heightOfFrame) * 100,
            left: (left / this.widthOfFrame) * 100,
        };
    }
}
