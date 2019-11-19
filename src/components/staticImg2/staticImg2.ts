import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
class StaticImg2 extends Vue {
    @Prop({ default: {} })
    img: object;
    @Prop({ default: '0' })
    flag: string;
}

export default StaticImg2