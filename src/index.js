import Editor from "./editor";
import BallonBanner from "./plugins/ballon-banner";
import FinishBanner from "./plugins/finish-banner";
import HomeBanner from "./plugins/home-banner";
import ImageBanner from "./plugins/image-banner";
import LinkBanner from "./plugins/link-banner";
const editor = new Editor({
    BallonBanner,
    LinkBanner,
    ImageBanner,
    HomeBanner,
    FinishBanner
});