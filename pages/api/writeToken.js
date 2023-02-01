import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import keys from "../../config/keys";

const sdk = ThirdwebSDK.fromPrivateKey(
  keys.thirdWebPrivateKey,
  "arbitrum-goerli"
);

const contractAddress = "0x91d4CABA4d03f64a72b36c023B3f272B5Bcc4ac2";

export default async function saveImages(req, res) {
  const contract = await sdk.getContract(contractAddress);

  try {
    const { _tokenID, _firstLink, _secondLink, _thirdLink, _fourthLink } =
      JSON.parse(req.body);

    const tempData = await contract.call(
      "updateTokenInfo",
      _tokenID,
      _firstLink,
      _secondLink,
      _thirdLink,
      _fourthLink,
      ""
    );

    res.status(200).json({
      data: tempData,
    });
  } catch (e) {
    res.status(500).json({ error: `Server error ${e}` });
  }
}
