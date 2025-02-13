import PluginBanner from "./Plugin";

export default class FinishBanner extends PluginBanner {
    getTempate() {
        const $img = document.createElement('img');
        $img.className = '';
        $img.src = 'https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/zieltor.png';
        return $img;
    }
}