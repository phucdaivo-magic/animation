import PluginBanner from "./Plugin";

export default class HouseBanner extends PluginBanner {
    getTempate() {
        const $img = document.createElement('img');
        $img.className = '';
        let step = 1;
        $img.src = `https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/huette${step}.png?v=1`;
        setInterval(() => {
            step++;
            $img.src = `https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/huette${step}.png?v=1`;
            if(step > 5) {
                step = 1;   
            }
        }, 500);
        return $img;
    }
}