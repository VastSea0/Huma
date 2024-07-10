/* Any copyright is dedicated to the Public Domain.
   http://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

// Test some edge cases of the CanvasFrameAnonymousContentHelper event handling
// mechanism.

const TEST_URL =
  "data:text/html;charset=utf-8,CanvasFrameAnonymousContentHelper test";

add_task(async function () {
  const tab = await addTab(TEST_URL);
  await SpecialPowers.spawn(tab.linkedBrowser, [], async function () {
    const { require } = ChromeUtils.importESModule(
      "resource://devtools/shared/loader/Loader.sys.mjs"
    );
    const {
      HighlighterEnvironment,
    } = require("resource://devtools/server/actors/highlighters.js");
    const {
      CanvasFrameAnonymousContentHelper,
    } = require("resource://devtools/server/actors/highlighters/utils/markup.js");
    const doc = content.document;

    const nodeBuilder = () => {
      const root = doc.createElement("div");

      const parent = doc.createElement("div");
      parent.style =
        "pointer-events:auto;width:300px;height:300px;background:yellow;";
      parent.id = "parent-element";
      root.appendChild(parent);

      const child = doc.createElement("div");
      child.style =
        "pointer-events:auto;width:200px;height:200px;background:red;";
      child.id = "child-element";
      parent.appendChild(child);

      return root;
    };

    info("Building the helper");
    const env = new HighlighterEnvironment();
    env.initFromWindow(doc.defaultView);
    const helper = new CanvasFrameAnonymousContentHelper(env, nodeBuilder);
    await helper.initialize();

    info("Getting the parent and child elements");
    const parentEl = helper.getElement("parent-element");
    const childEl = helper.getElement("child-element");

    info("Adding an event listener on both elements");
    let mouseDownHandled = [];
    function onMouseDown(e, id) {
      mouseDownHandled.push(id);
    }
    parentEl.addEventListener("mousedown", onMouseDown);
    childEl.addEventListener("mousedown", onMouseDown);

    function once(target, event) {
      return new Promise(done => {
        target.addEventListener(event, done, { once: true });
      });
    }

    info("Synthesizing an event on the child element");
    let onDocMouseDown = once(doc, "mousedown");
    synthesizeMouseDown(100, 100, doc.defaultView);
    await onDocMouseDown;

    is(mouseDownHandled.length, 2, "The mousedown event was handled twice");
    is(
      mouseDownHandled[0],
      "child-element",
      "The mousedown event was handled on the child element"
    );
    is(
      mouseDownHandled[1],
      "parent-element",
      "The mousedown event was handled on the parent element"
    );

    info("Synthesizing an event on the parent, outside of the child element");
    mouseDownHandled = [];
    onDocMouseDown = once(doc, "mousedown");
    synthesizeMouseDown(250, 250, doc.defaultView);
    await onDocMouseDown;

    is(mouseDownHandled.length, 1, "The mousedown event was handled only once");
    is(
      mouseDownHandled[0],
      "parent-element",
      "The mousedown event was handled on the parent element"
    );

    info("Removing the event listener");
    parentEl.removeEventListener("mousedown", onMouseDown);
    childEl.removeEventListener("mousedown", onMouseDown);

    info("Adding an event listener on the parent element only");
    mouseDownHandled = [];
    parentEl.addEventListener("mousedown", onMouseDown);

    info("Synthesizing an event on the child element");
    onDocMouseDown = once(doc, "mousedown");
    synthesizeMouseDown(100, 100, doc.defaultView);
    await onDocMouseDown;

    is(mouseDownHandled.length, 1, "The mousedown event was handled once");
    is(
      mouseDownHandled[0],
      "parent-element",
      "The mousedown event did bubble to the parent element"
    );

    info("Removing the parent listener");
    parentEl.removeEventListener("mousedown", onMouseDown);

    env.destroy();
    helper.destroy();

    function synthesizeMouseDown(x, y, win) {
      // We need to make sure the inserted anonymous content can be targeted by the
      // event right after having been inserted, and so we need to force a sync
      // reflow.
      win.document.documentElement.offsetWidth;
      EventUtils.synthesizeMouseAtPoint(x, y, { type: "mousedown" }, win);
    }
  });

  gBrowser.removeCurrentTab();
});
