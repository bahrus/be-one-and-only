import {Actions, Proxy, PP, VirtualProps, ProxyProps, PA} from './types';
import {define, BeDecoratedProps} from 'be-decorated/DE.js';
import {register} from 'be-hive/register.js';

export class BeOneAndOnly extends EventTarget implements Actions{
    beBornIfTheOne(pp: PP): PA {
        const {self, id} = pp;
        const rn = self.getRootNode() as DocumentFragment;
        if(rn.getElementById(id) !== null) return {
            resolved: true
        } as PA;
        self.id = id;
        const target = this.selectTarget(pp);
        target.appendChild(self.content.cloneNode(true));
        return {
            resolved: true
        } as PA;
    }

    selectTarget(pp: PP){
        const {self} = pp;
        if(self.parentElement !== null) return self.parentElement;
        return self.getRootNode();
    }
}

const tagName = 'be-one-and-only';
const ifWantsToBe = 'one-and-only';
const upgrade = 'template';

export const virtualProps: (keyof VirtualProps)[] = ['id'];

define<PP & BeDecoratedProps<PP, Actions>, Actions>({
    config:{
        tagName,
        propDefaults:{
            ifWantsToBe,
            upgrade,
            forceVisible: [upgrade],
            virtualProps,
            primaryProp: 'id'
        },
        actions: {
            beBornIfTheOne: 'id'
        }
    },
    complexPropDefaults: {
        controller: BeOneAndOnly,
    }
});

register(ifWantsToBe, upgrade, tagName);