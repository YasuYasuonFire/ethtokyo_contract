// deploy.js
const main = async () => {
    const [owner, addr1, addr2] = await hre.ethers.getSigners();
    // コントラクトがコンパイルします
    // コントラクトを扱うために必要なファイルが `artifacts` ディレクトリの直下に生成されます。
    const nftContractFactory = await hre.ethers.getContractFactory("ETHGlobalTokyoSBT");
    // Hardhat がローカルの Ethereum ネットワークを作成します。
    const nftContract = await nftContractFactory.deploy();
    // コントラクトが Mint され、ローカルのブロックチェーンにデプロイされるまで待ちます。
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

    //set metadata URI
    // let txn = await nftContract.setURI("https://storage.googleapis.com/klab-sbt.appspot.com/json/{id}")
    // let txn = await nftContract.setURI("https://storage.googleapis.com/sbtdatastorage/01_test/json/{id}") //for Aki test
    let txn = await nftContract.setURI("https://storage.googleapis.com/ethglobaltokyo/metadata/{id}") //main
    await txn.wait();


    //set name
    txn = await nftContract.setName("ETHGlobalTokyoSBT");
    await txn.wait();
    //set symbol
    txn = await nftContract.setSymbol("TOKYO");
    await txn.wait();

    // // NFT が Mint される。
    // txn = await nftContract.safeMint(owner.address);
    // // Minting が仮想マイナーにより、承認されるのを待ちます。
    // await txn.wait();
    // console.log("Minted NFT #1");

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