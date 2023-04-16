jQuery(document).foundation();
jQuery(function(){

	jQuery('img.svg').each(function(){
		var $img = jQuery(this);
		var img_id = $img.attr('id');
		var img_class = $img.attr('class');
		var img_url = $img.attr('src');

		jQuery.get(img_url, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof img_id !== 'undefined') {
				$svg = $svg.attr('id', img_id);
			}
			// Add replaced image's classes to the new SVG
			if(typeof img_class !== 'undefined') {
				$svg = $svg.attr('class', img_class+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

			// Get width and height for viewBox
			var svg_width = $svg.attr('width');
			var svg_height = $svg.attr('height');

			// Remove problematic width and height
			$svg.removeAttr('width');
			$svg.removeAttr('height');

			// Apply viewBox to svg
			if(typeof svg_width !== 'undefined' && typeof svg_height !== 'undefined') {
				$svg = $svg.attr('viewBox', '0 0 ' + svg_width + ' ' + svg_height);
			}

		}, 'xml');

	});
	const toggle_switch = jQuery('.theme.switch input[type="checkbox"]');
	const match_media_pref_light = window.matchMedia('(prefers-color-scheme: light)');
	const current_theme = localStorage.getItem('theme');
	const root_element = jQuery(':root');

	if (current_theme) {
		root_element.attr('data-theme', current_theme);
		if (current_theme === 'light' || match_media_pref_light.matches) {
			toggle_switch.prop('checked', true).trigger('change');
		}
	}
	function set_indicators(type) {
		root_element.attr('data-theme', type);
		localStorage.setItem('theme', type);
	}
	function switch_theme(e) {
		let new_theme = 'dark;'
		if (e.target.checked) {
			new_theme = 'light';
		}
		set_indicators(new_theme);
	}
	function on_system_theme_change(e) {
		let data_theme = root_element.attr('data-theme');
		if (e.matches && data_theme === 'light' || !e.matches && data_theme === 'dark') {
			return;
		}
		if (e.matches) {
			set_indicators('light');
			toggle_switch.prop('checked', true).trigger('change');
		}
		else {
			set_indicators('dark');
			toggle_switch.prop('checked', false).trigger('change');
		}
	}
	toggle_switch.on('change', switch_theme);
	match_media_pref_light.addEventListener('change', on_system_theme_change);
});
