export default class Banner {
    constructor({ left, top, width, plugin, id, widthOfPosition, $frame }) {
        this.plugin = plugin;
        this.$frame = $frame;
        this.initState(
            left,
            top,
            id || new Date().getTime(),
            widthOfPosition,
            width
        );
        this.initDOM();
        this.registerEvent();
    }

    initState(left, top, id, widthOfPosition, width) {
        const clientRect = this.$frame.getBoundingClientRect();
        this.id = id;
        this.pageX = left;
        this.pageY = top;
        this.activeMove = false;
        this.activeResize = false;
        this.width = width;
        this.widthOfPosition = widthOfPosition;
        this.widthOfFrame = clientRect.width;
        this.heightOfFrame = clientRect.height;
    }

    initDOM() {
        this.$element = document.createElement("div");
        this.$element.appendChild(this.plugin.getTempate());
        this.$element.appendChild(this.getResize());
        this.$element.className = "banner-tor";
        this.$element.style.left = `${this.pageX}%`;
        this.$element.style.top = `${this.pageY}%`;
        this.$element.style.width = `${this.width}%`;

        this.$element.dataset.id = this.id;
        this.$frame.appendChild(this.$element);

    }

    getResize() {
        this.$resize = document.createElement("div");
        this.$resize.className = "banner-resize";

        this.$resize.addEventListener("mousedown", ({ clientX }) => {
            this.activeMove = false;
            this.activeResize = true;
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

        // resize
        document.addEventListener("mouseup", (event) => {
            if (this.activeResize) {
                const { offsetWidth } = this.$element;
                const { width } = this.getSizeByFrame({ width: offsetWidth})
                this.$element.style.width = `${width}%`;
                this.width = width;
                // Save
                window._banner = window._banner || {};
                window._banner[this.id] = {
                    width,
                    top: window._banner[this.id].top,
                    left: window._banner[this.id].left,
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

        this.$element.addEventListener("mousedown", ({ clientX, clientY }) => {
            this.activeMove = true;
            this.pageX = clientX - this.$element.offsetLeft;
            this.pageY = clientY - this.$element.offsetTop;
        });

        document.addEventListener("mousemove", ({ clientX, clientY }) => {
            if (this.activeMove && !this.activeResize) {
                this.left = clientX - this.pageX;
                this.top = clientY - this.pageY;

                this.$element.style.left = `${this.left}px`;
                this.$element.style.top = `${this.top}px`;
            }
        });

        document.addEventListener("mouseup", () => {
            if (!this.activeResize && this.activeMove) {
                const frameRect = this.$frame.getBoundingClientRect();
                const $contentScroll = document.querySelector('html');

                const { offsetLeft, offsetTop, offsetWidth } = this.$element;
                const { scrollTop, scrollLeft } = $contentScroll;

                frameRect.offsetTop = frameRect.top - this.$frame.offsetTop;
                frameRect.offsetLeft = frameRect.left - this.$frame.offsetLeft;

                const _width = offsetWidth / frameRect.width * 100;
                const _top = (offsetTop - frameRect.offsetTop - scrollTop) / frameRect.height * 100;
                const _left = (offsetLeft - frameRect.offsetLeft - scrollLeft) / frameRect.width * 100;
                this.$element.style.left = `${_left}%`;
                this.$element.style.top = `${_top}%`;

                // Save
                window._banner = window._banner || {};
                window._banner[this.id] = {
                    left: _left,
                    top: _top,
                    width: _width,
                    widthOfPosition: frameRect.width,
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
        const { offsetWidth, offsetheight } = this.$frame;
        return {
            width: (width / offsetWidth) * 100,
            top: (top / offsetheight) * 100,
            left: (left / offsetheight) * 100,
        };
    }

    getPostion({ top, left }) {
        const $contentScroll = document.querySelector('html');
        const { scrollTop, scrollLeft } = $contentScroll;
        return {
            y: top + scrollTop,
            x: left + scrollLeft
        }
    }
}
