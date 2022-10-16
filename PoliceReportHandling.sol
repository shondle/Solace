// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract PoliceContract {
    
    //struct for background info of victim
    struct Info {
        address victim;
        bytes32 firstName;
        bytes32 lastName;
        bytes32 gender;
        bytes32 DOB;
        bytes32 phoneNumber;
        bytes32 race;
        string city;
        string state;
        bytes32 zipCode;
        string country;
    }
    
    //incident descriptions in claim
    struct Claim {
        bytes32 eventType;
        string eventDescription;
        uint[2] timeIncident;
        uint[3] dateIncident;
        uint[3] timeReport;
        uint[3] dateReport;
    }

    //personal info for person submitting the report
    struct PrivInfo {
        bytes32 firstName;
        bytes32 lastName;
        bytes32 gender;
        bytes32 DOB;
        bytes32 phoneNumber;
        bytes32 race;
        string homeAddress;
    }

    //all data related to the report
    struct Report {
        Info info;
        Claim claim;
        PrivInfo priv;
    }

    //initial variables
    Info newInfo;
    PrivInfo priv;
    Claim newClaim;
    Report[] reports;    
    mapping (uint => address) reportToOwner;

    //creates new info
    function _newInfo(address _victim, bytes32 _firstName, bytes32 _lastName, bytes32 _gender, bytes32 _DOB, bytes32 _phoneNumber, bytes32 _race, string memory _city, string memory _state, bytes32 _zipCode, string memory _country) public {
        Info memory infoHere = Info(_victim, _firstName, _lastName, _gender, _DOB, _phoneNumber, _race, _city, _state, _zipCode, _country);
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

    function privInfo(bytes32 _firstName, bytes32 _lastName, bytes32 _gender, bytes32 _DOB, bytes32 _phoneNumber, bytes32 _race, string memory _homeAddress) public {
        priv = PrivInfo(_firstName, _lastName, _gender, _DOB, _phoneNumber, _race, _homeAddress);
    }

    function newReport() public {
        Report memory newerReport = Report(newInfo, newClaim, priv);
        reports.push(newerReport);
        uint id = reports.length-1;
        reportToOwner[id] = msg.sender;
    }
}
