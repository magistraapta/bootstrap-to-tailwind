'use strict';

(function(document, window, index) {
	// feature detection for drag&drop upload
	var isAdvancedUpload = (function() {
		var div = document.createElement('div');
		return (
			('draggable' in div || ('ondragstart' in div && 'ondrop' in div)) &&
			'FormData' in window &&
			'FileReader' in window
		);
	})();

	var MESSAGE_ERRORS = {
		'size': "Ukuran file gambar tidak boleh lebih dari 2Mb.",
		'dimension': "Dimensi file gambar harus berukuran 1048x700."
	};

	// applying the effect for every form
	var forms = document.querySelectorAll('.dropload');
	Array.prototype.forEach.call(forms, function(form) {
		var input = form.querySelector('input[type="file"]'),
			label = form.querySelector('label'),
			totalFiles = form.querySelector('span.totalFiles'),
			errorMsg = form.querySelector('.dropload__error span'),
			restart = form.querySelectorAll('.dropload__restart'),
			droppedFiles = false,
			showFiles = function(ele) {
				$('.form-text').text("").addClass("d-none");
				var files = ele.files;				

				validateFile(files[0].size, function(res) {
					if(res === true) {
						var reader = new FileReader();
						reader.onload = function(e) {					
							var img = new Image;
							img.src = reader.result;
						    img.onload = function() {
						        if(img.width == 1048 && img.height == 700) {
						        	$(input).parents('.dropload').attr('style', `background-image: url(${e.target.result})`);
									$(input)
										.parents('.dropload')
										.find('.dropload-drop p')
										.html(`${files[0].name} sucessfully uploaded`);
								} else {
									$(input).val('');
									//$('#error-cover').text(MESSAGE_ERRORS.dimension).removeClass("d-none");
									$(input).parents('.dropload').addClass('dropload__ready').removeClass('dropload__dropped');
									Swal.fire({
									  title: 'Error!',
									  text: MESSAGE_ERRORS.dimension,
									  type: 'error',						  
									})
								}
						    };							
						};

						
						reader.readAsDataURL(files[0]);
						$(input).parents('.dropload').removeClass('dropload__ready').addClass('dropload__dropped');
												
					} else {
						$(input).val('');
						Swal.fire({
						  title: 'Error!',
						  text: MESSAGE_ERRORS.size,
						  type: 'error',						  
						})
						//$('#error-cover').text(MESSAGE_ERRORS.size).removeClass("d-none");
					}
				})				
			},
			loadingState = function(ele) {
				var files = ele.files;
			},
			triggerFormSubmit = function() {
				var event = document.createEvent('HTMLEvents');
				event.initEvent('submit', true, false);
				form.dispatchEvent(event);
			},
			validateFile = function(size, callback) {
				if(size > 2000000) {
					callback(false);
				} else {
					callback(true);
				}
			};

		// letting the server side to know we are going to make an Ajax request
		var ajaxFlag = document.createElement('input');
		ajaxFlag.setAttribute('type', 'hidden');
		ajaxFlag.setAttribute('name', 'ajax');
		ajaxFlag.setAttribute('value', 1);
		form.appendChild(ajaxFlag);

		// automatically submit the form on file select
		input.addEventListener('change', function(e) {									
			showFiles(e.target);
			// triggerFormSubmit();
		});

		// drag&drop files if the feature is available
		if (isAdvancedUpload) {
			form.classList.add('dropload__ready'); // letting the CSS part to know drag&drop is supported by the browser

			[ 'drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop' ].forEach(function(event) {
				form.addEventListener(event, function(e) {
					// preventing the unwanted behaviours
					e.preventDefault();
					e.stopPropagation();
				});
			});
			[ 'dragover', 'dragenter' ].forEach(function(event) {
				form.addEventListener(event, function() {
					form.classList.remove('dropload__ready');
					form.classList.remove('dropload__dropped');
					form.classList.add('dropload__dragged');
				});
			});
			[ 'dragleave', 'dragend', 'drop' ].forEach(function(event) {
				form.addEventListener(event, function() {
					form.classList.add('dropload__ready');
					form.classList.remove('dropload__dragged');
				});
			});
			form.addEventListener('drop', function(e) {				    			
				droppedFiles = e.dataTransfer; // the files that were dropped
				var files = e.dataTransfer.files;				
				input.files = files;
				
				showFiles(droppedFiles);								
				// triggerFormSubmit();
			});
		}

		// restart the form if has a state of error/success
		Array.prototype.forEach.call(restart, function(entry) {
			entry.addEventListener('click', function(e) {
				e.preventDefault();
				form.classList.remove('is-error', 'is-success');
				input.click();
			});
		});

		// Firefox focus bug fix for file input
		input.addEventListener('focus', function() {
			input.classList.add('has-focus');
		});
		input.addEventListener('blur', function() {
			input.classList.remove('has-focus');
		});
	});
})(document, window, 0);
