// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Report {
    
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

    function _createReport(string memory _name, string memory _address, string memory _city, string memory _state, uint _zipcode, uint _phoneNumber, uint _DOB) public {
        Report newReport = new ReportLabels(_name, _address, _city, _state, _zipcode, _phoneNumber, _DOB);
        uint id = reports.push(newReport) - 1;
        reportToOwner[id] = msg.sender;
    }
}
