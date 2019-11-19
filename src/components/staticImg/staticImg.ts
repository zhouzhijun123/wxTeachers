import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
class StaticImg extends Vue {
    @Prop({ default: {} })
    img: object;
    @Prop({ default: '#ffc600' })
    fcolor: string;
    @Prop({ default: 'rgba(30, 30, 30, 0.8)' })
    bgcolor: string;
}

export default StaticImg