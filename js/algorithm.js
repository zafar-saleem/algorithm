define(function() {

	var Algorithm = {

    init: function (selectees) {
    	this.hkiTeam = [],
    	this.nyTeam  = [],
    	this.result  = {},
    	this.output  = '',
    	this.flag 	 = true,

    	this.selectedEmployees = $('#' + selectees);
    	this.getAllEmployeeIds();
    },

    getAllEmployeeIds: function () {
    	var self = this;

			if (self.flag) {
				$.getJSON('data/employees.json', function (data) {
	    		self.separateTeamIds(data, self.hkiTeam, self.nyTeam);
	    		self.invitees(self.hkiTeam, self.nyTeam, self.result);
		    		
					for (var n in self.result) {
					  self.output += '<li>' + n + '</li>';
					}
					
					$(selectees).html(self.output);
						self.flag = false;
		    	});
			}
    },

    separateTeamIds: function (data, hkiTeam, nyTeam) {
			for (var i = 0; i < data.length; i++) {
		    var el 		= data[i].split(' ');
		    hkiTeam[i]  = el[0];
		    nyTeam[i]   = el[1];
			}
    },

    invitees: function (hkiTeam, nyTeam, result) {
    	for (var k = 0; k < hkiTeam.length; k++) {
		    var nOfFirst = this.countElements(hkiTeam, hkiTeam[k]),
		    	nOfSecond  = this.countElements(nyTeam, nyTeam[k]);
		    
		    if (nOfFirst > nOfSecond) {
		      result[hkiTeam[k]] = 0;
		    } else if (nOfFirst < nOfSecond) {
		      result[nyTeam[k]] = 0;
		    } else {
		      result[hkiTeam[k]] = 0;
		    }
			}
    },

    countElements: function (arr, el) {
    	var count = 0;

	    for (var j = 0; j < arr.length; j++) {
        if(arr[j] == el) {
        	count++;
        }
	    }

	    return count;
    }
	};

	return Algorithm;

});