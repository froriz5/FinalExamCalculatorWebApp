<!doctype html>
<html>
  <head>
    <title>Final Exam Calculator</title>
    <link href="css/style.css" type="text/css" rel="stylesheet" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="js/scripts.js"></script>
  </head>

  <body>
    <div id="topPanel">
      <p id="introText">If you are going into your Final Exam, and want to know what score you need to get,
      in order to get a certain letter grade in the class (A, B, C, D, or F), this app will
      calculate it for you.
    </p>
    </div>
    <div id="mainPanel">

      <div id="classesPanel">
        <div id="class1">
          <div id="class1Name">
            <label id="classNameLabel">Grade Type</label>
            <br>
            <input id="class1NameId" type="text" placeholder="Assignment Type">
          </div>
          <div id="class1GradePercent">
            <label id="gradePercentLabel">Grade Percent</label>
            <br>
            <input id="grade1PercentInputId" type="number" name="Grade Percentage" placeholder="Grade Percent">
          </div>
          <div id="class1Grade">
            <label id="gradeLabel">Grade</label>
            <br>
            <input id="grade1InputId" type="number" name="Grade" placeholder="Grade">
          </div>
        </div>
        <br>

        <div id="class2">
          <div id="class2Name">
            <input id="class2NameId" type="text" name="Class Name" placeholder="Assignment Type">
          </div>
          <div id="class2GradePercent">
            <input id="grade2PercentInputId" type="number" name="Grade Percentage" placeholder="Grade Percent">
          </div>
          <div id="class2Grade">
            <input id="grade2InputId" type="number" name="Grade" placeholder="Grade">
          </div>
        </div>
        <br>

        <div id="class3">
          <div id="class3Name">
            <input id="class3NameId" type="text" name="Class Name" placeholder="Assignment Type">
          </div>
          <div id="class3GradePercent">
            <input id="grade3PercentInputId" type="number" name="Grade Percentage" placeholder="Grade Percent">
          </div>
          <div id="class3Grade">
            <input id="grade3InputId" type="number" name="Grade" placeholder="Grade">
          </div>
        </div>
        <br>

        <div id="class4">
          <div id="class4Name">
            <input id="class4NameId" type="text" name="Class Name" placeholder="Assignment Type">
          </div>
          <div id="class4GradePercent">
            <input id="grade4PercentInputId" type="number" name="Grade Percentage" placeholder="Grade Percent">
          </div>
          <div id="class4Grade">
            <input id="grade4InputId" type="number" name="Grade" placeholder="Grade">
          </div>
        </div>
        <br>

        <div id="class5">
          <div id="class5Name">
            <input id="class5NameId" type="text" name="Class Name" placeholder="Assignment Type">
          </div>
          <div id="class5GradePercent">
            <input id="grade5PercentInputId" type="number" name="Grade Percentage" placeholder="Grade Percent">
          </div>
          <div id="class5Grade">
            <input id="grade5InputId" type="number" name="Grade" placeholder="Grade">
          </div>
        </div>
        <br>

        <div id="class6">
          <div id="class6Name">
            <input id="class6NameId" type="text" name="Class Name" placeholder="Assignment Type">
          </div>
          <div id="class6GradePercent">
            <input id="grade6PercentInputId" type="number" name="Grade Percentage" placeholder="Grade Percent">
          </div>
          <div id="class6Grade">
            <input id="grade6InputId" type="number" name="Grade" placeholder="Grade">
          </div>
        </div>
        <br>

      </div>


      <div id="gradePanel">
        <div id="initButtonId">
          <button id="initButton" type="button" onclick="initialize()">Initialize Dummy Data</button>
        </div>
        <div id="calcButtonId">
          <button id="calcButton" type="button" onclick="calcGrade()">Calculate Final Exam Score</button>
        </div>

        <div id="gradeInfo">
          <div id="gradeAInfo">
            <p id="aGradeId">A)</p>
            
          </div>
          <div id="gradeBInfo">
            <p id="bGradeId">B)</p>
          </div>
          <div id="gradeCInfo">
            <p id="cGradeId">C)</p>
          </div>
          <div id="gradeDInfo">
            <p id="dGradeId">D)</p>
          </div>
          <div id="gradeFInfo">
            <p id="fGradeId">F)</p>
          </div>
        </div>
      </div>

    </div>
  </body>
</html>