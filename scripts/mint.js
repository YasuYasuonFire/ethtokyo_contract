// deploy.js
const main = async () => {
  const [owner, addr1, addr2] = await hre.ethers.getSigners();
  
  const ADDRESS = "0x52B5B9a6AEB482c17Bb83b094A7c01E61275B1B2"
  const nftContract = await hre.ethers.getContractAt("ETHGlobalTokyoSBT", ADDRESS);

  // NFT が Mint される。
  txn = await nftContract.mint(owner.address, 0, 1, "0x");
  // Minting が仮想マイナーにより、承認されるのを待ちます。
  await txn.wait();
  console.log("Minted NFT");

  // NFT が Mint される。
  txn = await nftContract.mint(owner.address, 0, 1, "0x");
  // Minting が仮想マイナーにより、承認されるのを待ちます。
  await txn.wait();
  console.log("Minted NFT");

  // // NFT が Mint される。
  // txn = await nftContract.mint("0x2382E6C9Cde357A3fA3ECdD255DefD3499e572F4", 0, 1, "0x");
  // // Minting が仮想マイナーにより、承認されるのを待ちます。
  // await txn.wait();
  // console.log("Minted NFT");

  
  // // NFT が Mint される。
  // txn = await nftContract.mint("0x45a31DADb208B200a9E80EdbE49E537882D45F49", 1, 1, "0x");
  // // Minting が仮想マイナーにより、承認されるのを待ちます。
  // await txn.wait();
  // console.log("Minted NFT");


  // let tokenURI = await nftContract.tokenURI(0);
  // console.log("tokenURI = ", tokenURI);

  //txn = await nftContract.tokenURI(0);
  // Minting が仮想マイナーにより、承認されるのを待ちます。
  //await txn.wait();
  //console.log("tokenURI = :", txn);

  //複数アドレスにAirDropする
  //addresses = ['0x2382E6C9Cde357A3fA3ECdD255DefD3499e572F4', '0x45a31DADb208B200a9E80EdbE49E537882D45F49'];
  //txn = await nftContract.airDrop(addresses);
  //await txn.wait();

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