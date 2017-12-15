/**
 * This method is used to get students
 */
function getStudents() {
	$.ajax({
		url : 'http://localhost:5000/v1/students',
		type : 'get',
		beforeSend : function(request) {
			request.setRequestHeader("Access-Control-Allow-Origin", "*");
			request.setRequestHeader("content-type", "application/json");

		},

		dataType : 'json',
		success : function(data) {
			$.each(data, function(i, obj) {
				//use obj.id and obj.name here, for example:
				var elem = "<tr><td>" + obj.name + "</td><td>" + obj.age
						+ "</td><td>" + obj.major + "</td><td>" + obj.sport
						+ "</td><td>" + obj.rank + "</td><td>"
						+ "<td> <a href='editStudent.html?id=" + obj.id
						+ "'> <button>Edit</button></a>"
						+ "<button onclick='deleteStudent(" + obj.id
						+ ")'>Delete</button><td>";
				$("#studentTableBody").append(elem);
			});
		}

	});
}

/**
 * This method delete a  student
 */

function deleteStudent(id) {
	$.ajax({
		url : 'http://localhost:5000/v1/student/' + id,
		type : 'delete',
		dataType : 'json',
		beforeSend : function(request) {
			request.setRequestHeader("Access-Control-Allow-Origin", "*");
			request.setRequestHeader("content-type", "application/json");
		},
		success : function(data, textStatus, xhr) {
			if (xhr.status == 200) {
				alert("Successfully deleted");
			}
			;
			location.reload();
		}

	});
}

/**
 * This method creates a new student
 */

function addStudent() {
	//getting Json value of Form
	var json = ConvertFormToJSON($("#student"));
	//adding ajax request
	$.ajax({
		url : 'http://localhost:5000/v1/student',
		type : 'post',
		beforeSend : function(request) {
			request.setRequestHeader("Access-Control-Allow-Origin", "*");//requiured for cross-domain request.
			request.setRequestHeader("Content-Type", "application/json");
			request.setRequestHeader("Access-Control-Expose-Headers", "id");

		},
		data : JSON.stringify(json),
		dataType : 'json',
		success : function(data, textStatus, jqXHR) {
			if (jqXHR.status == 201) {
				alert("Successfully added ");
			};
			
			location.reload();
		}

	})
}
/**
 * get the single student
 */
function getStudent(id){
	$.ajax({
		url : 'http://localhost:5000/v1/student/'+id,
		type : 'get',
		beforeSend : function(request) {
			request.setRequestHeader("Access-Control-Allow-Origin", "*");
			request.setRequestHeader("content-type", "application/json");

		},

		dataType : 'json',
		success : function(data) {
			$("#name").val(data.name);
			$("#age").val(data.age);
			$("#major").val(data.major);
			$("#sport").val(data.sport);
			$("#rank").val(data.rank);
			
		}

	});
	
}

/**
 * This method edit a  student
 */

function editStudent() {
	var json = ConvertFormToJSON($("#updateForm"));
	$.ajax({
		url : 'http://localhost:5000/v1/student/' + $("#id").val(),
		type : 'put',
		beforeSend : function(request) {
			request.setRequestHeader("Access-Control-Allow-Origin", "*");
			request.setRequestHeader("Content-Type", "application/json");

		},
		data : JSON.stringify(json),
		dataType : 'json',
		success : function(data, textStatus, xhr) {
			if (xhr.status == 200) {
				alert("Successfully Updated");
			}
			;
			location.reload();
		}

	})
}

/**
 * This variable is used to get parameter
 */

var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL
			.split('&'), sParameterName, i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};
/**
 * 
 * This function is used to convert Form to Json
 * 
 */
function ConvertFormToJSON(form) {
	var array = jQuery(form).serializeArray();
	var json = {};

	jQuery.each(array, function() {
		json[this.name] = this.value || '';
	});

	return json;
}
