import { Vue, Component } from 'vue-property-decorator'
import StaticImg2 from '@/components/staticImg2/staticImg2.vue'
import BottomText from '@/components/bottomText/bottomText.vue'

import Data from '../../testData.json'

@Component({
    components: {
        StaticImg2,
        BottomText
    }
})
class SubPlayPage extends Vue {

    currentIndex: number = 0;   // 当前 tab 页序号
    itemHeight: number = 190;
    swiperHeight: number = 800;

    id: number = 0;
    topImg: object = {};
    tabTitles: Array<string> = [""];
    imgs: Array<object> = [{}];
    bottomText: string = "";

    // 改变 swiper 高度
    changeHeight(): void {
        if (this.currentIndex == 0) {
            console.log("to do change height");
        } else if (this.currentIndex == 1) {
            console.log("to do change height");
        }
    }
    // 点击 tab 页标题触发
    click(e: any): void | boolean {
        let current: number = e.currentTarget.id;   // 实际是一个 string
        if (this.currentIndex == current) {
            return false;
        } else {
            this.currentIndex = current;
            this.changeHeight();
        }
    }
    // 滑动 swiper 时触发
    slide(e: any): void | boolean {
        let current: number = e.mp.detail.current;
        if (this.currentIndex == current) {
            return false;
        } else {
            this.currentIndex = current;
            this.changeHeight();
        }
    }

    beforeMount() {
        console.log("In subPlayPage");
        this.id = this.$root.$mp.query.id;
        this.topImg = Data.subPlayPage[this.id].topImg;
        wx.setNavigationBarTitle({
            title: this.topImg['title']
        });
        this.tabTitles = Data.subPlayPage.tabTitles;
        this.bottomText = Data.subPlayPage.bottomText;
    }
}

export default SubPlayPage