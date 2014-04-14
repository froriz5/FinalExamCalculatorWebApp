var numAssignments = 5;
function calcGrade() {
	var totalPercent = 0;
	var sum = 0;
	var numGrades = 0;
	var percents = new Array();
	var grades = new Array();
	var numGrades = 4;

	for (var i = 1; i < 6; i++) {
		
		try {
			var id = 'class'+i+'PercentId';
			var percent = parseFloat(document.getElementById(id).value);
			
			if (!isNaN(percent)) {
				totalPercent += percent;
			}
		}
		catch(err) {}
	}
	
	var finalPercent = 100.0 - totalPercent;
	for (var i = 1; i < numGrades+1; i++) {
		try {
			var grade = parseFloat(document.getElementById('class'+i+'GradeId').value) *
			(parseFloat((document.getElementById('class'+i+'PercentId').value)/100));

			if (!isNaN(grade)) {
				grades.push(grade);
			}
		}
		catch(err) {}
		
	}


	while(grades.length > 0) {
		var grade = grades.pop();
		sum += grade;
	}
	
	var A = (90 - sum) / (finalPercent/100.0);
	var B = (80 - sum) / (finalPercent/100.0);
	var C = (70 - sum) / (finalPercent/100.0);
	var D = (60 - sum) / (finalPercent/100.0);
	var F = (50 - sum) / (finalPercent/100.0);

	if (A > 100 || A < 0) {
		document.getElementById('aGradeId').innerHTML = "A) <strike>"+A.toFixed(1)+"</strike>";
	}
	else {
		document.getElementById('aGradeId').innerHTML = "A) "+A.toFixed(1);
	}
	if (B > 100 || B < 0)  {
		document.getElementById('bGradeId').innerHTML = "B) <strike>"+B.toFixed(1)+"</strike>";
	}
	else {
		document.getElementById('bGradeId').innerHTML = "B) "+B.toFixed(1);
	}
	if (C > 100 || C < 0) {
		document.getElementById('cGradeId').innerHTML = "C) <strike>"+C.toFixed(1)+"</strike>";
	}
	else {
		document.getElementById('cGradeId').innerHTML = "C) "+C.toFixed(1);
	}
	if (D > 100 || D < 0)  {
		document.getElementById('dGradeId').innerHTML = "D) <strike>"+D.toFixed(1)+"</strike>";
	}
	else {
		document.getElementById('dGradeId').innerHTML = "D) "+D.toFixed(1);
	}
	if (F > 100 || F < 0) {
		document.getElementById('fGradeId').innerHTML = "F) <strike>"+F.toFixed(1)+"</strike>";
	}
	else {
		document.getElementById('fGradeId').innerHTML = "F) "+F.toFixed(1);
	}
}

function initialize() {
	document.getElementById('class1NameId').value = "HW";
	document.getElementById('class2NameId').value = "Quizzes";
	document.getElementById('class3NameId').value = "Tests";

	document.getElementById('class1PercentId').value = 5;
	document.getElementById('class2PercentId').value = 15;
	document.getElementById('class3PercentId').value = 20;

	document.getElementById('class1GradeId').value = 90;
	document.getElementById('class2GradeId').value = 85;
	document.getElementById('class3GradeId').value = 90;
}