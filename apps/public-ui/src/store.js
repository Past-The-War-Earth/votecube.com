import {Store} from 'svelte/store.js';

class VCStore extends Store {

    toggleMainMenu() {
        const showMainMenu = !this.get().showMainMenu
        this.set({showMainMenu})
    }

    toggleTopMenu() {
        const showTopMenu = !this.get().showTopMenu
        this.set({showTopMenu})
    }

    // setTextToast(
    //     text
    // )
}

export default new VCStore({
    currentValue: {
        x: {
            color: 'FF0000',
            dir: 1,
            valid: true,
            value: 0
        },
        y: {
            color: 'FFFF00',
            dir: 1,
            valid: true,
            value: 100
        },
        z: {
            color: '00FF00',
            dir: 1,
            valid: true,
            value: 0
        },
    },
    showMainMenu: false,
    showTopMenu: false,
    text: [
        "Security: Trumps policies reduce military's over extension and let it focus on the real threats.",
        "Economy: Trump's policies give profound confidence to companies and are good for the economy.",
        "Equality: Trump's policies are better for equality because they are fighting the dominance of globalism and are bringing the jobs back.",
        "Economy: Trump's policies have no real effect on the economy, it's purely cyclical.",
        "Equality: Trump's policies are tailored with the interests of the wealthy in mind and hurt equality.",
        "Security: Trump's policies reduce the trust in our alliances and hurt the stability of the world."
    ],
});