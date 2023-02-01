import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import keys from "../../config/keys";

const sdk = ThirdwebSDK.fromPrivateKey(
  keys.thirdWebPrivateKey,
  "arbitrum-goerli"
);

const contractAddress = "0x91d4CABA4d03f64a72b36c023B3f272B5Bcc4ac2";

export default async function readToken(req, res) {
  const contract = await sdk.getContract(contractAddress);

  try {
    const { data } = JSON.parse(req.body);
    console.log("TokenIDs: ", data);
    const tokensData = await contract.call("getTokenInfo", data);
    console.log("Tokens Data: ", tokensData);
    res.status(200).json({
      tokensData: tokensData,
    });
  } catch (e) {
    console.log("Error: ", e);
    res.status(500).json({ error: `Server error ${e}` });
  }
}
