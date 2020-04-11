const assert = require("assert");
const Node = require("../Node");

describe("Node Class", () => {
  describe(".addNode()", () => {
    let testNode = new Node("test prompt", "test title", "test scene");
    testNode.addNode("1", "2", "3");
    it("adds Node", () => {
      assert.equal(1, testNode.children.length);
    });

    it("numChildren Increments", () => {
      assert.equal(1, testNode.numChildren);
    });

    it("prompt is correct", () => {
      assert.equal("1", testNode.children[0].prompt);
    });

    it("title is correct", () => {
      assert.equal("2", testNode.children[0].title);
    });

    it("scene is correct", () => {
      assert.equal("3", testNode.children[0].scene);
    });
  });
});
