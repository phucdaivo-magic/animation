import PluginBanner from "./Plugin";

export default class GoalBanner extends PluginBanner {
    getTempate() {
        const $img = document.createElement('img');
        $img.className = '';
        let step = 1;
        $img.src = `https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/puplikum${step}.png?v=1`;
        setInterval(() => {
            step++;
            if(step > 2) {
                step = 1;   
            }
            $img.src = `https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/puplikum${step}.png?v=1`;
             
        }, 500);
        return $img;
    }
}