import sha256 from "crypto-js/sha256";
class Block {
  public hash;
  public nonce: number;
  constructor(
    public height: number,
    public timestamp: number,
    public data: string,
    public previousHash: string
  ) {
    this.height = height;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    [this.hash, this.nonce] = this.calculateHashForBlockNonce();
  }
  calculateHash() {
    return sha256(
      this.height + this.timestamp + this.data + this.previousHash + this.nonce
    ).toString();
  }

  calculateHashForBlockNonce(): any {
    let hashFound = false;
    let num = 0;

    while (!hashFound) {
      num++;
      let magicHash = sha256(
        this.height + this.timestamp + this.data + this.previousHash + num
      ).toString();
      if (magicHash.substring(0, 4) === "0000") {
        hashFound = true;
        return [magicHash, num];
      }
    }
  }
}

export default Block;
