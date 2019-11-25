import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
class UserContend extends Vue {
    @Prop({ default: [{}] })
    users!: Array<object>;
    @Prop({ default: "Default text" })
    title_text!: string;
    @Prop({ default: "Default text" })
    tip!: string;
    @Prop({ default: "Default text" })
    contend_text!: string;
    @Prop({ default: "Default text" })
    submit_text!: string;

    userInfo: object = {};
    contend: string = "";

    submit(e: any) {
        if (wx) {
            this.userInfo["contend"] = e.mp.detail.value.textarea;
        } else {
            // 换成 pwa 的
            console.log("change method");
        }
    }

    onGetUserInfo(e: any) {
        if (wx) {
            this.userInfo["detail"] = e.mp.detail.userInfo;
            // 把 userInfo 发送到服务器，初始化在 videoPage 获取 users 的详细信息来渲染
            console.log(this.userInfo["detail"]);
            console.log(this.userInfo["contend"]);
            this.contend = this.userInfo["contend"];
        } else {
            console.log("change method")
        }
    }
}

export default UserContend