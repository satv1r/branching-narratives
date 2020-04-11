const Node = require("./Node");

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

rootNode.printContent();
rootNode.printChildren();
