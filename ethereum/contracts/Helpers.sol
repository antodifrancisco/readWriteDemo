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

  function getTokenInfo(uint256 _tokenID) public view onlyRole(DEFAULT_ADMIN_ROLE) returns (TokenInfo memory)  {
    return listTokenInfo[_tokenID];
  }


}


