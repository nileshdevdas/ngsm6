import { Lifecycle } from './Lifecycle';

class Component implements Lifecycle {
    init() {
        console.log('init')
    }
    destroy() {
        console.log('destroy')

    }
    load() {
        console.log('load')
    }
    unload() {

        console.log('unload')

    }
    render() {
        console.log('render')
    }
}
var lf:Lifecycle = new Component();
lf.init();

