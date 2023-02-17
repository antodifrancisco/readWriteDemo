// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@thirdweb-dev/contracts/extension/Permissions.sol";

contract Helpers is Permissions {
    
    struct TokenInfo {
        uint256 tokenID;
        string firstLink;
        string secondLink;
        string thirdLink;
        string fourthLink;
        string mintedLink;
    }

    mapping(uint256 => TokenInfo) public listTokenInfo;

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }
    
    event newTokenInfoSaved (uint256);
    
    function updateTokenInfo(uint256 _tokenID,  string memory _firstLink, string memory _secondLink, string memory _thirdLink, string memory _fourthLink, string memory _mintedLink) public onlyRole(DEFAULT_ADMIN_ROLE) {
    
    TokenInfo memory newTokenInfo = TokenInfo({
            tokenID: _tokenID,
            firstLink: _firstLink,
            secondLink: _secondLink,
            thirdLink: _thirdLink,
            fourthLink: _fourthLink,
            mintedLink: _mintedLink
        });

    listTokenInfo[_tokenID] = newTokenInfo;
    emit newTokenInfoSaved (_tokenID);
  }

  function updateTokenListInfo(uint256[] memory _originalTokenIDs,  string[] memory _firstLinks, string[] memory _secondLinks, string[] memory _thirdLinks, string[] memory _fourthLinks, string[] memory _mintedLinks) public onlyRole(DEFAULT_ADMIN_ROLE) {
    
    for (uint i = 0; i < _originalTokenIDs.length; i++) {
      TokenInfo memory newTokenInfo = TokenInfo({
            tokenID: _originalTokenIDs[i],
            firstLink: _firstLinks[i],
            secondLink: _secondLinks[i],
            thirdLink: _thirdLinks[i],
            fourthLink: _fourthLinks[i],
            mintedLink: _mintedLinks[i]
        });

    listTokenInfo[_originalTokenIDs[i]] = newTokenInfo;
    }
    
  }


  function getTokenInfo(uint256 _tokenID) public view onlyRole(DEFAULT_ADMIN_ROLE) returns (TokenInfo memory)  {
    return listTokenInfo[_tokenID];
  }


}


