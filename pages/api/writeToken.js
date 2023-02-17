import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import keys from "../../config/keys";

const sdk = ThirdwebSDK.fromPrivateKey(keys.thirdWebPrivateKey, "arbitrum");

const contractAddress = "0xCe79c48Ecad7521099F12408B42E2Dfcb0a25c46";

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
      "abcderet"
    );

    res.status(200).json({
      data: tempData,
    });
  } catch (e) {
    res.status(500).json({ error: `Server error ${e}` });
  }
}
