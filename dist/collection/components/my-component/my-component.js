import { } from '@stencil/core';
export class MyComponent {
    render() {
        return (h("div", null,
            "Hello, World! I'm ",
            this.first,
            " ",
            this.last));
    }
}
