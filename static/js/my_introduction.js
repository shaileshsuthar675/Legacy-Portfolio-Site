var my_introduction_Element = document.getElementById('my_introduction');

var startDate = '2023-07-01';
var endDate = Date();

var result = calculateDateDifference(startDate, endDate);
if (result['months'] === 1 && result['years'] === 1) {
    var out = String(result['years']) + ' Year - ' + String(result['months']) + ' Month';
}
else if (result['years'] === 1 && result['months'] != 1) {
    var out = String(result['years']) + ' Year and ' + String(result['months']) + ' Months';
} else if (result['months'] === 1 && result['years'] != 1) {
    var out = String(result['years']) + ' Years and ' + String(result['months']) + ' Month';
} else {
    var out = String(result['years']) + ' Years and ' + String(result['months']) + ' Months';
}


my_introduction_Element.textContent = 'Passionate and results-oriented Data Analyst with ' + out + ' of full-time experience and 8 months of internship experience in data analysis. Skilled in Python, Dynamics 365, Power Apps, Power Automate, Tableau, Power BI, MySQL, Alteryx, and Knime. Experienced in developing automated processes, forecasting dashboards, and campaign automation workflows. Eager to join a detail-oriented team to solve complex problems and drive insights.';

