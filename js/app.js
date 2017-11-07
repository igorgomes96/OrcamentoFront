angular.module('orcamentoApp', ['ui.router', 'uiInputSiblings']);

function addDays(date, days) {
	var result = new Date(date);
  	result.setDate(result.getDate() + days);
  	return result;
}