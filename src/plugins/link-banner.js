import PluginBanner from "./Plugin";

export default class LinkBanner extends PluginBanner {
    getTempate() {
        const $a = document.createElement('a');
        $a.innerText = 'This is Link';
        $a.href = 'https://abc.com'
        return $a;
    }
}