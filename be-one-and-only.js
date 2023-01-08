import { define } from 'be-decorated/DE.js';
import { register } from 'be-hive/register.js';
export class BeOneAndOnly extends EventTarget {
    beBornIfTheOne(pp) {
        const { self, id } = pp;
        const rn = self.getRootNode();
        if (rn.getElementById(id) !== null)
            return;
        self.id = id;
        const target = this.selectTarget(pp);
        target.appendChild(self.content.cloneNode(true));
        return {
            resolved: true
        };
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
define({
    config: {
        tagName,
        propDefaults: {
            ifWantsToBe,
            upgrade,
            forceVisible: ['template'],
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
