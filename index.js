class Node {
  constructor(prompt, title, scene) {
    this.prompt = prompt;
    this.title = title;
    this.scene = scene;
    this.children = [];
    this.numChildren = 0;
  }

  addNode(prompt, title, scene) {
    this.children.push(new Node(title, prompt, scene));
    this.numChildren++;
  }

  printContent() {
    console.log("Printing contents of current Node");
    console.log(`Prompt: ${this.prompt}`);
    console.log(`Title: ${this.title}`);
    console.log(`Scene: ${this.scene}`);
    console.log(`Children: ${this.numChildren}`);
  }

  printChildren() {
    this.children.forEach((i, j) => {
      console.log(`${j}: ${i.prompt}`);
    });
  }
}
