/*FORM PROMO*/

window.addEventListener('DOMContentLoaded', function () {
	var formPromo = document.getElementById('form-promo');
	var thanksPromo = document.getElementById('form-promo-thanks');
	var thanksTextPromo = document.getElementById('form-promo-thanks-text');
    var buttonClosePromo = document.getElementById('form-promo-thanks-button');

	if (formPromo) {
		function success() {
			formPromo.reset();
			thanksTextPromo.innerHTML = 'Заявка принята! Наш менеджер свяжется с вами в ближайшее время.';
            thanksPromo.classList.add('show-thanks');
            document.body.classList.add('body_overflow');
		}
	
		function error() {
			thanksTextPromo.innerHTML = 'Упс! Что-то пошло не так. Попробуйте еще раз.';
            thanksPromo.classList.add('show-thanks');
            document.body.classList.add('body_overflow');
		}
	
		formPromo.addEventListener('submit', function (ev) {
			ev.preventDefault();
			var dataPromo = new FormData(formPromo);
			ajax(formPromo.method, formPromo.action, dataPromo, success, error);
		});
	
		buttonClosePromo.addEventListener('click', function() {
            thanksPromo.classList.remove('show-thanks');
            document.body.classList.remove('body_overflow');
		});
	}
});

function ajax(method, url, dataPromo, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(dataPromo);
}

/*FORM QUESTIONS*/

window.addEventListener('DOMContentLoaded', function () {
	var formQuestions = document.getElementById('form-questions');
	var thanksQuestions = document.getElementById('form-questions-thanks');
	var thanksTextQuestions = document.getElementById('form-questions-thanks-text');
    var buttonCloseQuestions = document.getElementById('form-questions-thanks-button');

	if (formQuestions) {
		function success() {
			formQuestions.reset();
			thanksTextQuestions.innerHTML = 'Заявка принята! Наш менеджер свяжется с вами в ближайшее время.';
            thanksQuestions.classList.add('show-thanks');
            document.body.classList.add('body_overflow');
		}
	
		function error() {
			thanksTextQuestions.innerHTML = 'Упс! Что-то пошло не так. Попробуйте еще раз.';
            thanksQuestions.classList.add('show-thanks');
            document.body.classList.add('body_overflow');
		}
	
		formQuestions.addEventListener('submit', function (ev) {
			ev.preventDefault();
			var dataQuestions = new FormData(formQuestions);
			ajax(formQuestions.method, formQuestions.action, dataQuestions, success, error);
		});
	
		buttonCloseQuestions.addEventListener('click', function() {
            thanksQuestions.classList.remove('show-thanks');
            document.body.classList.remove('body_overflow');
		});
	}
});

function ajax(method, url, dataQuestions, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(dataQuestions);
}

/*FORM READY*/

window.addEventListener('DOMContentLoaded', function () {
	var formReady = document.getElementById('form-ready');
	var thanksReady = document.getElementById('form-ready-thanks');
	var thanksTextReady = document.getElementById('form-ready-thanks-text');
    var buttonCloseReady = document.getElementById('form-ready-thanks-button');

	if (formReady) {
		function success() {
			formReady.reset();
			thanksTextReady.innerHTML = 'Заявка принята! Наш менеджер свяжется с вами в ближайшее время.';
            thanksReady.classList.add('show-thanks');
            document.body.classList.add('body_overflow');
		}
	
		function error() {
			thanksTextReady.innerHTML = 'Упс! Что-то пошло не так. Попробуйте еще раз.';
            thanksReady.classList.add('show-thanks');
            document.body.classList.add('body_overflow');
		}
	
		formReady.addEventListener('submit', function (ev) {
			ev.preventDefault();
			var dataReady = new FormData(formReady);
			ajax(formReady.method, formReady.action, dataReady, success, error);
		});
	
		buttonCloseReady.addEventListener('click', function() {
            thanksReady.classList.remove('show-thanks');
            document.body.classList.remove('body_overflow');
		});
	}
});

function ajax(method, url, dataReady, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(dataReady);
}
