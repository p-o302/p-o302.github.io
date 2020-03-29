
var text = {
	id: 1,
    title: 'task 1',
    description: 'task 1',
    type: 'task',
    priority: 'high',
    allowFor: [
    	'back_end', 
	    'front_end',
	    'function_test',
	    'performance_test'
     ],
    createdBy: 'Joo',
    assignee: 'joo',
    estimate: '20/03/2020',
    state: 'todo'
}
function showText(){
	var pre = document.getElementsByTagName('pre')[0];
	var myString = JSON.stringify(text,null,7);
	pre.innerHTML	 = myString;

}
function displayform(){ 
    // hiển thị form khi thay đổi số liệu
	let viewDetail = document.getElementsByClassName('viewForm')[0];
    viewDetail.style.display = "block";
    nameForm.title.value = text.title;
    nameForm.type.value = text.type;
    nameForm.state.value = text.state; 
    nameForm.priority.value = text.priority;
    nameForm.allowFor.value = text.allowFor;
    nameForm.description.value = text.title; 
    nameForm.createdBy.value = text.createdBy;
    nameForm.assignee.value = text.assignee;
    nameForm.estimate.value = text.estimate;

}
function hideViewDetail(){
	var view = document.getElementsByClassName('viewForm')[0];
	view.style.display = "none";
}
function saveIssue(){
	text.title = nameForm.title.value;
	text.type = nameForm.type.value;
	text.state = nameForm.state.value;
	text.priority = nameForm.priority.value;
	text.allowFor = getCheckboxValue();
	text.description = nameForm.description.value;
	text.createdBy = nameForm.createdBy.value;
	text.assignee=nameForm.assignee.value;
	text.estimate = nameForm.estimate.value;
	hideViewDetail();
	showText();
}
function getCheckboxValue(){
	 var allow= document.getElementsByName('allowFor');
    let allowFor = [];
    for (var i = 0; i < allow.length; i++) {
        if (allow[i].checked) {
            allowFor.push(allow[i].value);
        }
    }
    return allowFor;
}
