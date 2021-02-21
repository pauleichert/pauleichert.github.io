// JavaScript Document
$(function () {
			$("#hamburger").click(function() {
				$(".nav-overlay").toggleClass("d-flex");
				$("#hamburger").toggleClass("rot45");
				$(".nav-container").toggleClass("noBg");
				});
			})