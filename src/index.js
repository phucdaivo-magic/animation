import Editor from "./editor";
import BallonBanner from "./plugins/ballon-banner";
import FinishBanner from "./plugins/finish-banner";
import HomeBanner from "./plugins/home-banner";
import ImageBanner from "./plugins/image-banner";
import LinkBanner from "./plugins/link-banner";
import GoalBanner from "./plugins/goal-banner";
import HouseBanner from "./plugins/house-banner";
import Matrix from "./matrix";
import Character from "./charactor";

const runBannerEditor = () => {
    const editor = new Editor({
        $element: document.querySelector('.animation-editor'),
        plugins: {
            BallonBanner,
            LinkBanner,
            ImageBanner,
            HomeBanner,
            FinishBanner,
            HouseBanner,
            GoalBanner
        }
    });
}
const runMapEditor = () => {
    const matrix = new Matrix({
        $frame: document.querySelector('.matrix-editor')
    });
    // matrix.registerEvent();
}

const runAnimation = () => {
    const character = new Character({
        $frame: document.querySelector('.matrix-editor'),
    });
}

runBannerEditor();
runMapEditor();
runAnimation();

