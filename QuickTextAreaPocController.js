({
	keypress: function(component, event, helper) {
        if (((event.ctrlKey && navigator.platform!=='MacIntel') || event.metaKey) && event.key === '.') {
            helper.openQuickTextSelection(component, event.target);
        }
	}
})