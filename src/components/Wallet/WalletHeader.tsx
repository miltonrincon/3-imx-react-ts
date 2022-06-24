import React, {useEffect, useState} from 'react';
import "./WalletStyles.css"
import {ImmutableMethodResults, ImmutableXClient, Link} from "@imtbl/imx-sdk";

const WalletHeader = () => {

  const linkAddress = 'https://link.ropsten.x.immutable.com';
  const link = new Link(linkAddress)

  const [tab, setTab] = useState('marketplace');
  const [wallet, setWallet] = useState('');
  const [balance, setBalance] = useState<ImmutableMethodResults.ImmutableGetBalanceResult>(Object);
  const [client, setClient] = useState<ImmutableXClient>(Object);

  useEffect(() => {
    buildIMX()
  }, [])


  async function buildIMX() {
    const publicApiUrl: string = linkAddress ?? '';
    setClient(await ImmutableXClient.build({publicApiUrl}))
  }

  // register and/or setup a user
  async function linkSetup(): Promise<void> {
    const res = await link.setup({})
    setWallet(res.address)
    setBalance(await client.getBalance({user: res.address, tokenAddress: 'eth'}))
  }


  return (
    <div className="wallet-header">
      <button onClick={linkSetup}>Connect Wallet</button>
      <div>{wallet}</div>
    </div>
  )
}

export default WalletHeader

