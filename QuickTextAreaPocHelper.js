({
	openQuickTextSelection: function(component, srcElem) {
        const elemId = 'popup' + (new Date().getTime());
        let elem = document.createElement('div');
        elem.id = elemId;
        elem.style.position = 'absolute';
        elem.style.top = '10px';
        elem.style.left = '10px';
        elem.style.height = (srcElem.offsetHeight - 20) + 'px';
        elem.style.width = (srcElem.offsetWidth - 20) + 'px';
        elem.style.zIndex = 1000;
        elem.style.backgroundColor = 'white';
        elem.style.border = '1px solid black';
        elem.style.padding = '5px';
        elem.innerHTML = '';
        srcElem.parentNode.appendChild(elem);
        
        let input = document.createElement('input');
        input.type = 'text';
        input.style.width = '100%';
        elem.appendChild(input);
        elem.addEventListener('keyup', function(event) {
            const isEnter = (event.keyCode === 13);
            const isESC = (event.keyCode === 27);
            if (isEnter || isESC) {
                if (isEnter) {
                    let insertValue = input.value;
                    if (input.value === 'kredit') {
                        insertValue = 'Dette er en længere smøre om kreditvurdering og hvordan det foregår...';
                    } else if (input.value === 'pensionsinfo') {
                        insertValue = 'Sådan tilgår du PensionsInfo:\n1. Åben Netbank\n2. Klik på Pension i menuen til venstre\n3. Klik Aktivér PensionsInfo';
                    }
                    srcElem.value = srcElem.value.substring(0, srcElem.selectionStart) 
                    	+ insertValue
                    	+ srcElem.value.substring(srcElem.selectionStart);
                }
                event.preventDefault = true;
		        srcElem.parentNode.removeChild(elem);
                srcElem.focus();
            }
        })
        input.focus();
	}
})