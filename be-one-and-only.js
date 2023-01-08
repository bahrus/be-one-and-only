import { define } from 'be-decorated/DE.js';
import { register } from 'be-hive/register.js';
export class BeOneAndOnly extends EventTarget {
    beBornIfTheOne(pp, mold) {
        const { self, id } = pp;
        const rn = self.getRootNode();
        if (rn.getElementById(id) !== null)
            return mold;
        self.id = id;
        const target = this.selectTarget(pp);
        const targetRn = target.getRootNode();
        if (targetRn.getElementById(id) != null)
            return mold;
        target.appendChild(self.content.cloneNode(true));
        return mold;
    }
    selectTarget(pp) {
        const { self } = pp;
        if (self.parentElement !== null)
            return self.parentElement;
        return self.getRootNode();
    }
}
const tagName = 'be-one-and-only';
const ifWantsToBe = 'one-and-only';
const upgrade = 'template';
export const virtualProps = ['id'];
export const actions = {
    beBornIfTheOne: {
        ifAllOf: ['id'],
        returnObjMold: {
            resolved: true
        }
    }
};
define({
    config: {
        tagName,
        propDefaults: {
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
