
function calculateDateDifference(startDate, endDate) {
    // Parse the dates if they are not Date objects
    if (!(startDate instanceof Date)) {
        startDate = new Date(startDate);
    }
    if (!(endDate instanceof Date)) {
        endDate = new Date(endDate);
    }

    var yearsDifference = endDate.getFullYear() - startDate.getFullYear();
    var monthsDifference = endDate.getMonth() - startDate.getMonth();

    // Adjust for partial months
    if (monthsDifference < 0) {
        yearsDifference--;
        monthsDifference += 12;
    }

    // Adjust for days
    if (endDate.getDate() < startDate.getDate()) {
        monthsDifference--;
        // Add 12 months to monthsDifference if it goes negative
        if (monthsDifference < 0) {
            monthsDifference += 12;
            yearsDifference--;
        }
    }

    return { years: yearsDifference, months: monthsDifference };
}


var experience_in_year_month_Element = document.getElementById('experience_in_year_month');
var startDate = '2022-11-01';
var endDate = Date();

var result = calculateDateDifference(startDate, endDate);
if (result['years'] === 1) {
    experience_in_year_month_Element.textContent = String(result['years']) + ' Year and ' + String(result['months']) + ' Months';
} else if (result['Months'] === 1) {
    experience_in_year_month_Element.textContent = String(result['years']) + ' Years and ' + String(result['months']) + ' Month';
} else if (result['Months'] === 1 && result['years'] === 1) {
    experience_in_year_month_Element.textContent = String(result['years']) + ' Year and ' + String(result['months']) + ' Month';
} else {
    experience_in_year_month_Element.textContent = String(result['years']) + ' Years and ' + String(result['months']) + ' Months';
}
