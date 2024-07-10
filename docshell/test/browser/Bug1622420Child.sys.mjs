export class Bug1622420Child extends JSWindowActorChild {
  receiveMessage(msg) {
    switch (msg.name) {
      case "hasWindowContextForTopBC":
        return !!this.browsingContext.top.currentWindowContext;
    }
    return null;
  }
}
