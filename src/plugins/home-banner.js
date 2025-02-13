import PluginBanner from "./Plugin";

export default class HomeBanner extends PluginBanner {
    getTempate() {
        const $img = document.createElement('img');
        $img.src = 'https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/starthaus.png';
        return $img;
    }
}
