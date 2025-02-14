import Banner from "./banner";
export default class Editor {
    constructor({ plugins, $element }) {
        this.initState(plugins, $element);
        this.initContextMenu();
        this.initBanner();
    }

    initState(plugins, $element) {
        this.$element = $element;
        const { width, height, top, left } = this.$element.getBoundingClientRect();
        this.plugins = plugins;
        this.frameWidth = width;
        this.frameHeight = height;
    }

    initContextMenu() {
        this.$contextMenu = document.createElement('div');
        this.$contextMenu.className = 'context-menu';

        Object.keys(this.plugins).forEach((plugin) => {
            const $item = document.createElement('div');
            $item.className = 'context-menu-item';
            $item.innerText = plugin;
            this.$contextMenu.appendChild($item);

            $item.addEventListener('click', ({ pageX, pageY }) => {
                const { width, height, top, left } = this.$element.getBoundingClientRect();
                const { x, y } = this.getPostion({ top, left });
                const banner = new Banner({
                    left: (pageX - x) / width * 100,
                    top: (pageY - y) / height * 100,
                    plugin: new this.plugins[plugin](),
                    $frame: this.$element
                });
            });
        });

        this.$element.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            const { clientX, clientY } = event;
            this.$contextMenu.style.top = `${clientY}px`;
            this.$contextMenu.style.left = `${clientX}px`;
            this.$contextMenu.style.display = 'block';
        });

        document.addEventListener('click', () => {
            this.$contextMenu.style.display = 'none';
        });

        document.body.appendChild(this.$contextMenu);
    }

    getPostion({ top, left }) {
        const $contentScroll = document.querySelector('html');
        const { scrollTop, scrollLeft } = $contentScroll;
        return {
            y: top + scrollTop,
            x: left + scrollLeft
        }
    }

    initBanner() {
        window._banner = JSON.parse(localStorage.getItem('_banner') || '{}');
        Object.keys(window._banner).forEach((key) => {
            const item = window._banner[key];
            const banner = new Banner({
                id: key,
                left: item.left,
                top: item.top,
                width: item.width,
                widthOfPosition: item.widthOfPosition,
                plugin: new this.plugins[item.setting.plugin](),
                $frame: this.$element,
            })
        });
    }
}

