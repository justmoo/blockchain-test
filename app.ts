import Blockahin from "./blockchain";

let bc = new Blockahin();

// add 10 blocks
for (let i = 0; i < 10; i++) {
  setTimeout(() => {}, 1000);
  bc.addBlock("Block " + i);
}
console.log(bc.chain.length + " blocks in the chain");
console.log(bc.validateChain() + " chain is valid");
