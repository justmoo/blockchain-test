import Block from "./block";

class Blockahin {
  public chain: Block[];
  constructor() {
    this.chain = [];
    this.init();
  }

  init() {
    if (this.chain.length != 0) {
      return;
    }
    let block = new Block(0, Date.now(), "Genesis Block", "");
    this.chain.push(block);
    console.log(this.chain);
  }

  addBlock(data: string) {
    let previousBlock = this.chain[this.chain.length - 1];
    let newBlock = new Block(
      previousBlock.height + 1,
      Date.now(),
      data,
      previousBlock.hash
    );
    this.chain.push(newBlock);
    console.log(newBlock);
  }

  validateChain() {
    for (let i = 1; i < this.chain.length; i++) {
      let currentBlock = this.chain[i];
      let previousBlock = this.chain[i - 1];
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
      if (currentBlock.previousHash !== previousBlock.hash) {
        console.log("Invalid previous hash");
        return false;
      }
    }
    console.log("Chain is valid");
    return true;
  }
}

export default Blockahin;
