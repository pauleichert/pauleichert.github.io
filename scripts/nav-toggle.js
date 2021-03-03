// JavaScript Document
$(function () {
			$("#hamburger").click(function() {
				$(".nav-overlay").toggleClass("d-flex");
				$("#hamburger").toggleClass("rot45 black-txt");
				$(".nav-container").toggleClass("noBg");
				$(".myName").toggleClass("black-txt");
				});
			})