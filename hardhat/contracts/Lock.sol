// SPDX-License-Identifier: Unlicensed

pragma solidity >=0.8.13 <0.8.20;

import "fhevm/lib/TFHE.sol";

contract Counter {
    euint32 public counter;

    function add(bytes calldata encryptedValue) public {
        euint32 value = TFHE.asEuint32(encryptedValue);
        counter = TFHE.add(counter, value);
    }

    function getCounter(
        bytes32 publicKey
    ) external view returns (bytes memory) {
        return TFHE.reencrypt(counter, publicKey);
    }
}
