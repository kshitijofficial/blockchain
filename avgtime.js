const Blockchain = require("./blockchain");
const blockchain = new Blockchain();

blockchain.addBlock({ data: "new data" });
console.log(blockchain.chain[blockchain.chain.length - 1]);
let prevTimestamp, nextTimestamp, nextBlock, timeDiff, averageTime;

const times = [];

for (let i = 0; i < 1000; i++) {
  prevTimestamp = blockchain.chain[blockchain.chain.length - 1].timestamp;

  blockchain.addBlock({ data: `block ${i}` });
  nextBlock = blockchain.chain[blockchain.chain.length - 1];
  nextTimestamp = nextBlock.timestamp;

  timeDiff = nextTimestamp - prevTimestamp;

  times.push(timeDiff);

  averageTime = times.reduce((total, num) => total + num) / times.length;

  console.log(
    `Time to mine block :${timeDiff}ms,Difficulty:${nextBlock.difficulty},Average time:${averageTime}ms`
  );
}
