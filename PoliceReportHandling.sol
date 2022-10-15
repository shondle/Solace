// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract PoliceContract {
    
    struct Report {
        string name;
        string homeAddress;
        string city;
        string state;
        uint zipcode;
        uint phoneNumber;
        uint[3] DOB;

        //claims
        string[] itemsLost;
        string eventDescription;
        string natureComplaint;
        uint[3] timeIncident;
        uint[3] dateIncident;
        uint[3] timeReport;
        uint[3] dateReport;

    }

    Report[] public reports;    
    mapping (uint => address) public reportToOwner;

    function _createReport(string memory _name, string memory _address, string memory _city,
    string memory _state, uint _zipcode, uint _phoneNumber, 
    uint[3] memory _DOB, string[] memory _itemsLost, string memory _eventDescription, 
    string memory _natureComplaint, uint[3] memory _timeIncident, uint[3] memory _dateIncident, uint[3] memory _timeReport,
    uint[3] memory _dateReport) public {

        Report memory newReport = Report(_name, _address, _city, _state, _zipcode, _phoneNumber, _DOB, _itemsLost, _eventDescription, 
        _natureComplaint, _timeIncident, _dateIncident, _timeReport,
        _dateReport);
        reports.push(newReport);
        uint id = reports.length-1;
        reportToOwner[id] = msg.sender;
    }
}
