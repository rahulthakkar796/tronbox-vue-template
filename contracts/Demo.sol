pragma solidity 0.4.25;
contract Demo{
  string public name;
  function setName(string _name)public{
    name=_name;
  }
}