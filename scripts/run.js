// deploy.js
const main = async () => {
  const [owner, addr1, addr2] = await hre.ethers.getSigners();
  // コントラクトがコンパイルします
  // コントラクトを扱うために必要なファイルが `artifacts` ディレクトリの直下に生成されます。
  const nftContractFactory = await hre.ethers.getContractFactory("MeetingSBT");
  // Hardhat がローカルの Ethereum ネットワークを作成します。
  const nftContract = await nftContractFactory.deploy();
  // コントラクトが Mint され、ローカルのブロックチェーンにデプロイされるまで待ちます。
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  //set metadata URI
  let txn = await nftContract.setURI("ipfs://bafybeidufobrlmgwkoa47jokicab3phxlrvif3pxelhklwok6dvxpezmo4/{id}")
  await txn.wait();
  //set name
  txn = await nftContract.setName("KLAB Event SBT");
  await txn.wait();
  //set symbol
  txn = await nftContract.setSymbol("KLAB");
  await txn.wait();
  
  let MINTER_ROLE = await nftContract.MINTER_ROLE();
  console.log(MINTER_ROLE);

  // // NFT が Mint される。
  // txn = await nftContract.mint(owner.address, 0, 1, "0x");
  // // Minting が仮想マイナーにより、承認されるのを待ちます。
  // await txn.wait();
  // console.log("Minted NFT");

  // let tokenURI = await nftContract.uri(0);
  // console.log("tokenURI = ", tokenURI);


  //approve失敗のテスト
  //txn = await nftContract.approve('0x2382E6C9Cde357A3fA3ECdD255DefD3499e572F4',owner.address);
  //await txn.wait();

  //txn = await nftContract.tokenURI(0);
  // Minting が仮想マイナーにより、承認されるのを待ちます。
  //await txn.wait();
  //console.log("tokenURI = :", txn);

  //複数アドレスにAirDropする
  addresses = ['0x2382E6C9Cde357A3fA3ECdD255DefD3499e572F4', '0x45a31DADb208B200a9E80EdbE49E537882D45F49'];
  txn = await nftContract.airDrop(addresses,0);
  await txn.wait();

  //allBurn test
  //txn = await nftContract.allBurn();
  //await txn.wait();


  //checkadmin
  //txn = await nftContract.checkAdmin(owner.address);
  //await txn.wait();
  //console.log(txn);
  //txn = await nftContract.checkAdmin('0x45a31DADb208B200a9E80EdbE49E537882D45F49');
  //await txn.wait();
  //console.log(txn);


  //adminに未登録のユーザではエラー
  //txn = await nftContract.connect(addr1).airDrop(addresses);
  //await txn.wait();
  //addr1にadmin付与
  //txn = await nftContract.addAdmin(addr1.address);
  //await txn.wait();

  //txn = await nftContract.connect(addr1).airDrop(addresses);
  //await txn.wait();
  //console.log(txn);
};
// エラー処理を行っています。
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
runMain();