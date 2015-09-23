/*! Alerts v1.0.0 */
/***************************************************************************************************************************************************************
 *
 * alerts
 *
 * Toggeling classes and aria-hidden for alerts
 *
 **************************************************************************************************************************************************************/


(function(GUI) {

	var module = {};

	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	// module init method
	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	module.init = function alertsInit() {
		GUI.debugging( 'alerts: Initiating', 'report' );


		$('.js-alertclose').on('click', function closeAlert() {
			GUI.debugging( 'alerts: Closing alert', 'interaction' );

			var $parent = $(this).parent('.alert');

			$parent
				.addClass('is-closed')
				.attr('aria-hidden', 'true');
		});
	};


	GUI.alerts = module;


	// run module
	GUI.alerts.init();

}(GUI));
