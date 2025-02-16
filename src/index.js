import Editor from "./editor";
import BallonBanner from "./plugins/ballon-banner";
import FinishBanner from "./plugins/finish-banner";
import HomeBanner from "./plugins/home-banner";
import ImageBanner from "./plugins/image-banner";
import LinkBanner from "./plugins/link-banner";
import GoalBanner from "./plugins/goal-banner";
import HouseBanner from "./plugins/house-banner";
import Matrix from "./matrix";

const runEditor = () => {
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

runEditor()

const matrix = new Matrix({
    $element: document.querySelector('.matrix-editor')
});

