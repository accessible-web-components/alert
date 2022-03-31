import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
})
export class MyComponent {
  /**
   * The alert message
   */
  @Prop() message: string;

  render() {
    return <div class="alert alert-info">{this.message}</div>;
  }
}
