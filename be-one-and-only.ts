import {Actions, Proxy, PP, VirtualProps, ProxyProps} from './types';
import {define, BeDecoratedProps} from 'be-decorated/DE.js';
import {register} from 'be-hive/register.js';

export class BeOneAndOnly extends EventTarget implements Actions{
    beBornIfTheOne(pp: PP): void {
        const {self, id} = pp;
        const rn = self.getRootNode() as DocumentFragment;
        if(rn.getElementById(id) !== null) return;
        self.id = id;
        const target = this.selectTarget(pp);
        target.appendChild(self.content.cloneNode(true));
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

define<PP & BeDecoratedProps<PP, Actions>, Actions>({
    config:{
        tagName,
        propDefaults:{
            ifWantsToBe,
            upgrade,
            forceVisible: ['template'],
            virtualProps: ['id'],
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