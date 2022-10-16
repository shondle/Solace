// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract PoliceContract {
    
    struct Info {
        address victim;
        string city;
        string state;
        bytes32 zipCode;
        string country;
    }
    
    struct Claim {
        bytes32 eventType;
        string eventDescription;
        uint[2] timeIncident;
        uint[3] dateIncident;
        uint[3] timeReport;
        uint[3] dateReport;
    }

    struct Report {
        Info info;
        Claim claim;
        PrivInfo priv;
    }

    //initial variables
    Info newInfo;
    Claim newClaim;
    Report[] reports;    
    mapping (uint => address) reportToOwner;
    address owner; //initialize this

    //creates new info
    function _newInfo(address _victim, string memory _city, string memory _state, bytes32 _zipCode, string memory _country) public {
        Info memory infoHere = Info(_victim, _city, _state, _zipCode, _country);
        newInfo = infoHere;
    }

    function _newClaim(bytes32 _eventType,
        string memory _eventDescription,
        uint[2] memory _timeIncident,
        uint[3] memory _dateIncident,
        uint[3] memory _timeReport,
        uint[3] memory _dateReport) public {
        Claim memory claimHere= Claim(_eventType,_eventDescription,_timeIncident,_dateIncident,_timeReport,_dateReport);
        newClaim = claimHere;
    }

    function newReport() public {
        Report memory newerReport = Report(newInfo, newClaim);
        reports.push(newerReport);
        uint id = reports.length-1;
        reportToOwner[id] = msg.sender;
    }
}
