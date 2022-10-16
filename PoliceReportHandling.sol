// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract PoliceContract {
    
    //struct for background info of victim
    struct Info {
        string city;
        string state;
        string zipCode;
        string country;
    }
    
    //incident descriptions in claim
    struct Claim {
        string eventType;
        string eventDescription;
        string timeIncident;
        string dateIncident;
        string timeReport;
        string dateReport;
    }

    //personal info for person submitting the report
    struct PrivInfo {
        string firstName;
        string lastName;
        string gender;
        string DOB;
        string phoneNumber;
        string race;
    }

    //all data related to the report
    struct Report {
        Info info;
        Claim claim;
        PrivInfo priv;
    }

    //initial variables
    Info public newInfo;
    PrivInfo public priv;
    Claim public newClaim;
    Report[] public reports;
    mapping (uint => address) public reportToOwner;

    //creates new info
    function _newInfo(string memory _city, string memory _state, string memory _zipCode, string memory _country) public {
        Info memory infoHere = Info(_city, _state, _zipCode, _country);
        newInfo = infoHere;
    }

    function _newClaim(string memory _eventType,
        string memory _eventDescription,
        string memory _timeIncident,
        string memory _dateIncident,
        string memory _timeReport,
        string memory _dateReport) public {
        Claim memory claimHere= Claim(_eventType, _eventDescription, _timeIncident, _dateIncident, _timeReport, _dateReport);
        newClaim = claimHere;
    }

    function privInfo(string memory _firstName, string memory _lastName, string memory _gender, string memory _DOB, string memory _phoneNumber, string memory _race) public {
        priv = PrivInfo(_firstName, _lastName, _gender, _DOB, _phoneNumber, _race);
    }

    function newReport() public {
        Report memory newerReport = Report(newInfo, newClaim, priv);
        reports.push(newerReport);
        uint id = reports.length-1;
        reportToOwner[id] = msg.sender;
    }
}
