import {child, children} from 'aurelia-framework';

export class Parent {
  @child('h1') directChildHTML;
  @child('child') directChildComponent;
  @children('slotted-child') slottedChildren;
  @children('h2') slottedChildrenHTML;

  attached() {
    console.log('direct html element:', this.directChildHTML);
    console.log('direct child component:', this.directChildComponent);
    console.log('slotted child components:', this.slottedChildren);
    console.log('slotted child html elements:', this.slottedChildrenHTML);
  }
}
