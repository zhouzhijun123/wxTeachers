import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
class Gride2 extends Vue {
    @Prop({ default: [{}] })
    imgs: Array<object>;

}

export default Gride2