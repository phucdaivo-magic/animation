import PluginBanner from "./Plugin";

export default class BallonBanner extends PluginBanner {
    getTempate() {
        const $img = document.createElement('img');
        $img.className = 'banner-ballon';
        $img.src = 'https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/ballon.png';
        return $img;
    }
}