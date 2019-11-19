import { Vue, Component, Prop } from 'vue-property-decorator'
import UserContend from '@/components/userContend/userContend.vue'

import Data from '../../testData.json'

@Component({
    components: {
        UserContend
    }
})
class Video extends Vue {

    id: number = 0; // videoPage 的 id

    videoUrl: string = "";   // 视频链接
    title: string = "";  // 标题
    host: string = "";   // 主讲人

    uname: string = "uname";
    ucontend: string = "contend";
    users: Array<object> = [{}];
    
    getName(e: any): void {
        this.uname = e.mp.detail.value;
        console.log(e.mp.detail.value)
    }
    getContend(e: any): void {
        this.ucontend = e.mp.detail.value;
    }
    sumit(): void {
        console.log("user: ", this.uname);
        console.log("contend: ", this.ucontend);
    }

    beforeMount() {
        console.log("In videoPage");
        this.id = this.$root.$mp.query.id;
        this.videoUrl = Data.videoPage[this.id].url;
        this.host = Data.videoPage[this.id].host;
        this.title = Data.videoPage[this.id].title;
        this.users = Data.videoPage[this.id].users;
    }

    // onLoad(options: any) {
    //     console.log(options.videoUrl);
    //     this.videoUrl = options.videoUrl;
    //     this.host = options.host;
    //     this.title = options.title;
    // }
}

export default Video