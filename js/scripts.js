var numAssignments = 5;
function calcGrade() {
	var totalPercent = 0;
	var sum = 0;
	var numGrades = 0;
	var percents = new Array();
	var grades = new Array();
	var numGrades = 4;
	var hasGrade = false;

	for (var i = 1; i < 6; i++) {
		
		try {
			var percentId = 'class'+i+'PercentId';
			var gradeId = 'class'+i+'GradeId';
			var percent = parseFloat(document.getElementById(percentId).value);
			var grade = parseFloat(document.getElementById(gradeId).value);
			var gradeAndPercent = grade * (percent/100.0);
			
			if (!isNaN(percent) && !isNaN(grade)) {
				totalPercent += percent;
				grades.push(gradeAndPercent);
				hasGrade = true;
			}
		}
		catch(err) {
			alert('grade or percent empty');
		}
	}
	
	var finalPercent = 100.0 - totalPercent;
	/*
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
	*/


	while(grades.length > 0) {
		var grade = grades.pop();
		sum += grade;
	}
	
	if (hasGrade) {
		var A = (90 - sum) / (finalPercent/100.0);
		var B = (80 - sum) / (finalPercent/100.0);
		var C = (70 - sum) / (finalPercent/100.0);
		var D = (60 - sum) / (finalPercent/100.0);
		var F = (50 - sum) / (finalPercent/100.0);
	}
	else {
		clearData();
	}

	if (A > 100 || A < 0) {
		document.getElementById('Grade1Id').innerHTML = "A) <strike>"+A.toFixed(1)+"</strike>";
}
else {
	document.getElementById('Grade1Id').innerHTML = "A) "+A.toFixed(1);
}
if (B > 100 || B < 0)  {
	document.getElementById('Grade2Id').innerHTML = "B) <strike>"+B.toFixed(1)+"</strike>";
}
else {
	document.getElementById('Grade2Id').innerHTML = "B) "+B.toFixed(1);
}
if (C > 100 || C < 0) {
	document.getElementById('Grade3Id').innerHTML = "C) <strike>"+C.toFixed(1)+"</strike>";
}
else {
	document.getElementById('Grade3Id').innerHTML = "C) "+C.toFixed(1);
}
if (D > 100 || D < 0)  {
	document.getElementById('Grade4Id').innerHTML = "D) <strike>"+D.toFixed(1)+"</strike>";
}
else {
	document.getElementById('Grade4Id').innerHTML = "D) "+D.toFixed(1);
}
if (F > 100 || F < 0) {
	document.getElementById('Grade5Id').innerHTML = "F) <strike>"+F.toFixed(1)+"</strike>";
}
else {
	document.getElementById('Grade5Id').innerHTML = "F) "+F.toFixed(1);
}
}

function initialize() {
	clearData();
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

function clearData() {
	for (var i = 1; i < 6; i++) {
		try {
			var nameId = 'class'+i+'NameId';
			var percentId = 'class'+i+'PercentId';
			var gradeId = 'class'+i+'GradeId';

			document.getElementById(nameId).value = null;
			document.getElementById(percentId).value = null;
			document.getElementById(gradeId).value = null;
		}
		catch(err) {}
	}
	for (var i = 1; i < 6; i++) {
		var letter = 'A) ';
		if(i == 2) {letter = 'B) ';}
		else if(i == 3) {letter = 'C) ';}
		else if(i == 4) {letter = 'D) ';}
		else if(i == 5) {letter = 'F) ';}
		var el = document.getElementById('Grade'+i+'Id').innerHTML = letter;

	}
}