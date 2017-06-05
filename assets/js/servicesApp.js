var servicesApp = angular.module('servicesApp', []);

servicesApp.factory('servicesData', function(){
	var services = [
		{
			'category': 'Manicures',
			'path': 'assets/img/services/mani.jpg',
			'length': 16,
			'types': [
				'Standard Manicure',
				'French Manicure',
				'Gel Manicure',
				'Spa Manicure',
				'Deluxe Manicure',
				'Acrylic Full Set',
				'Refill Acrylic',
				'Gel Full Set',
				'UV Gel Full Set',
				'Refill Gel',
				'Refill UV Gel',
				'Pink & White',
				'Refill Pink Only',
				'Refill Pink & White',
				'Take Off Acrylic',
				'Take Off Gel'
			],
			'prices': [
				14,
				19,
				27,
				19,
				23,
				'28+',
				23,
				'38+',
				50,
				30,
				38,
				50,
				28,
				40,
				10,
				7
			]
		},
		{
			'category': 'Pedicures',
			'path': 'assets/img/services/pedi.jpg',
			'length': 5,
			'types': [
				'Standard Pedicure',
				'French Pedicure',
				'Gel Pedicure',
				'Spa Pedicure',
				'Deluxe Pedicure',
			],
			'prices': [
				25,
				30,
				40,
				35,
				39,
			]
		},
		{
			'category': 'Nail Care Combos',
			'path': 'assets/img/services/combo.jpg',
			'length': 6,
			'types': [
				'Standard Mani-Pedi',
				'French Mani-Pedi',
				'Gel Mani & Standard Pedi',
				'Gel Mani-Pedi',
				'Spa Mani-Pedi',
				'Deluxe Mani-Pedi',
			],
			'prices': [
				37,
				47,
				50,
				65,
				53,
				60,
			]
		},
		{
			'category': 'Waxing',
			'path': 'assets/img/services/wax.jpg',
			'length': 12,
			'types': [
				'Eyebrows',
				'Lips or Chin',
				'Neck',
				'Under Arms',
				'Half Arms',
				'Whole Arms',
				'Half Legs',
				'Whole Legs',
				'Whole Back',
				'Whole Face',
				'Bikini Wax',
				'Brazilian Wax',

			],
			'prices': [
				8,
				6,
				10,
				'15+',
				20,
				35,
				25,
				'40+',
				40,
				25,
				25,
				'40+',
			]
		},
		{
			'category': 'Skin Care',
			'path': 'assets/img/services/skin.jpg',
			'length': 2,
			'types': [
				'Facial -- 30 minutes',
				'Facial -- 60 minutes',
			],
			'prices': [
				35,
				60,
			]
		},
		{
			'category': 'Extra Services',
			'path': 'assets/img/services/extra.jpg',
			'length': 5,
			'types': [
				'Design (per nail)',
				'Regular Finger Nails Polish Change',
				'Regular Toe Nails Polish Change',
				'Gel Polish Change',
				'Repair Acrylic'
			],
			'prices': [
				3,
				7,
				10,
				20,
				5
			]
		},
	];

	function getAllServices(){
		return services;
	}

	return {
		getAllServices:getAllServices
	};
});

servicesApp.filter('range', function() {
	return function(input, total) {
		total = parseInt(total);
		for (var i=0; i<total; i++)
			input.push(i);
		return input;
	};
});

servicesApp.controller('servicesController', function($scope, servicesData){
	$scope.services = servicesData.getAllServices();
});
