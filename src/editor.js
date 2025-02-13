import Banner from "./banner";
export default class Editor {
    constructor(plugins) {
        this.initState(plugins);
        this.initContextMenu();
        this.initBanner();
    }

    initState(plugins) {
        const { width, height } = document.querySelector('.frame-size').getBoundingClientRect()
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

            $item.addEventListener('click', (e) => {
                const { pageX, pageY, target } = e;
                const banner = new Banner({
                    left: pageX,
                    top: pageY,
                    plugin: new this.plugins[plugin](),
                });
            });
        });

        document.addEventListener("contextmenu", (event) => {
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
            })
        });
    }
}

