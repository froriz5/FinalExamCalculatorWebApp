function calcGrade() {
	//var grade1, grade2, grade3, grade4, grade5, grade6;
	var totalPercent = 0;
	var sum = 0;
	var numGrades = 0;
	var percents = new Array();
	var grades = new Array();
	var numGrades = 4;

	for (var i = 1; i < 6; i++) {
		var id = 'class'+i+'PercentId';
		try {
			var percent = parseFloat(document.getElementById(id).value);
			
			if (!isNaN(percent)) {
				//alert('percent: '+percent);
				totalPercent += percent;
			}
		}
		catch(err) {}

	}
	//alert('percent total: '+totalPercent);
	
	var finalPercent = 100.0 - totalPercent;
	for (var i = 1; i < numGrades+1; i++) {
		try {
			var grade = parseFloat(document.getElementById('class'+i+'GradeId').value) *
			(parseFloat((document.getElementById('class'+i+'PercentId').value)/100));

			if (!isNaN(grade)) {
				//alert('grade:'+grade);
				grades.push(grade);
			}
		}
		catch(err) {}
		
	}


	while(grades.length > 0) {
		var grade = grades.pop();
		alert('grade: '+grade); 
		sum += grade;
	}
	//sum = grade1 + grade2 + grade3;// + grade4 + grade5 + grade6;
	alert('sum: '+sum);
	alert('final percent: '+finalPercent);
	
	var A = (90 - sum) / (finalPercent/100.0)
	var B = (80 - sum) / (finalPercent/100.0)
	var C = (70 - sum) / (finalPercent/100.0)
	var D = (60 - sum) / (finalPercent/100.0)
	var F = (50 - sum) / (finalPercent/100.0)

	if (A > 100 || A < 0) 
		document.getElementById('aGradeId').innerHTML = "A) <strike>"+A.toFixed(1)+"</strike>";
else
	document.getElementById('aGradeId').innerHTML = "A) "+A.toFixed(1);
if (B > 100 || B < 0) 
	document.getElementById('bGradeId').innerHTML = "B) <strike>"+B.toFixed(1)+"</strike>";
else
	document.getElementById('bGradeId').innerHTML = "B) "+B.toFixed(1);
if (C > 100 || C < 0) 
	document.getElementById('cGradeId').innerHTML = "C) <strike>"+C.toFixed(1)+"</strike>";
else
	document.getElementById('cGradeId').innerHTML = "C) "+C.toFixed(1);
if (D > 100 || D < 0) 
	document.getElementById('dGradeId').innerHTML = "D) <strike>"+D.toFixed(1)+"</strike>";
else
	document.getElementById('dGradeId').innerHTML = "D) "+D.toFixed(1);
if (F > 100 || F < 0) 
	document.getElementById('fGradeId').innerHTML = "F) <strike>"+F.toFixed(1)+"</strike>";
else
	document.getElementById('fGradeId').innerHTML = "F) "+F.toFixed(1);
}

function initialize() {
	document.getElementById('class1NameId').value = "HW";
	document.getElementById('class2NameId').value = "Quizzes";
	document.getElementById('class3NameId').value = "Tests";
	//document.getElementById('class4NameId').value = "Midterm";
	//document.getElementById('class5NameId').value = "Projects";
	//document.getElementById('class6NameId').value = "Participation";

	document.getElementById('class1PercentId').value = 5;
	document.getElementById('class2PercentId').value = 15;
	document.getElementById('class3PercentId').value = 20;
	//document.getElementById('grade4PercentInputId').value = 20;
	//document.getElementById('grade5PercentInputId').value = 20;
	//document.getElementById('grade6PercentInputId').value = 5;

	document.getElementById('class1GradeId').value = 90;
	document.getElementById('class2GradeId').value = 85;
	document.getElementById('class3GradeId').value = 90;
	//document.getElementById('grade4InputId').value = 83;
	//document.getElementById('grade5InputId').value = 85;
	//document.getElementById('grade6InputId').value = 70;
}