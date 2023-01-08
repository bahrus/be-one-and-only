import {Actions, Proxy, PP, VirtualProps, ProxyProps, PA} from './types';
import {define, BeDecoratedProps} from 'be-decorated/DE.js';
import {register} from 'be-hive/register.js';
import {ActionExt} from 'be-decorated/types';

export class BeOneAndOnly extends EventTarget implements Actions{
    beBornIfTheOne(pp: PP, mold: PA): PA {
        const {self, id} = pp;
        const rn = self.getRootNode() as DocumentFragment;
        if(rn.getElementById(id) !== null) return mold;
        self.id = id;
        const target = this.selectTarget(pp);
        const targetRn = target.getRootNode() as DocumentFragment;
        if(targetRn !== rn && targetRn.getElementById(id) != null) return mold;
        target.appendChild(self.content.cloneNode(true));
        return mold;
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

export const actions:  Partial<{[key in keyof Actions]: ActionExt<PP & BeDecoratedProps<PP, Actions>, Actions>}> = {
    beBornIfTheOne: {
        ifAllOf: ['id'],
        returnObjMold: {
            resolved: true
        }
    }
};

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
        actions
    },
    complexPropDefaults: {
        controller: BeOneAndOnly,
    }
});

register(ifWantsToBe, upgrade, tagName);