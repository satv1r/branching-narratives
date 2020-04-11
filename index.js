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

let rootNode = new Node(null, "Episode 1", "What will happen today?");

rootNode.addNode(
  "go for a walk",
  "Episode 1A",
  "Our character went for a walk today."
);
rootNode.addNode(
  "watch tv",
  "Episode 1B",
  "Our character stayed home and watched tv today."
);
rootNode.addNode(
  "do some chores",
  "Episode 1C",
  "Our character completed a whole bunch of chores today."
);
