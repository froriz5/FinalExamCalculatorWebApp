function calcGrade() {
	var grade1, grade2, grade3, grade4, grade5, grade6;
	var totalPercent = 0;
	var sum = 0;

	totalPercent += parseFloat(document.getElementById('grade1PercentInputId').value);
	totalPercent += parseFloat(document.getElementById('grade2PercentInputId').value);
	totalPercent += parseFloat(document.getElementById('grade3PercentInputId').value);
	totalPercent += parseFloat(document.getElementById('grade4PercentInputId').value);
	totalPercent += parseFloat(document.getElementById('grade5PercentInputId').value);
	totalPercent += parseFloat(document.getElementById('grade6PercentInputId').value);
	
	var finalPercent = 100.0 - totalPercent;

	grade1 = parseFloat(document.getElementById('grade1InputId').value) *
		     (parseFloat((document.getElementById('grade1PercentInputId').value)/100));

    //alert(grade1);
	
	grade2 = parseFloat(document.getElementById('grade2InputId').value) *
		     (parseFloat((document.getElementById('grade2PercentInputId').value)/100));
	
	grade3 = parseFloat(document.getElementById('grade3InputId').value) *
		     (parseFloat((document.getElementById('grade3PercentInputId').value)/100));
	
	grade4 = parseFloat(document.getElementById('grade4InputId').value) *
		     (parseFloat((document.getElementById('grade4PercentInputId').value)/100));
	
	grade5 = parseFloat(document.getElementById('grade5InputId').value) *
		     (parseFloat((document.getElementById('grade5PercentInputId').value)/100));
	
	grade6 = parseFloat(document.getElementById('grade6InputId').value) *
		     (parseFloat((document.getElementById('grade6PercentInputId').value)/100));
	
	sum = grade1 + grade2 + grade3 + grade4 + grade5 + grade6;
	
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
	document.getElementById('class3NameId').value = "Midterm";
	document.getElementById('class4NameId').value = "Tests";
	document.getElementById('class5NameId').value = "Projects";
	document.getElementById('class6NameId').value = "Participation";

	document.getElementById('grade1PercentInputId').value = 5;
	document.getElementById('grade2PercentInputId').value = 15;
	document.getElementById('grade3PercentInputId').value = 20;
	document.getElementById('grade4PercentInputId').value = 20;
	document.getElementById('grade5PercentInputId').value = 20;
	document.getElementById('grade6PercentInputId').value = 5;

	document.getElementById('grade1InputId').value = 90;
	document.getElementById('grade2InputId').value = 85;
	document.getElementById('grade3InputId').value = 90;
	document.getElementById('grade4InputId').value = 83;
	document.getElementById('grade5InputId').value = 85;
	document.getElementById('grade6InputId').value = 70;
}